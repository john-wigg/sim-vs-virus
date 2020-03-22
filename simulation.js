class Simulation {
    constructor(width, height, num_people) {
        /* Simulation parameters */
        this.infection_distance = 0.2; // Distance at which infection probability reaches 0.5
        this.minimum_distance = 0.1; // Distance which people keep from each other at minimum

        this.incubation_period = 14; // Incubation period (days)
        this.infection_duration = 10; // Duration of the infection until deatch or recovery (days)

        this.population = 500; // Number of people to simulate
        this.velocity = 0.5 // Velocity of the people
        this.days_per_sec = 1.0; // Days per second in the simulation

        this.hospital_capacity = 0.15;
        this.mortality_multiplier = 7.5;

        this.frac_population_normal = 0.8;
        this.frac_population_doctors = 0.0;
        this.frac_population_risk = 0.2;

        this.count_infected = 1;

        this.people = [];// Array mit personen
        this.boxes = [];

        this.width = width;
        this.height = height;

        this.max_days = 100.0;

        this.stopped = true

        this.group_normal = new Group("Normal", 0.9, 0.02, 1.0);
        this.group_risk = new Group("Risk", 0.5, 0.1, 1.0);

        for (var i = 0; i < num_people; i++) {
            this.people.push(new Person())
        }
    }

    initialize() {
        this.time_days = 0.0;
        // randomly initialize Person positions
        for (var i = 0; i < this.people.length; i++) {
            // Start all inside a box
            this.people[i].velocity = this.velocity
            let dir = new Vector2()
            dir.x = Math.sin(Math.random() * 2 * Math.PI);
            dir.y = Math.cos(Math.random() * 2 * Math.PI);
            this.people[i].direction = dir.normalized()

            if (Math.random() < this.frac_population_normal) {
                this.people[i].group = this.group_normal;
            }
            else {
                this.people[i].group = this.group_risk;
            }

            for (var j = 0; j < 10; j++) {
                if (i < 20 + j * 20 && i >= 20 * j) {
                    this.people[i].position.x = this.boxes[j].min_x + Math.random() * (this.boxes[j].max_x - this.boxes[j].min_x);
                    this.people[i].position.y = this.boxes[j].min_y + Math.random() * (this.boxes[j].max_y - this.boxes[j].min_y);
                }
            }
        }

        for (var j = 0; j < this.people.length; j++) {
            this.people[j].state = "healthy";
        }

        for (var j = 0; j < this.count_infected; j++) {
            let idx = Math.floor(Math.random() * this.people.length);
            this.people[idx].state = "infected";
            this.people[idx].days_since_infection = 0.0;
        }
        this.stopped = false;
    }

    update(delta) {
        if (!this.stopped) {
            // delta in milliseconds
            // TODO
            // Should return array of structs
            if (this.get_count("infected")["Normal"] + this.get_count("infected")["Risk"] == 0) {
                this.stop();
            }
            for (var i = 0; i < this.people.length; i++) {
                this.people[i].calculate_step(delta, this);
            }
            for (var i = 0; i < this.people.length; i++) {
                this.people[i].move();
            }
            this.time_days += delta / 1000.0 * this.days_per_sec;
            if (this.time_days > this.max_days) {
                this.stop();
            }
        }
        return this.people;
    }

    stop() {
        this.stopped = true;
    }

    resume() {
        this.stopped = false;
    }

    // Returns count of people in state
    get_count(state) {
        let count = { "Normal": 0, "Risk": 0 };
        for (var i = 0; i < this.people.length; i++) {
            if (this.people[i].state == state) {
                if (this.people[i].group.name == "Normal") {
                    count["Normal"]++;
                }
                else if (this.people[i].group.name == "Risk") {
                    count["Risk"]++;
                }
            }
        }
        return count;
    }

    get_total_count(state) {
        let count = 0;
        for (var i = 0; i < this.people.length; i++) {
            if (this.people[i].state == state) {
                count++;
            }
        }
        return count;
    }

    get_people_number(filter = ["Normal", "Risk"]) {
        let count = 0;
        for (var i = 0; i < this.people.length; i++) {
            if (filter.includes(this.people[i].group.name)) {
                count++;
            }
        }
        return count;
    }
}

class IsolationBox {
    constructor(min_x, max_x, min_y, max_y, area_escape, area_entry) {
        this.min_x = min_x;
        this.max_x = max_x;
        this.min_y = min_y;
        this.max_y = max_y;
        this.area_escape = area_escape;
        this.area_entry = area_entry;
    }
}

class Group {
    constructor(name, infectivity, mortality, velocity_multiplicator) {
        this.name = name;
        this.infectivity = infectivity;
        this.mortality = mortality;
        this.velocity_multiplicator = velocity_multiplicator
    }
}

class Vector2 {
    constructor(x, y) {
        this.x = (x === undefined) ? 0.0 : x;
        this.y = (y === undefined) ? 0.0 : y;
    }

    // Multiply vector with a scalar
    multiply(a) {
        var res = new Vector2()
        res.x = this.x * a;
        res.y = this.y * a;
        return res
    }

    // Add vector to another vector
    add(b_vec) {
        var res = new Vector2()
        res.x = this.x + b_vec.x;
        res.y = this.y + b_vec.y;
        return res
    }

    // Subtract vector from this vector
    sub(b_vec) {
        var res = new Vector2()
        res.x = this.x - b_vec.x;
        res.y = this.y - b_vec.y;
        return res;
    }

