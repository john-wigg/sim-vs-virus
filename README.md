# #SimThinkAct

The novel coronavirus SARS-CoV-2 is spreading through the world, scientists advise to #stayathome, and governments increasingly impose restrictions on freedom of movement. But why should I care?

This project is a small, interactive web app. You can choose different role models for your live. Do I wash my hands? Do I go outside? How often do I go outside? Do I practise social distancing? Then let the simulation play out!

The project resulted from the hackathon #WirVsVirusHack, organized by the German Federal Government. The corresponding devpost page can be found here: https://devpost.com/software/sim-vs-virus

## Getting Started

A running example can be seen here: https://john-wigg.github.io/sim-vs-virus/index.html

### Installing

Clone repository on your local machine:

```
git clone https://github.com/john-wigg/sim-vs-virus
```

And open ```index.html``` in your browser!

## Features

- **Currently the web app is still optimized for mobile devices. Mobile emulators can be accessed via ```Ctrl+Shift+M``` (Firefox) or ```Ctrl+Shift+I```, ```Ctrl+Shift+M``` (Google Chrome)**
- A particle-based simulation of virus spread  based on user input from a questionnaire with 11 items. 
    - Main mechanics simulated are:
        - **likelihood of infection** upon contact. Factors that increase it are existing disease symptoms, recent visits to high-risk areas, contact with infected persons, lack of correct and consistent hand washing, and touching your face.
        - **Social distancing** by the speed of the particles (the more thorough the distancing, the slower the particles). The speed decreases when it is stated that one keeps distance to other people and does not use public transport during the pandemic.
        - The **degree of quarantine / self-isolation** by houses in which the particles start and a probability of the particles leaving the house when colliding with the edge. This becomes more likely if carelessness is indicated (corona = flu) and self-isolation is denied.
    - The phases of the illness are color-coded with blue (healthy, not ill), red (ill), green (recovered), and black and motionless (dead).
        - Some of the particles belong to the **risk group**, which has a higher risk of dying from the disease. The rest of the particles belong to the non-risk group. Both groups can be displayed individually using filters
        - If the total number of patients exceeds the **ICU capacity** (here: if 15% are ill), mortality increases
        - An **area chart** shows the development of the disease in the total population, as well as the ICU bed threshold.
    - The simulation can be paused and restarted. The individual parameters can be changed live and the effects observed.
- Optional: texts on health education in question-answer style in currently 3 languages (German, English, Italian)
     - e.g. What is the "coronavirus"? Is COVID-19 like the seasonal flu? Why are the measures so strict?
- Optional: Explanatory texts for the simulation in 3 languages (German, English, Italian).
- Optional (not yet implemented): Several "sidestories" to show the users that behind the abstract numbers about the disease real people are hiding. The texts for this - and others - can be found in the attached PDF.

## Built With

* [PixiJS](https://www.pixijs.com/) - Used for building the simulations

## Contributors

* **Alex Seltmann** - *Coordination* - [aseltmann](https://github.com/aseltmann)
* **Francesco Reina** - *Research* - [FReina](https://github.com/FReina)
* **Gorb Rade** - *Programming* - [Gorb98](https://github.com/Grob98)
* **Johanna W** - *Research*
* **John Wigg** - *Programming* - [john-wigg](https://github.com/john-wigg)
* **nk1006** - *Programming*
* **Sascha Greiliger** - *Research / Graphics*
* **Vanessa Juergensen** - *Research*

See also the list of [contributors](https://github.com/john-wigg/sim-vs-virus/contributors) who participated in this project.

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details
