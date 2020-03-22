function showLayoutWelcome() {
    document.body.innerHTML = `
        <header>
        <img class="logo" src = "assets/logo_simvsvirus.svg" />
        <!--< h2 > SIM vs VIRUS</h2 > -->
        <img class="topOption" src="assets/share-24px.svg" />     
        </header >

        <h3 class="greeting">WELCOME TO THE OFFICIAL VIRUS SPREAD SIMULATOR</h3>
        <!--< img class="big-virus" src = "assets/virus.svg" /> -->

        <div class="arrow-container">
            <span>1/6</span>
            <img id="next_page" class="arrow-right" src="assets/arrow_right.svg">
        </div>

        <footer>
            <div class="seperator">
                <h4>OFFICIALLY SUPPORTED BY</h4>
            </div>
            <img src="assets/logo_rki.png" />
            <img src="assets/logo_bmg.png" />
            <div class="seperator footer">
                <h4>www.example.com</h4>
            </div>
        </footer>`;
    document.getElementById("next_page").addEventListener("click", showLayoutInfo);
}

function showLayoutInfo() {
    function setInfo1() {
        document.getElementById("next_page").addEventListener("click", setInfo2);
        document.getElementById("prev_page").addEventListener("click", showLayoutWelcome);
        document.getElementById("page_num").innerHTML = "2/6";
        document.getElementById("info").innerHTML = "Info 1";
    }

    function setInfo2() {
        document.getElementById("next_page").addEventListener("click", setInfo3);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "3/6";
        document.getElementById("info").innerHTML = "Info 2";
    }

    function setInfo3() {
        document.getElementById("next_page").addEventListener("click", showLayoutForm1);
        document.getElementById("prev_page").addEventListener("click", setInfo2);
        document.getElementById("page_num").innerHTML = "4/6";
        document.getElementById("info").innerHTML = "Info 3";
    }

    document.body.innerHTML = `
        <header>
        <img class="logo" src="assets/logo_simvsvirus.svg"/>
        <!--<h2>SIM vs VIRUS</h2>-->
        <img class="topOption" src="assets/share-24px.svg"/>     
        </header>

        <img class="small-virus" src="assets/virus.svg"/>

        <main id="info">
            <h4 style="text-align: center; text-transform: uppercase;">What is the corona-virus?</h4>     
            <p>Test</p>          
            <a class="more-info" href="">More information...</a>   
        </main>

        <footer class="footer-controls">
            <div class="arrow-container">
                <img id="prev_page" class="arrow-left" src="assets/arrow_left.svg">
                <span id="page_num" class="disable-margin">1/6</span>
                <img id="next_page" class="arrow-right" src="assets/arrow_right.svg">
            </div>
        </footer>
        `
    setInfo1();
}

function showLayoutForm1() {
    document.body.innerHTML = `
        <header>
        <img class="logo" src="assets/logo_simvsvirus.svg"/>
        <!--<h2>SIM vs VIRUS</h2>-->
        <img class="topOption" src="assets/share-24px.svg"/>     
        </header>

        <h3 class="page-title">Before we starting simulation, we need some information from you...</h3>
        <div class="question">       
            <span>"I think, Corona is not mush worse than the flu."</span>     
            <div>
                <input id="trigger" type="checkbox">
                <label for="trigger" class="checker"></label> 
            </div>  
        </div>
        <div class="question odd">       
            <span>"I have caught/fever/breathing problems."</span>     
            <div>
                <input id="trigger" type="checkbox">
                <label for="trigger" class="checker"></label> 
            </div>  
        </div>
        <div class="question">       
            <span>"I was in a high risk area in the last 14 days."</span>     
            <div>
                <input id="trigger" type="checkbox">
                <label for="trigger" class="checker"></label> 
            </div>   
        </div>
        <div class="question odd">       
            <span>"I had contact to a corana infected person in the last 14 days."</span>   
            <div>
                <input id="trigger" type="checkbox">
                <label for="trigger" class="checker"></label> 
            </div>  
        </div>
        <div class="question">       
            <span>Number of people i live with:</span>  
            <div class="input-container">
                <input type="number" />
            </div>   
        </div>
        <div class="question">       
            <span>Number of people outside:</span>  
            <input type="number" />
        </div>

        <footer class="footer-controls">
            <div class="arrow-container">
                <img id="prev_page" class="arrow-left" src="assets/arrow_left.svg">
                <span class="disable-margin">5/6</span>
                <img id="next_page" class="arrow-right" src="assets/arrow_right.svg">
            </div>
        </footer>
        `
    document.getElementById("prev_page").addEventListener("click", showLayoutInfo);
    document.getElementById("next_page").addEventListener("click", showLayoutForm2);
}

