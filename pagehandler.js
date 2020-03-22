class PageHandler {
    constructor() {

    }

    showLayoutWelcome() {
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
        document.getElementById("next_page").addEventListener("click", this.showLayoutInfo);
    }

    showLayoutInfo() {
        //function setInfoHTML(html) {
        //    document.getElementById("info").innerHTML = html;
        //}
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
                <img id="next_page" class="arrow-left" src="assets/arrow_left.svg">
                <span class="disable-margin">1/6</span>
                <img id="prev_page" class="arrow-right" src="assets/arrow_right.svg">
            </div>
        </footer>
        `;
        document.getElementById("next_page").addEventListener("click", setInfoHTML("lel"));
        document.getElementById("prev_page").addEventListener("click", this.showLayoutWelcome);
    }

    showLayoutSim() {
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
                <img id="next_page" class="arrow-left" src="assets/arrow_left.svg">
                <span class="disable-margin">1/6</span>
                <img id="prev_page" class="arrow-right" src="assets/arrow_right.svg">
            </div>
        </footer>
        `
        document.getElementById("next_page").addEventListener("click", this.showLayoutInfo);
        document.getElementById("prev_page").addEventListener("click", this.showLayoutInfo);
    }
}