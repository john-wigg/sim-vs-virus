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
        this.days_per_sec = 1.0; // Days per second in the simulation

        this.people = new Array(new Person());// Array mit personen

        this.width = width;
        this.height = height;

        // randomly initialize Person positions
        for (var i = 0; i < this.people.length; i++) {
            this.people[i].position.x = Math.random() * width;
            this.people[i].position.y = Math.random() * height;
            this.people[i].velocity = 0.01
        }
    }

    update(delta) {
        // delta in milliseconds
        // TODO
        // Should return array of structs
        return this.people;
    }
}

class Vector2 {
    constructor(x, y) {
        this.x = (x === undefined) ? 0 : x;
        this.y = (y === undefined) ? 0 : y;
    }

    // Multiply vector with a scalar
    multiply(a) {
        this.x *= a;
        this.y *= a;
    }

    // Add vector to another vector
    add(b_vec) {
        this.x += b_vec.x;
        this.y += b_vec.y;
    }

    // Dot product with another vector
    dot(b_vec) {
        return this.x * b_vec.x + this.y * b_vec.y;
    }

    // Return length of vector
    length() {
        return this.x * this.x + this.y * this.y;
    }

    // Distance to another vector if they represent points in space
    dist(b_vec) {
        x_dist = b_vec.x - this.x;
        y_dist = b_vec.y - this.y;
        return x_dist * x_dist + y_dist * y_dist;
    }
}

class Person {
    constructor() {
        this.velocity = 1.0;
        this.directon = new Vector2(1.0, 0.0);
        this.position = new Vector2(0.0, 0.0);
    }

    step(delta) {
        this.position = this.position.add(this.directon.multiply(delta * this.velocity))
    }
}

// TODO: Person class that represents a single individuum that can be infected
// TODO: Potential class that represents the underlying potential and potential wells