    // Dot product with another vector
    dot(b_vec) {
        return this.x * b_vec.x + this.y * b_vec.y;
    }

    // Return length of vector
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    // Return normalized vector
    normalized() {
        var res = new Vector2();
        var len = this.length();
        res.x = this.x / len;
        res.y = this.y / len;
        return res;
    }

    // Distance to another vector if they represent points in space
    dist(b_vec) {
        let x_dist = b_vec.x - this.x;
        let y_dist = b_vec.y - this.y;
        return Math.sqrt(x_dist * x_dist + y_dist * y_dist);
    }
}

class Person {
    constructor() {
        this.velocity = 1.0;
        this.direction = new Vector2(0.0, 0.0);
        this.position = new Vector2(0.0, 0.0);
        this.state = "healthy" // states are "healthy", "infected"
        this.old_state = "healthy"
        this.days_since_infection = 0.0;
        this.group = new Group()

        this.next_position = new Vector2(0.0, 0.0)
    }

    is_in_box(box) {
        return (this.position.x < box.max_x && this.position.x > box.min_x && this.position.y < box.max_y && this.position.y > box.min_y)
    }

    get_inside_box(boxes) {
        for (var i = 0; i < boxes.length; i++) {
            if (this.is_in_box(boxes[i])) {
                return boxes[i];
            }
        }
        return null;
    }

    calculate_step(delta, simulation) {
        this.old_state = this.state;
        if (this.state != "deceased") {
            // Naive way of people bouncing off each other
            // get closest person
            // TODO: Predict collisions
            var col_idx = -1;
            var col_dist = 0.0;
            for (var i = 0; i < simulation.people.length; i++) {
                if (simulation.people[i] === this) continue;
                // get closest person within minimum distance
                let dist = this.position.dist(simulation.people[i].position);
                if (dist < simulation.minimum_distance && simulation.people[i].state != "deceased" && simulation.people[i].get_inside_box(simulation.boxes) === this.get_inside_box(simulation.boxes)) {
                    col_idx = i;
                    break;
                }
            }
            if (col_idx != -1) // "collision" has occured
            {
                if (simulation.people[col_idx].state == "infected" && this.state == "healthy") {
                    if (Math.random() < simulation.people[col_idx].group.infectivity) {
                        //TODO: Calculate infection probability
                        this.days_since_infection = 0.0;
                        this.state = "infected";
                    }
                }
                this.direction = this.position.sub(simulation.people[col_idx].position).normalized(); // set new direction
            }

            // Bounce from walls
            if (this.position.x > simulation.width || this.position.x < 0) {
                this.direction.x = -this.direction.x;
            }
            if (this.position.y > simulation.height || this.position.y < 0) {
                this.direction.y = -this.direction.y;
            }

            // Check if going through walls of a box
            // TODO: Es sollten nicht alle Punkte in der Box doppelt rechnen müssen
            var next_position = this.position.add(this.direction.multiply(delta / 1000.0 * this.velocity * this.group.velocity_multiplicator * simulation.days_per_sec));
            var direction_changed = false;
            for (var i = 0; i < simulation.boxes.length; i++) {
                if (this.is_in_box(simulation.boxes[i])) {
                    if (Math.random() >= simulation.boxes[i].area_escape[this.group.name]) { // If person can't get out
                        if (next_position.x > simulation.boxes[i].max_x || next_position.x < simulation.boxes[i].min_x) {
                            this.direction.x = -this.direction.x;
                            direction_changed = true
                        }
                        if (next_position.y > simulation.boxes[i].max_y || next_position.y < simulation.boxes[i].min_y) {
                            this.direction.y = -this.direction.y;
                            direction_changed = true
                        }
                    }
                }
            }

            for (var i = 0; i < simulation.boxes.length; i++) {
                if (!this.is_in_box(simulation.boxes[i])) {
                    if (next_position.x > simulation.boxes[i].min_x && next_position.x < simulation.boxes[i].max_x && next_position.y > simulation.boxes[i].min_y && next_position.y < simulation.boxes[i].max_y) {
                        // People 
                        if (Math.random() >= simulation.boxes[i].area_entry[this.group.name]) {
                            if (this.position.x > simulation.boxes[i].max_x || this.position.x < simulation.boxes[i].min_x) {
                                this.direction.x = -this.direction.x;
                                direction_changed = true
                            }
                            if (this.position.y > simulation.boxes[i].max_y || this.position.y < simulation.boxes[i].min_y) {
                                this.direction.y = -this.direction.y;
                                direction_changed = true
                            }
                        }
                    }
                }
            }


            if (direction_changed) {
                this.next_position = this.position.add(this.direction.multiply(delta / 1000.0 * this.velocity * this.group.velocity_multiplicator * simulation.days_per_sec));
            }
            else {
                this.next_position = next_position;
            }

            // Update days since infection
            if (this.state == "infected") {
                this.days_since_infection += delta * simulation.days_per_sec / 1000.0;
                if (this.days_since_infection > simulation.infection_duration) {
                    let total_mortality = this.group.mortality;
                    // If out of capacity, the mortality rate rises
                    if (simulation.get_total_count("infected") > simulation.hospital_capacity * simulation.people.length) {
                        total_mortality *= simulation.mortality_multiplier;
                    }
                    if (Math.random() < total_mortality) {
                        this.state = "deceased";
                    }
                    else {
                        this.state = "recovered"
                    }
                }
            }
        }
    }

    move() {
        this.position = this.next_position;
    }
}

// TODO: Add groups with different behaviour
// TODO: Potential class that represents the underlying potential and potential wells