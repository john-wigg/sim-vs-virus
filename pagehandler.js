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
            <div class="seperator"></div>
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

        <footer class="footer-controls">
            <div class="arrow-container">
                <img id="prev_page" class="arrow-left" src="assets/arrow_left.svg">
                <span class="disable-margin"></span>
                <img id="next_page" class="arrow-right" src="assets/arrow_right.svg">
            </div>
        </footer>
        `
    document.getElementById("prev_page").addEventListener("click", showLayoutForm1);
}