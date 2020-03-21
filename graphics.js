"use strict";
(function () {

    const COLOR_HEALTHY = 0x3E8EFF;
    const COLOR_INFECTED = 0xE71E3A;
    const COLOR_RECOVERED = 0x00F214;
    const COLOR_DEAD = 0x555555;
    const COLOR_BOX = 0xaaaaaa;

    class SimulationView extends HTMLElement {
        constructor(persons) {
            super();
            this.app = new PIXI.Application({
                width: 800, height: 600, backgroundColor: 0xdddddd, antialias: true
            });
            this.appendChild(this.app.view);

            this.simulation = new Simulation(8, 6, persons);

            this.simulation.boxes.push(new IsolationBox(1, 4, 1, 4));
            this.simulation.initialize()

            for (var i = 0; i < this.simulation.boxes.length; i++) {
                var box = this.simulation.boxes[i];

                const graphics = new PIXI.Graphics();

                graphics.lineStyle(0);
                graphics.beginFill(COLOR_BOX, 1);
                graphics.drawRect(box.min_x * 100, box.min_y * 100, (box.max_x - box.min_x) * 100, (box.max_y - box.min_y) * 100);
                graphics.endFill();
                this.app.stage.addChild(graphics);
            }

            this.containers = new Array();
            for (var i = 0; i < persons; i++) {
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
                graphics.drawCircle(0, 0, 6, 6);
                graphics.endFill();
                container.addChild(graphics);

                this.containers.push(container)
                this.app.stage.addChild(container);
            }


            this.app.ticker.add(() => { this.onTickerUpdate() });
        }

        onTickerUpdate() {
            var persons = this.simulation.update(this.app.ticker.deltaMS);

            for (var i = 0; i < persons.length; i++) {
                this.containers[i].x = persons[i].position.x * 100;
                this.containers[i].y = persons[i].position.y * 100;

                //console.log("State: " + persons[i].state + " " + i);
                if (persons[i].state != persons[i].old_state) {
                    switch (persons[i].state) {
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

                }
            }
        }

        updateCircle(container, color) {
            console.log("updateCircle()");
            for (var i = 0; i < container.children.length; i++) {
                container.children[i].clear();
                container.children[i].lineStyle(0);
                container.children[i].beginFill(color, 1);
                container.children[i].drawCircle(0, 0, 6, 6);
                container.children[i].endFill();
            }
        }
    }

    class Curve extends HTMLElement {
        constructor() {
            super();

            this.app = new PIXI.Application({
                width: 800, height: 200, backgroundColor: 0xdddddd, antialias: true
            });
            this.appendChild(this.app.view);

            this.height = 200;
            this.people = 200;

            this.data = new Array();
            this.data.push(new DataPoint(199, 1, 0, 0));
            this.data.push(new DataPoint(195, 5, 0, 0));
            this.data.push(new DataPoint(170, 30, 0, 0));
            this.data.push(new DataPoint(134, 60, 5, 1));
            this.data.push(new DataPoint(58, 130, 10, 2));
            this.data.push(new DataPoint(18, 170, 10, 2));
            this.data.push(new DataPoint(3, 180, 15, 2));
            this.data.push(new DataPoint(2, 160, 33, 5));
            this.data.push(new DataPoint(1, 150, 33, 16));
            this.data.push(new DataPoint(0, 130, 45, 25));
            this.data.push(new DataPoint(0, 100, 60, 40));
            this.data.push(new DataPoint(0, 80, 77, 43));
            this.data.push(new DataPoint(0, 50, 100, 50));
            this.data.push(new DataPoint(0, 30, 110, 60));
            this.data.push(new DataPoint(0, 10, 126, 64));
            this.data.push(new DataPoint(0, 0, 136, 64));
            this.drawCurve();

        }

        drawCurve() {
            var width = 800 / this.data.length;
            for (var i = 0; i < this.data.length; i++) {
                this.drawPoint(this.data[i], width * i, width * (i + 1));
            }
        }

        drawPoint(dataPoint, x, x1) {
            var y1 = dataPoint.deceased / this.people * this.height;
            var y2 = dataPoint.recovered / this.people * this.height + y1;
            var y3 = dataPoint.healthy / this.people * this.height + y2;
            this.drawBar(x, x1, 0, y1, COLOR_DEAD);
            this.drawBar(x, x1, y1, y2, COLOR_RECOVERED);
            this.drawBar(x, x1, y2, y3, COLOR_HEALTHY);
            this.drawBar(x, x1, y3, this.height, COLOR_INFECTED);
        }

        drawBar(x1, x2, y1, y2, color) {
            const graphics = new PIXI.Graphics();

            graphics.lineStyle(0);
            graphics.beginFill(color, 1);
            graphics.drawRect(x1, y1, x2, y2);
            graphics.endFill();
            this.app.stage.addChild(graphics);
        }
    }

    class DataPoint {
        constructor(h, i, r, d) {
            this.healthy = h;
            this.infected = i;
            this.recovered = r;
            this.deceased = d;
        }
    }



    function onLoad() {
        console.log("onLoad()");
        customElements.define("sim-view", SimulationView);
        customElements.define("curve-view", Curve);

        var divMain = document.createElement("div");
        var divCurves = document.createElement("div");

        divMain.appendChild(new SimulationView(200));
        divCurves.appendChild(new Curve());

        document.body.appendChild(divMain);
        document.body.appendChild(divCurves);
    }

    window.addEventListener("load", onLoad);
})();
