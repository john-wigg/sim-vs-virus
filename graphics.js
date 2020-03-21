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
                graphics.drawCircle(person.position.x * 100 - 3, person.position.y * 100 - 3, 6, 6);
                graphics.endFill();
                container.addChild(graphics);

                this.containers.push(container)
                this.app.stage.addChild(container);
                
            }
            
            /*this.app.ticker.add((delta) => {
                var persons = simulation.update(app.ticker.deltaMS);                
    
                persons.forEach(function(person) {
    
                    
                    graphics.lineStyle(0);
                    graphics.beginFill(0xFF3F7D, 1);
                    graphics.drawCircle(person.position.x - 3, person.position.y - 3, 6, 6);
                    graphics.endFill();
    
                    
                });           
            });*/
            this.app.ticker.add(() => {this.onTickerUpdate()});
        }

        onTickerUpdate() {
            var persons = this.simulation.update(this.app.ticker.deltaMS);
            
            for (var i = 0; i < persons.length; i++) {
                console.log(this.containers[i]);
                this.containers[i].x = persons[i].position.x;
                this.containers[i].y = persons[i].position.y;
            }
        }
    }



    function onLoad() {
        console.log("onLoad()");
        customElements.define("sim-view", SimulationView);
        
        document.body.appendChild(new SimulationView(200))
    }

    window.addEventListener("load", onLoad);
})();
