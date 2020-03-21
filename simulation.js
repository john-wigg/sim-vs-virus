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

        this.frac_population_normal = 0.8;
        this.frac_population_doctors = 0.1;
        this.frac_population_risk = 0.1;

        this.people = [];// Array mit personen
        this.boxes = [];

        this.width = width;
        this.height = height;

        this.group_normal = new Group("Normal", 0.5, 0.01, 0.1, 1.0, { "Normal": 0.1, "Doctor": 0.2, "Risk": 0.1 });
        this.group_doctor = new Group("Doctor", 0.1, 0.01, 0.5, 1.0, { "Normal": 0.2, "Doctor": 0.2, "Risk": 0.1 });
        this.group_risk = new Group("Risk", 0.9, 0.1, 0.2, 1.0, { "Normal": 0.1, "Doctor": 0.1, "Normal": 0.2 });

        for (var i = 0; i < num_people; i++) {
            this.people.push(new Person())
        }
    }

    initialize() {
        // randomly initialize Person positions
        for (var i = 0; i < this.people.length; i++) {
            // Start all inside a box
            var box = this.boxes[0];
            this.people[i].position.x = box.min_x + Math.random() * (box.max_x - box.min_x);
            this.people[i].position.y = box.min_y + Math.random() * (box.max_y - box.min_y);
            //this.people[i].position.x = Math.random() * width;
            //this.people[i].position.y = Math.random() * height;
            this.people[i].velocity = this.velocity
            let dir = new Vector2()
            dir.x = Math.random() * 2.0 - 1.0
            dir.y = Math.random() * 2.0 - 1.0
            this.people[i].direction = dir.normalized()

            if (i < this.frac_population_normal * this.people.length) {
                this.people[i].group = this.group_normal;
            }
            else if (i < (this.frac_population_normal + this.frac_population_doctors) * this.people.length) {
                this.people[i].group = this.group_doctor;
            }
            else {
                this.people[i].group = this.group_risk;
            }
        }
        this.people[0].state = "infected"
    }

    update(delta) {
        // delta in milliseconds
        // TODO
        // Should return array of structs
        for (var i = 0; i < this.people.length; i++) {
            this.people[i].calculate_step(delta, this);
        }
        for (var i = 0; i < this.people.length; i++) {
            this.people[i].move();
        }
        return this.people;
    }

    // Returns count of people in state
    get_count(state) {
        let count = 0;
        for (var i = 0; i < this.people.length; i++) {
            if (this.people[i].state == state) {
                count++;
            }
        }
        return count;
    }

    // Infection probability as a function of distance
    // Adjusted so that infectivity reaches 0.5 at infection_distance
    infection_prob(dist) {
        return Math.exp(-0.693147 * (dist - 0.1) / this.infection_distance); // TODO: Not very pretty
    }
}

class IsolationBox {
    constructor(min_x, max_x, min_y, max_y) {
        this.min_x = min_x;
        this.max_x = max_x;
        this.min_y = min_y;
        this.max_y = max_y;
    }
}

class Group {
    constructor(name, infectivity, mortality, area_escape, velocity_multiplicator, distance_to) {
        this.name = name;
        this.infectivity = infectivity;
        this.mortality = mortality;
        this.area_escape = area_escape;
        this.velocity_multiplicator = velocity_multiplicator
        this.distance_to = distance_to;
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
                if (dist < this.group.distance_to[simulation.people[i].group.name] && simulation.people[i].state != "deceased") {
                    col_dist = dist
                    col_idx = i;
                    break;
                }
            }
            if (col_idx != -1) // "collision" has occured
            {
                if (simulation.people[col_idx].state == "infected" && this.state == "healthy" && simulation.people[col_idx].get_inside_box(simulation) === this.get_inside_box(simulation)) {
                    if (Math.random() < simulation.people[col_idx].group.infectivity * simulation.infection_prob(col_dist)) {
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
                    if (Math.random() >= this.group.area_escape) { // If person can't get out
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

            /*
            for (var i = 0; i < simulation.boxes.length; i++) {
                if (!this.is_in_box(simulation.boxes[i])) {
                    // People 
                    if (next_position.x > simulation.boxes[i].min_x && next_position.x < simulation.boxes[i].max_x) {
                        this.direction.x = -this.direction.x;
                        direction_changed = true
                    }
                    if (next_position.y > simulation.boxes[i].min_y && next_position.y < simulation.boxes[i].max_y) {
                        this.direction.y = -this.direction.y;
                        direction_changed = true
                    }
                }
            }
            */

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
                    if (Math.random() < this.group.mortality) {
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