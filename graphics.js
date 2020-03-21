"use strict";
(function() { 
    
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
                graphics.beginFill(0xFF3F7D, 1);
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