function showLayoutForm2() {
    document.body.innerHTML = `
        <header>
        <img class="logo" src="assets/logo_simvsvirus.svg"/>
        <!--<h2>SIM vs VIRUS</h2>-->
        <img class="topOption" src="assets/share-24px.svg"/>     
        </header>

        <h3 class="page-title">Before we starting simulation, we need some information from you...</h3>
        <div class="question">       
            <span>"I think, Corona is not mush worse than the flu."</span>     
            <div>
                <input id="trigger" type="checkbox">
                <label for="trigger" class="checker"></label> 
            </div>  
        </div>
        <div class="question odd">       
            <span>"I have caught/fever/breathing problems."</span>     
            <div>
                <input id="trigger" type="checkbox">
                <label for="trigger" class="checker"></label> 
            </div>  
        </div>
        <div class="question">       
            <span>"I was in a high risk area in the last 14 days."</span>     
            <div>
                <input id="trigger" type="checkbox">
                <label for="trigger" class="checker"></label> 
            </div>   
        </div>
        <div class="question odd">       
            <span>"I had contact to a corana infected person in the last 14 days."</span>   
            <div>
                <input id="trigger" type="checkbox">
                <label for="trigger" class="checker"></label> 
            </div>  
        </div>
        <div class="question">       
            <span>Number of people i live with:</span>  
            <div class="input-container">
                <input type="number" />
            </div>   
        </div>
        <div class="question">       
            <span>Number of people outside:</span>  
            <input type="number" />
        </div>

        <footer class="footer-controls">
            <div class="arrow-container">
                <img id="prev_page" class="arrow-left" src="assets/arrow_left.svg">
                <span class="disable-margin">6/6</span>
                <img id="next_page" class="arrow-right" src="assets/arrow_right.svg">
            </div>
        </footer>
        `
    document.getElementById("prev_page").addEventListener("click", showLayoutForm1);
    document.getElementById("next_page").addEventListener("click", showLayoutSim);
}

