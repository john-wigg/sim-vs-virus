class Simulation {
    constructor(width, height, num_people) {
        /* Simulation parameters */
        this.infection_distance = 0.2; // Distance at which infection probability reaches 0.5
        this.minimum_distance = 0.1; // Distance which people keep from each other at minimum

        this.mortality = 0.02; // Mortality rate of the virus
        this.incubation_period = 14; // Incubation period (days)
        this.infection_duration = 10; // Duration of the infection until deatch or recovery (days)

        this.infectivity = 0.9; // Probability of getting infected when someone already carries the virus (e.g. on his hands, should be affected by personal hygiene)

        this.population = 500; // Number of people to simulate
        this.velocity = 0.5 // Velocity of the people
        this.days_per_sec = 1.0; // Days per second in the simulation

        this.frac_population_normal = 0.8;
        this.frac_population_doctors = 0.1;
        this.frac_population_risk = 0.1;

        this.people = [];// Array mit personen

        this.width = width;
        this.height = height;

        // randomly initialize Person positions
        for (var i = 0; i < num_people; i++) {
            this.people.push(new Person())
            this.people[i].position.x = Math.random() * width;
            this.people[i].position.y = Math.random() * height;
            this.people[i].velocity = this.velocity
            let dir = new Vector2()
            dir.x = Math.random() * 2.0 - 1.0
            dir.y = Math.random() * 2.0 - 1.0
            this.people[i].direction = dir.normalized()
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
class Group {
    constructor() {
        // TODO
    }
}

class NormalGroup extends Group {
    constructor() {
        // TODO
    }
}

class DoctorGroup extends Group {
    constructor() {
        // TODO
    }
}

class RiskGroup extends Group {
    constructor() {
        // TODO
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
        this.days_since_infection
        this.group = new Group()

        this.next_position = new Vector2(0.0, 0.0)
    }

    calculate_step(delta, simulation) {
        this.old_state = this.state;
        if (this.state != "deceased") {
            // Naive way of people bouncing off each other
            // get closest person
            // TODO: Predict collisions
            var min_dist = simulation.minimum_distance; // people should only affect each other if at minimum distance
            var min_idx = -1;
            for (var i = 0; i < simulation.people.length; i++) {
                if (simulation.people[i] === this) continue;
                // get closest person within minimum distance
                let dist = this.position.dist(simulation.people[i].position);
                if (dist < min_dist && simulation.people[i].state != "deceased") {
                    min_dist = dist;
                    min_idx = i;
                }
            }
            if (min_idx != -1) // "collision" has occured
            {
                if (simulation.people[min_idx].state == "infected" && this.state == "healthy") {
                    if (Math.random() < simulation.infectivity * simulation.infection_prob(min_dist)) {
                        //TODO: Calculate infection probability
                        this.days_since_infection = 0.0;
                        this.state = "infected";
                    }
                }
                this.direction = this.position.sub(simulation.people[min_idx].position).normalized(); // set new direction
            }

            // Bounce from walls
            if (this.position.x > simulation.width || this.position.x < 0) {
                this.direction.x = -this.direction.x;
            }
            if (this.position.y > simulation.height || this.position.y < 0) {
                this.direction.y = -this.direction.y;
            }

            this.next_position = this.position.add(this.direction.multiply(delta / 1000.0 * this.velocity * simulation.days_per_sec));

            // Update days since infection
            if (this.state == "infected") {
                this.days_since_infection += delta * simulation.days_per_sec / 1000.0;
                if (this.days_since_infection > simulation.infection_duration) {
                    if (Math.random() < simulation.mortality) {
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