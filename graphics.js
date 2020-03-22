"use strict";


const COLOR_HEALTHY = 0x3E8EFF;
const COLOR_INFECTED = 0xE71E3A;
const COLOR_RECOVERED = 0x00F214;
const COLOR_DEAD = 0x555555;
const COLOR_BOX = 0xaaaaaa;
const COLOR_HIDDEN = 0x000000;

const styleHealthy = new PIXI.TextStyle({
    fill: COLOR_HEALTHY,
    fontFamiliy: 'Roboto',
    fontSize: 16,
    fontWeight: "bold"
});
const styleInfected = new PIXI.TextStyle({
    fill: COLOR_INFECTED,
    fontFamiliy: 'Roboto',
    fontSize: 16,
    fontWeight: "bold"
});
const styleRecovered = new PIXI.TextStyle({
    fill: COLOR_RECOVERED,
    fontFamiliy: 'Roboto',
    fontSize: 16,
    fontWeight: "bold"
});
const styleDeceased = new PIXI.TextStyle({
    fill: COLOR_DEAD,
    fontFamiliy: 'Roboto',
    fontSize: 16,
    fontWeight: "bold"
});
const styleBlack = new PIXI.TextStyle({
    fill: 0x000000,
    fontFamiliy: 'Roboto',
    fontSize: 16,
    fontWeight: "bold"
});

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

        this.legend = new PIXI.Container();
        var graphics = new PIXI.Graphics();
        var legend_x = 0.5 * this.width - 100;
        var legend_y = 0.98 * this.height - 100;
        graphics.lineStyle(0);
        graphics.beginFill(0xffffff, 0.85);
        graphics.drawRect(legend_x, legend_y, 200, 100);
        graphics.beginFill(COLOR_HEALTHY, 1.0);
        graphics.drawCircle(legend_x + 20, legend_y + 15, 6);
        graphics.beginFill(COLOR_INFECTED, 1.0);
        graphics.drawCircle(legend_x + 20, legend_y + 40, 6);
        graphics.beginFill(COLOR_RECOVERED, 1.0);
        graphics.drawCircle(legend_x + 20, legend_y + 65, 6);
        graphics.beginFill(COLOR_DEAD, 0.5);
        graphics.drawCircle(legend_x + 20, legend_y + 90, 6);

        var stringHealthy = "Healthy";
        var stringInfected = "Infected";
        var stringRecovered = "Recovered";
        var stringDeceased = "Deceased";

        this.labelHealthy = new PIXI.Text(stringHealthy, styleHealthy);
        this.labelHealthy.x = legend_x + 35;
        this.labelHealthy.y = legend_y + 6;
        this.labelInfected = new PIXI.Text(stringInfected, styleInfected);
        this.labelInfected.x = legend_x + 35;
        this.labelInfected.y = legend_y + 31;
        this.labelRecovered = new PIXI.Text(stringRecovered, styleRecovered);
        this.labelRecovered.x = legend_x + 35;
        this.labelRecovered.y = legend_y + 56;
        this.labelDeceased = new PIXI.Text(stringDeceased, styleDeceased);
        this.labelDeceased.x = legend_x + 35;
        this.labelDeceased.y = legend_y + 81;
        this.legend.addChild(graphics);
        this.legend.addChild(this.labelHealthy);
        this.legend.addChild(this.labelInfected);
        this.legend.addChild(this.labelRecovered);
        this.legend.addChild(this.labelDeceased);
        this.app.stage.addChild(this.legend);

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

    updateLegend() {
        let count_healthy = 0;
        let count_infected = 0;
        let count_recovered = 0;
        let count_deceased = 0;
        let count_healthy_total = this.simulation.get_count("healthy");
        let count_infected_total = this.simulation.get_count("infected");
        let count_recovered_total = this.simulation.get_count("recovered");
        let count_deceased_total = this.simulation.get_count("deceased");
        for (var i = 0; i < this.filter.length; i++) {
            count_healthy += count_healthy_total[this.filter[i]];
            count_infected += count_infected_total[this.filter[i]];
            count_recovered += count_recovered_total[this.filter[i]];
            count_deceased += count_deceased_total[this.filter[i]];
        }
        this.labelHealthy.text = "Healthy: " + count_healthy;
        this.labelInfected.text = "Infected: " + count_infected;
        this.labelRecovered.text = "Recovered: " + count_recovered;
        this.labelDeceased.text = "Deceased: " + count_deceased;
        this.old_filter = Array.from(this.filter);
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
                this.updateLegend();
            }
        }
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
        this.height = 0.15 * this.width + 30;

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

        this.graph = new PIXI.Container();


        this.legend = new PIXI.Container();
        var graphics = new PIXI.Graphics();
        var legend_x = 0.0;
        var legend_y = 0.0;
        graphics.lineStyle(0);
        graphics.beginFill(0xffffff, 0.85);
        graphics.drawRect(legend_x, legend_y, this.width, 30);
        graphics.beginFill(COLOR_HEALTHY, 1.0);
        graphics.drawCircle(legend_x + 20, legend_y + 15, 6);
        graphics.beginFill(COLOR_INFECTED, 1.0);
        graphics.drawCircle(legend_x + 170, legend_y + 15, 6);
        graphics.beginFill(COLOR_RECOVERED, 1.0);
        graphics.drawCircle(legend_x + 320, legend_y + 15, 6);
        graphics.beginFill(COLOR_DEAD, 0.5);
        graphics.drawCircle(legend_x + 470, legend_y + 15, 6);
        graphics.lineStyle(3);
        graphics.beginFill(0x000000, 1.0);
        graphics.moveTo(legend_x + 602, legend_y + 15);
        graphics.lineTo(legend_x + 618, legend_y + 15);

        var stringHealthy = "Healthy";
        var stringInfected = "Infected";
        var stringRecovered = "Recovered";
        var stringDeceased = "Deceased";

        this.labelHealthy = new PIXI.Text(stringHealthy, styleHealthy);
        this.labelHealthy.x = legend_x + 35;
        this.labelHealthy.y = legend_y + 6;
        this.labelInfected = new PIXI.Text(stringInfected, styleInfected);
        this.labelInfected.x = legend_x + 185;
        this.labelInfected.y = legend_y + 6;
        this.labelRecovered = new PIXI.Text(stringRecovered, styleRecovered);
        this.labelRecovered.x = legend_x + 335;
        this.labelRecovered.y = legend_y + 6;
        this.labelDeceased = new PIXI.Text(stringDeceased, styleDeceased);
        this.labelDeceased.x = legend_x + 485;
        this.labelDeceased.y = legend_y + 6;
        this.labelCapacity = new PIXI.Text("Hospital Capacity", styleBlack)
        this.labelCapacity.x = legend_x + 635;
        this.labelCapacity.y = legend_y + 6;
        this.legend.addChild(graphics);
        this.legend.addChild(this.labelHealthy);
        this.legend.addChild(this.labelInfected);
        this.legend.addChild(this.labelRecovered);
        this.legend.addChild(this.labelDeceased);
        this.legend.addChild(this.labelCapacity);
        this.app.stage.addChild(this.legend);
        this.app.stage.addChild(this.graph)
    }

    set filter(filter) {

        this.filterValue = filter;
        this.people = this.simulation.get_people_number(filter);
    }

    get filter() {
        return this.filterValue;
    }

    updateLegend() {
        let count_healthy = 0;
        let count_infected = 0;
        let count_recovered = 0;
        let count_deceased = 0;
        let count_healthy_total = this.simulation.get_count("healthy");
        let count_infected_total = this.simulation.get_count("infected");
        let count_recovered_total = this.simulation.get_count("recovered");
        let count_deceased_total = this.simulation.get_count("deceased");
        for (var i = 0; i < this.filter.length; i++) {
            count_healthy += count_healthy_total[this.filter[i]];
            count_infected += count_infected_total[this.filter[i]];
            count_recovered += count_recovered_total[this.filter[i]];
            count_deceased += count_deceased_total[this.filter[i]];
        }
        this.labelHealthy.text = "Healthy: " + count_healthy;
        this.labelInfected.text = "Infected: " + count_infected;
        this.labelRecovered.text = "Recovered: " + count_recovered;
        this.labelDeceased.text = "Deceased: " + count_deceased;
        this.old_filter = Array.from(this.filter);
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
            this.updateLegend();
        }
    }

    drawCurve(filter) {
        this.graph.removeChildren();

        var cH = new PIXI.Graphics();
        var cI = new PIXI.Graphics();
        var cR = new PIXI.Graphics();
        var cD = new PIXI.Graphics();

        cH.y = 30;
        cI.y = 30;
        cR.y = 30;
        cD.y = 30;

        var width = this.width / this.data.length;
        var height = this.height - 30;

        var y11 = this.data[0].get_count_deceased(filter) / this.people * height;
        var y21 = this.data[0].get_count_recovered(filter) / this.people * height + y11;
        var y31 = this.data[0].get_count_healthy(filter) / this.people * height + y21;

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
            var y1 = this.data[i].get_count_deceased(filter) / this.people * height;
            var y2 = this.data[i].get_count_recovered(filter) / this.people * height + y1;
            var y3 = this.data[i].get_count_healthy(filter) / this.people * height + y2;

            cI.lineTo(width * (i), y3);
            cR.lineTo(width * (i + 1), y1);
            cH.lineTo(width * (i + 1), y2);
        }

        var y12 = this.data[this.data.length - 1].get_count_deceased(filter) / this.people * height;
        var y22 = this.data[this.data.length - 1].get_count_recovered(filter) / this.people * height + y12;
        var y32 = this.data[this.data.length - 1].get_count_healthy(filter) / this.people * height + y22;

        cD.lineTo(this.width, 0);
        cD.lineTo(this.width, y12);
        cI.lineTo(this.width, y32);
        cI.lineTo(this.width, height);
        cR.lineTo(this.width, y22);
        cH.lineTo(this.width, y32);

        for (var i = this.data.length - 1; i >= 0; i--) {
            var y1 = this.data[i].get_count_deceased(filter) / this.people * height;
            var y2 = this.data[i].get_count_recovered(filter) / this.people * height + y1;
            var y3 = this.data[i].get_count_healthy(filter) / this.people * height + y2;

            cD.lineTo(width * i, y1);
            cR.lineTo(width * i, y2);
            cH.lineTo(width * i, y3);
        }

        cD.lineTo(0, 0);
        cI.lineTo(0, height);
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
        hLine.moveTo(0, (1.0 - this.simulation.hospital_capacity) * height);
        hLine.lineTo(this.width, (1.0 - this.simulation.hospital_capacity) * height);

        this.graph.addChild(cI);
        this.graph.addChild(cR);
        this.graph.addChild(cH);
        this.graph.addChild(cD);
        this.graph.addChild(hLine);
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