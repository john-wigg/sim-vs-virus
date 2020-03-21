class Simulation {
    constructor(width, height, num_people) {
        /* Simulation parameters */
        this.infectivity_distance = 1.0; // Distance at which infection probability reaches 0.5
        this.minimum_distance = 1.0; // Distance which people keep from each other at minimum

        this.mortality = 0.02; // Mortality rate of the virus
        this.incubation_period = 14; // Incubation period (days)
        this.infection_duration = 10; // Duration of the infection until deatch or recovery (days)

        this.infectiveness = 0.9; // Probability of getting infected when someone already carries the virus (e.g. on his hands, should be affected by personal hygiene)

        this.population = 500; // Number of people to simulate
        this.velocity = 0.1 // Velocity of the people
        this.days_per_sec = 1.0; // Days per second in the simulation

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
    }

    update(delta) {
        // delta in milliseconds
        // TODO
        // Should return array of structs
        for (var i = 0; i < this.people.length; i++) {
            this.people[i].step(delta, this)
        }
        return this.people;
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
    }

    step(delta, simulation) {
        // Naive way of people bouncing off each other
        // get closest person
        // TODO: Predict collisions
        var min_dist = 0.1 * simulation.minimum_distance; // people should only affect each other if at minimum distance
        var min_idx = -1;
        for (var i = 0; i < simulation.people.length; i++) {
            if (simulation.people[i] === this) continue;
            // get closest person within minimum distance
            let dist = this.position.dist(simulation.people[i].position);
            if (dist < min_dist) {
                min_dist = dist;
                min_idx = i;
            }
        }
        if (min_idx != -1) // "collision" has occured
        {
            if (simulation.people[min_idx].state == "infected" && this.state == "healthy") {
                if (Math.random() < simulation.infectiveness) {
                    //TODO: Calculate infection probability
                    this.days_since_infection = 0.0;
                }
                this.old_state = this.state;
                this.state = "infected";
            }
            let new_direction = this.position.sub(simulation.people[min_idx].position).normalized(); // set new direction#
            this.direction = new_direction;
            simulation.people[min_idx].direction = new_direction.multiply(-1.0);
        }

        // Bounce from walls
        if (this.position.x > simulation.width || this.position.x < 0) {
            this.direction.x = -this.direction.x;
        }
        if (this.position.y > simulation.height || this.position.y < 0) {
            this.direction.y = -this.direction.y;
        }

        this.position = this.position.add(this.direction.multiply(delta / 1000.0 * this.velocity));

        // Update days since infection
        if (this.state == "infected") {
            this.days_since_infection += delta * simulation.days_per_sec / 1000.0;
            if (this.days_since_infection > simulation.infection_duration) {
                if (Math.random() < simulation.mortality) {
                    this.old_state = this.state;
                    this.state = "deceased";
                    this.velocity = 0.0;
                }
                else {
                    this.old_state = this.state;
                    this.state == "recovered";
                }
            }
        }
    }
}

// TODO: Potential class that represents the underlying potential and potential wells