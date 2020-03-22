"use strict";
(function () {

    const COLOR_HEALTHY = 0x3E8EFF;
    const COLOR_INFECTED = 0xE71E3A;
    const COLOR_RECOVERED = 0x00F214;
    const COLOR_DEAD = 0x555555;
    const COLOR_BOX = 0xaaaaaa;
    const COLOR_HIDDEN = 0x000000;

    class SimulationView extends HTMLElement {
        constructor(simulation, width = 800) {
            super();

            this.simulation = simulation;
            this.scale = width / this.simulation.width;

            this.width = width;
            this.height = simulation.height * this.scale;
            this.circle_radius = this.simulation.minimum_distance * this.scale / 2.0;

            this.app = new PIXI.Application({
                width: this.width, height: this.height, backgroundColor: 0xdddddd, antialias: true
            });
            this.appendChild(this.app.view);

            this.simulation.initialize();

            this.filter = ["Normal", "Risk"];
            this.old_filter = ["Normal", "Risk"];

            for (var i = 0; i < this.simulation.boxes.length; i++) {
                var box = this.simulation.boxes[i];

                const graphics = new PIXI.Graphics();

                graphics.lineStyle(0);
                graphics.beginFill(COLOR_BOX, 1);
                graphics.drawRect(box.min_x * this.scale, box.min_y * this.scale, (box.max_x - box.min_x) * this.scale, (box.max_y - box.min_y) * this.scale);
                graphics.endFill();
                this.app.stage.addChild(graphics);
            }

            this.containers = new Array();
            for (var i = 0; i < this.simulation.people.length; i++) {
                const container = new PIXI.Container();
                const graphics = new PIXI.Graphics();

                graphics.lineStyle(0);
                switch (this.simulation.people[i].state) {
                    case "infected":
                        graphics.beginFill(COLOR_INFECTED, 1);
                        break;
                    case "recovered":
                        graphics.beginFill(COLOR_RECOVERED, 1);
                        break;
                    case "deceased":
                        graphics.beginFill(COLOR_DEAD, 1);
                        break;
                    default:
                        graphics.beginFill(COLOR_HEALTHY, 1);
                        break;
                }
                graphics.drawCircle(0, 0, this.circle_radius);
                graphics.endFill();
                container.addChild(graphics);

                this.containers.push(container)
                this.app.stage.addChild(container);
            }


            this.app.ticker.add(() => { this.onTickerUpdate() });
        }

        redrawAllCircles() {
            var people = this.simulation.people;
            for (var i = 0; i < people.length; i++) {
                this.containers[i].x = people[i].position.x * this.scale;
                this.containers[i].y = people[i].position.y * this.scale;

                if (this.filter.includes(people[i].group.name)) {
                    switch (people[i].state) {
                        case "infected":
                            this.updateCircle(this.containers[i], COLOR_INFECTED);
                            break;
                        case "recovered":
                            this.updateCircle(this.containers[i], COLOR_RECOVERED);
                            break;
                        case "deceased":
                            this.updateCircle(this.containers[i], COLOR_DEAD);
                            break;
                        default:
                            this.updateCircle(this.containers[i], COLOR_HEALTHY);
                            break;
                    }
                } else {
                    this.updateCircle(this.containers[i], COLOR_HIDDEN, 0.15);
                }

            }
        }

        onTickerUpdate() {
            var people = this.simulation.update(this.app.ticker.deltaMS);

            for (var i = 0; i < people.length; i++) {
                this.containers[i].x = people[i].position.x * this.scale;
                this.containers[i].y = people[i].position.y * this.scale;

                if (people[i].state != people[i].old_state || this.old_filter != this.filter) {
                    if (this.filter.includes(people[i].group.name)) {
                        switch (people[i].state) {
                            case "infected":
                                this.updateCircle(this.containers[i], COLOR_INFECTED);
                                break;
                            case "recovered":
                                this.updateCircle(this.containers[i], COLOR_RECOVERED);
                                break;
                            case "deceased":
                                this.updateCircle(this.containers[i], COLOR_DEAD);
                                break;
                            default:
                                this.updateCircle(this.containers[i], COLOR_HEALTHY);
                                break;
                        }
                    } else {
                        this.updateCircle(this.containers[i], COLOR_HIDDEN, 0.15);
                    }
                }
            }
            this.old_filter = this.filter;
        }

        updateCircle(container, color, alpha = 1.0) {
            //console.log("updateCircle()");
            for (var i = 0; i < container.children.length; i++) {
                container.children[i].clear();
                container.children[i].lineStyle(0);
                container.children[i].beginFill(color, alpha);
                container.children[i].drawCircle(0, 0, this.circle_radius);
                container.children[i].endFill();
            }
        }
    }

    class Curve extends HTMLElement {
        constructor(simulation, width = 800) {
            super(simulation);

            this.simulation = simulation;

            this.width = width;
            this.height = 0.15 * this.width;

            this.app = new PIXI.Application({
                width: this.width, height: this.height, backgroundColor: 0xdddddd, antialias: true
            });
            this.appendChild(this.app.view);

            this.people = this.simulation.people.length;

            this.data = new Array();
            this.maxData = 9999999;
            this.filter = ["Normal", "Risk"];

            this.app.ticker.maxFPS = 1;
            this.app.ticker.minFPS = 1;
            this.app.ticker.add((delta) => {
                this.onTickerUpdate();
            });

            //this.drawCurve();
            this.lastData = Date.now();
        }

        set filter(filter) {
            this.filterValue = filter;
            this.people = this.simulation.get_people_number(filter);
        }

        onTickerUpdate() {
            //var people = this.simulation.people;
            var now = Date.now();
            if (now - this.lastData > 100) {
                this.lastData = now;
                if (!this.simulation.stopped) {
                    this.data.push(new DataPoint(this.simulation.get_count("healthy"),
                        this.simulation.get_count("infected"),
                        this.simulation.get_count("recovered"),
                        this.simulation.get_count("deceased")));
                }
                if (this.data.length > this.maxData) {
                    this.data.shift();
                }
                //this.data.push(new DataPoint(, 0, 0, 0));
                this.drawCurve(this.filterValue);

            }
        }

        drawCurve(filter) {
            this.app.stage.removeChildren();

            const cH = new PIXI.Graphics();
            const cI = new PIXI.Graphics();
            const cR = new PIXI.Graphics();
            const cD = new PIXI.Graphics();

            var width = this.width / this.data.length;

            var y11 = this.data[0].get_count_deceased(filter) / this.people * this.height;
            var y21 = this.data[0].get_count_recovered(filter) / this.people * this.height + y11;
            var y31 = this.data[0].get_count_healthy(filter) / this.people * this.height + y21;

            cH.lineStyle(2, COLOR_HEALTHY, 1);
            cH.beginFill(COLOR_HEALTHY);
            cH.moveTo(0, y21);

            cI.lineStyle(2, COLOR_INFECTED, 1);
            cI.beginFill(COLOR_INFECTED);
            cI.moveTo(0, y31);

            cR.lineStyle(2, COLOR_RECOVERED, 1);
            cR.beginFill(COLOR_RECOVERED);
            cR.moveTo(0, y11);

            cD.lineStyle(2, COLOR_DEAD, 1);
            cD.beginFill(COLOR_DEAD);
            cD.moveTo(0, 0);


            for (var i = 0; i < this.data.length; i++) {
                var y1 = this.data[i].get_count_deceased(filter) / this.people * this.height;
                var y2 = this.data[i].get_count_recovered(filter) / this.people * this.height + y1;
                var y3 = this.data[i].get_count_healthy(filter) / this.people * this.height + y2;

                cI.lineTo(width * (i), y3);
                cR.lineTo(width * (i + 1), y1);
                cH.lineTo(width * (i + 1), y2);
            }

            var y12 = this.data[this.data.length - 1].get_count_deceased(filter) / this.people * this.height;
            var y22 = this.data[this.data.length - 1].get_count_recovered(filter) / this.people * this.height + y12;
            var y32 = this.data[this.data.length - 1].get_count_healthy(filter) / this.people * this.height + y22;

            cD.lineTo(this.width, 0);
            cD.lineTo(this.width, y12);
            cI.lineTo(this.width, y32);
            cI.lineTo(this.width, this.height);
            cR.lineTo(this.width, y22);
            cH.lineTo(this.width, y32);

            for (var i = this.data.length - 1; i >= 0; i--) {
                var y1 = this.data[i].get_count_deceased(filter) / this.people * this.height;
                var y2 = this.data[i].get_count_recovered(filter) / this.people * this.height + y1;
                var y3 = this.data[i].get_count_healthy(filter) / this.people * this.height + y2;

                cD.lineTo(width * i, y1);
                cR.lineTo(width * i, y2);
                cH.lineTo(width * i, y3);
            }

            cD.lineTo(0, 0);
            cI.lineTo(0, this.height);
            cI.lineTo(0, y31);
            cR.lineTo(0, y11);
            cH.lineTo(0, y21);


            cH.endFill();
            cI.endFill();
            cR.endFill();
            cD.endFill();

            // Draw horizontal line
            const hLine = new PIXI.Graphics();
            hLine.lineStyle(2, "#000000", 1);
            hLine.moveTo(0, (1.0 - this.simulation.hospital_capacity) * this.height);
            hLine.lineTo(this.width, (1.0 - this.simulation.hospital_capacity) * this.height);

            this.app.stage.addChild(cI);
            this.app.stage.addChild(cR);
            this.app.stage.addChild(cH);
            this.app.stage.addChild(cD);
            this.app.stage.addChild(hLine);
        }

    }

    class DataPoint {
        constructor(h, i, r, d) {
            this.healthy = h;
            this.infected = i;
            this.recovered = r;
            this.deceased = d;
        }

        get_count_healthy(filter = ["Normal", "Risk"]) {
            var count = 0;
            for (var i = 0; i < filter.length; i++) {
                count += this.healthy[filter[i]]
            }
            return count;
        }

        get_count_infected(filter = ["Normal", "Risk"]) {
            var count = 0;
            for (var i = 0; i < filter.length; i++) {
                count += this.infected[filter[i]]
            }
            return count;
        }

        get_count_recovered(filter = ["Normal", "Risk"]) {
            var count = 0;
            for (var i = 0; i < filter.length; i++) {
                count += this.recovered[filter[i]]
            }
            return count;
        }

        get_count_deceased(filter = ["Normal", "Risk"]) {
            var count = 0;
            for (var i = 0; i < filter.length; i++) {
                count += this.deceased[filter[i]]
            }
            return count;
        }
    }



    function onLoad() {
        console.log("onLoad()");
        customElements.define("sim-view", SimulationView);
        customElements.define("curve-view", Curve);

        var divMain = document.createElement("div");
        var divCurves = document.createElement("div");

        var sim_height = 6;
        var sim_width = 8;

        this.simulation = new Simulation(sim_width, sim_height, 200);

        var area_entry = { "Normal": 0.05, "Risk": 0.0 };
        var area_escape = { "Normal": 0.05, "Risk": 0.0 };

        for (var i = 0; i < 5; i++) {
            this.simulation.boxes.push(new IsolationBox(0.05 * sim_width, 0.2 * sim_width, (i + 0.1) * sim_height / 5.0, (i + 0.9) * sim_height / 5.0, area_escape, area_entry));
            this.simulation.boxes.push(new IsolationBox(0.8 * sim_width, 0.95 * sim_width, (i + 0.1) * sim_height / 5.0, (i + 0.9) * sim_height / 5.0, area_escape, area_entry));
        }

        this.simulation.group_risk.velocity_multiplicator = 0.2;
        this.simulation.max_days = 80.0;

        var simulation_view = new SimulationView(this.simulation, 600);

        divMain.appendChild(simulation_view);


        var curve = new Curve(this.simulation, 600);
        divCurves.appendChild(curve);

        document.body.appendChild(divMain);
        document.body.appendChild(divCurves);

        document.getElementById("normal").addEventListener("click", function (e) {
            simulation_view.filter = ["Normal"];
            curve.filter = ["Normal"];
        });
        document.getElementById("risk").addEventListener("click", function (e) {
            simulation_view.filter = ["Risk"];
            curve.filter = ["Risk"];
        });
        document.getElementById("reset").addEventListener("click", function (e) {
            simulation_view.filter = ["Normal", "Risk"];
            curve.filter = ["Normal", "Risk"];
        });
        document.getElementById("stop").addEventListener("click", function (e) {
            simulation_view.simulation.stop();
        });
        document.getElementById("resume").addEventListener("click", function (e) {
            simulation_view.simulation.resume();
        });
        document.getElementById("reset_sim").addEventListener("click", function (e) {
            console.log("reset");
            simulation_view.simulation.initialize();
            simulation_view.redrawAllCircles();
            curve.data = new Array();
        });
    }

    window.addEventListener("load", onLoad);
})();