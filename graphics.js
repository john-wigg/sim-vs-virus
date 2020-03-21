"use strict";
(function() { 

    const COLOR_HEALTHY = 0x3E8EFF;
    const COLOR_INFECTED = 0xE71E3A;
    const COLOR_RECOVERED = 0x00F214;

    var curve;
    
    class SimulationView extends HTMLElement {
        constructor(persons) {
            super();
            this.app = new PIXI.Application({
                width: 800, height: 600, backgroundColor: 0xdddddd, antialias: true
            });       
            this.appendChild(this.app.view);
            
            this.simulation = new Simulation(8, 6, persons);
            
            this.containers = new Array();
            for (var i = 0; i < persons; i++) {
                const container = new PIXI.Container();
                const graphics = new PIXI.Graphics();

                graphics.lineStyle(0);
                graphics.beginFill(COLOR_HEALTHY, 1);
                graphics.drawCircle(0, 0, 6, 6);
                graphics.endFill();
                container.addChild(graphics);

                this.containers.push(container)
                this.app.stage.addChild(container);                
            }

            this.app.ticker.add(() => {this.onTickerUpdate()});
        }

        onTickerUpdate() {
            var persons = this.simulation.update(this.app.ticker.deltaMS);
            
            for (var i = 0; i < persons.length; i++) {
                this.containers[i].x = persons[i].position.x * 100;
                this.containers[i].y = persons[i].position.y * 100;

                //console.log("State: " + persons[i].state + " " + i);
                if (persons[i].state != persons[i].old_state) {
                    switch(persons[i].state) {
                        case "infected":
                            this.updateCircle(this.containers[i], COLOR_INFECTED);
                            break;
                        case "recovered":
                            this.updateCircle(this.containers[i], COLOR_RECOVERED);
                            break;
                        default:
                            this.updateCircle(this.containers[i], COLOR_HEALTHY);
                            break;
                    }

                }
            }

            if (curve != null) {
                curve.addDataPoint(0, this.simulation.get_count("infected"));
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
        constructor(persons) {
            super();

            this.persons = persons;
            this.width = 800;
            this.height = 200;

            this.app = new PIXI.Application({
                width: this.width, height: this.height, backgroundColor: 0xdddddd, antialias: true
            });       
            this.appendChild(this.app.view);

            this.data = new Array();

            this.graphics = new PIXI.Graphics();
            this.graphics.lineStyle(10, 0xff0000);
            this.app.stage.addChild(this.graphics);
        }

        addDataPoint(time, infected) {
            //this.graphics.clear();
            this.data.push(infected);
     
            this.graphics.moveTo(0, 0);
            //this.graphics.lineTo(200, 150);

            for (var i = 0; i < this.data.length; i++) {
                var x = 100 / this.data.length * i;
                var y = 100 / this.persons * 100;

                this.graphics.lineTo(x, y);
                //console.log("X: " + x + "  Y: " + y);
            }    

           
        }
    }



    function onLoad() {
        console.log("onLoad()");
        customElements.define("sim-view", SimulationView);
        customElements.define("curve-view", Curve);
        
        var divMain = document.createElement("div");
        var divCurves = document.createElement("div");

        divMain.appendChild(new SimulationView(200));
        //divCurves.appendChild(curve = new Curve(200));
        
        document.body.appendChild(divMain);
        document.body.appendChild(divCurves);
    }

    window.addEventListener("load", onLoad);
})();
