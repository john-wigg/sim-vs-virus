"use strict";
(function() { 
    function onLoad() {
        console.log("onLoad()");

        const app = new PIXI.Application({
            width: 800, height: 600, backgroundColor: 0xdddddd, antialias: true
        });       
        document.body.appendChild(app.view);
        
        var simulation = new Simulation(800, 600, 200);
        /*const container = new PIXI.Container();     
        app.stage.addChild(container);*/
            
        // Move container to the center
        /*container.x = app.screen.width / 2;
        container.y = app.screen.height / 2;
        
        // Center bunny sprite in local container coordinates
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;*/
        
        // Listen for animate update
        console.log(app.ticker);
        app.ticker.add((delta) => {
            var persons = simulation.update(app.ticker.deltaMS);
            app.stage.removeChildren();

            persons.forEach(function(person) {

                const graphics = new PIXI.Graphics();
                graphics.lineStyle(0);
                graphics.beginFill(0xFF3F7D, 1);
                graphics.drawCircle(person.position.x - 3, person.position.y - 3, 6, 6);
                graphics.endFill();

                app.stage.addChild(graphics);
            });           
        });
    }

    window.addEventListener("load", onLoad);
})();
