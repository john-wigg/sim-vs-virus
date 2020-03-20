class Simulation {
    constructor() {
        /* Simulation parameters */
        this.infectivity_distance = 1.0 // Distance at which infection probability reaches 0.5
        this.minimum_distance = 1.0 // Distance which people keep from each other at minimum

        this.mortality = 0.02 // Mortality rate of the virus
        this.incubation_period = 14 // Incubation period (days)
        this.infection_duration = 10 // Duration of the infection until deatch or recovery (days)

        this.infectiveness = 0.9 // Probability of getting infected when someone already carries the virus (e.g. on his hands, should be affected by personal hygiene)

        this.population = 500 // Number of people to simulate
        this.days_per_sec = 1.0 // Days per second in the simulation
    }
}