function showLayoutSim() {
    document.body.innerHTML = `
        <header>
            <img class="logo" src="assets/logo_simvsvirus.svg"/>
            <!--<h2>SIM vs VIRUS</h2>-->
            <img class="topOption" src="assets/share-24px.svg"/>     
        </header>

        <h5 class="page-title-small">Your person group</h5>

        <div class="group-options">      
            <div>
                <input id="adults" type="checkbox">
                <label for="adults" class="adults"></label> 
            </div>
            <div>
                <input id="children" type="checkbox">
                <label for="children" class="children"></label> 
            </div>
            <div>
                <input id="elderly" type="checkbox">
                <label for="elderly" class="elderly"></label> 
            </div>
            <div>
                <input id="sick" type="checkbox">
                <label for="sick" class="sick"></label> 
            </div>        
        </div>
        <div class="sim-top-separator"></div>
        <div id="container">

        </div>
        <div class="sim-bottom-separator"></div>
        <div class="group-options behavior">      
            <div>
                <input id="mask" type="checkbox">
                <label for="mask" class="mask"></label> 
            </div>
            <div>
                <input id="wash-hands" type="checkbox">
                <label for="wash-hands" class="wash-hands"></label> 
            </div>
            <div>
                <button id="distance" class="distance"></button>
            </div>
            <div>
                <input id="home-inside" type="checkbox">
                <label for="home-inside" class="home-inside"></label> 
            </div>        
        </div>
        <h6 class="page-title-small">Your behavior</h6>
        <div class="sim-controls">
            <img src="assets/icon_curves.svg" id="show-curves"> 
            <select disabled>
                <option>COVID-19</option>
            </select>
            <img src="assets/icon_repeat.svg" id="b-repeat"> 
            <img src="assets/icon_pause.svg" id="b-pause"> 
        </div>

        <footer class="footer-controls">
            <div class="arrow-container">
                <img class="arrow-left" src="assets/arrow_left.svg">
                <span class="disable-margin" id="pageCounter">1/6</span>
                <img class="arrow-right" src="assets/arrow_right.svg">
            </div>
        </footer>
        `;

    /*
        Behavior
    */
    var distanceButton = document.getElementById("distance");
    distanceButton.addEventListener("click", function () {

        console.log(distanceButton.style.backgroundImage);
        if (distanceButton.style.backgroundImage == 'url("assets/icon_distance_0.svg")') {
            distanceButton.style.backgroundImage = "url(assets/icon_distance_05.svg)";
            simulation_view.simulation.group_normal.velocity_multiplicator = 0.6;
        } else if (distanceButton.style.backgroundImage == 'url("assets/icon_distance_05.svg")') {
            distanceButton.style.backgroundImage = 'url(assets/icon_distance_1.svg)';
            simulation_view.simulation.group_normal.velocity_multiplicator = 0.3;
        } else if (distanceButton.style.backgroundImage == 'url("assets/icon_distance_1.svg")') {
            distanceButton.style.backgroundImage = "url(assets/icon_distance_2.svg)";
            simulation_view.simulation.group_normal.velocity_multiplicator = 0.0;
        } else if (distanceButton.style.backgroundImage == 'url("assets/icon_distance_2.svg")') {
            distanceButton.style.backgroundImage = "url(assets/icon_distance_0.svg)";
            simulation_view.simulation.group_normal.velocity_multiplicator = 1.0;
        } else {
            distanceButton.style.backgroundImage = "url(assets/icon_distance_05.svg)";
            simulation_view.simulation.group_normal.velocity_multiplicator = 0.6;
        }
    });
    var maskCheck = document.getElementById("mask");
    maskCheck.addEventListener("change", function (e) {
        console.log("mask: " + e.target.checked);
        if (e.target.checked) {

        } else {

        }
    });
    var washCheck = document.getElementById("wash-hands");
    washCheck.addEventListener("change", function (e) {
        console.log("wash: " + e.target.checked);
        if (e.target.checked) {
            this.simulation_view.simulation.group_normal.infectivity -= 0.4;
        } else {
            this.simulation_view.simulation.group_normal.infectivity += 0.4;
        }
    });
    var homeCheck = document.getElementById("home-inside");
    homeCheck.addEventListener("change", function (e) {
        console.log("home-inside: " + e.target.checked);
        if (e.target.checked) {
            for (var i = 0; i < simulation_view.simulation.boxes.length; i++) {
                simulation_view.simulation.boxes[i].area_escape = { "Normal": 1.0, "Risk": 0.0 };
                simulation_view.simulation.boxes[i].area_entry = { "Normal": 1.0, "Risk": 0.0 };
            }
        } else {
            for (var i = 0; i < simulation_view.simulation.boxes.length; i++) {
                simulation_view.simulation.boxes[i].area_escape = { "Normal": 0.0, "Risk": 0.0 };
                simulation_view.simulation.boxes[i].area_escape = { "Normal": 1.0, "Risk": 0.0 };
            }
        }
    });
    /*
        Filter
    */
    var adultsFilter = document.getElementById("adults");
    adultsFilter.addEventListener("change", function (e) {
        console.log("adults: " + e.target.checked);
        if (e.target.checked) {

        } else {

        }
    });
    var childrenFilter = document.getElementById("children");
    childrenFilter.addEventListener("change", function (e) {
        console.log("children: " + e.target.checked);
        if (e.target.checked) {

        } else {

        }
    });
    var elderlyFilter = document.getElementById("elderly");
    elderlyFilter.addEventListener("change", function (e) {
        console.log("elderly: " + e.target.checked);
        if (e.target.checked) {

        } else {

        }
    });
    var sickFilter = document.getElementById("sick");
    sickFilter.addEventListener("change", function (e) {
        console.log("sick: " + e.target.checked);
        if (e.target.checked) {

        } else {

        }
    });

    var bRepeat = document.getElementById("b-repeat");
    bRepeat.addEventListener("click", function (e) {
        console.log("bRepeat");
        simulation_view.simulation.initialize();
        simulation_view.redrawAllCircles();
        curve.data = new Array();
    });
    var bPause = document.getElementById("b-pause");
    bPause.addEventListener("click", function (e) {
        console.log("bPause");
        if (simulation_view.simulation.stopped) {
            simulation_view.simulation.resume();
        } else {
            simulation_view.simulation.stop();
        }
    });
    document.getElementById("pageCounter").style.display = "none";

    customElements.define('curve-view', Curve);
    customElements.define('sim-view', SimulationView);

    var sim_width = 10;
    var sim_height = 5;
    this.simulation = new Simulation(sim_width, sim_height, 200);
    var area_entry = { "Normal": 0.0, "Risk": 0.0 };
    var area_escape = { "Normal": 0.0, "Risk": 0.0 };

    for (var i = 0; i < 5; i++) {
        this.simulation.boxes.push(new IsolationBox(0.05 * sim_width, 0.2 * sim_width, (i + 0.1) * sim_height / 5.0, (i + 0.9) * sim_height / 5.0, area_escape, area_entry));
        this.simulation.boxes.push(new IsolationBox(0.8 * sim_width, 0.95 * sim_width, (i + 0.1) * sim_height / 5.0, (i + 0.9) * sim_height / 5.0, area_escape, area_entry));
    }

    this.simulation.group_risk.velocity_multiplicator = 0.2;
    this.simulation.max_days = 80.0;
    this.simulation.group_normal.infectivity = 1.0;

    var simulation_view = new SimulationView(this.simulation, 800);
    document.getElementById("container").appendChild(simulation_view);
    this.simulation.initialize()

    var curve = new Curve(this.simulation, 800);
    curve.style.display = "none";
    document.getElementById("container").appendChild(curve);

    var bCurve = document.getElementById("show-curves");
    bCurve.addEventListener("click", function (e) {
        console.log("showCurve");
        if (curve.style.display == "block") {
            curve.style.display = "none";
            simulation_view.style.display = "block";
        }else{
            curve.style.display = "block";
            simulation_view.style.display = "none";
        }
    });

    document.getElementById("prev_page").addEventListener("click", showLayoutForm1);
}