function showLayoutInfo() {
    function setInfo1() {
        document.getElementById("next_page").addEventListener("click", setInfo2);
        //document.getElementById("prev_page").addEventListener("click", showLayoutSim);
        document.getElementById("page_num").innerHTML = "1/3";

        var title = "What is the “coronavirus”?";
        var text = `<p style="background-color: yellow;">NOTE: We collected these information based on the currently available knowledge end of March 2020. For up-to-date information please refer to the resources linked at the end of the text.</p>`;          
        
        text += `<p style="text-decoration:underline">The Virus</p><img src="images/figure1.jpg"></img>`
        text += `<p>In December 2019, a new kind of pneumonia was discovered in China. This was later found to be originated by a virus in the group of Coronavirus, so in the same family as SARS (Severe Acute Respiratory Syndrome) and MERS (Middle Eastern Respiratory  Syndrome). The name that has been given to this virus is SARS-CoV-2. COVID-19 is the illness that the virus causes.</p>`;
        text += `Symptoms of COVID-19 <ul><li>Runny nose</li><li>Sore throat</li><li>Dry Cough</li><li>Fever</li><li>Difficulty Breathing</li></ul></br>
        References</br>          
        <a href="https://www.who.int/health-topics/coronavirus">https://www.who.int/health-topics/coronavirus</a><br><br>
        <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/<br>InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a><br><br>
        <a href="https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf">https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf</a>`;

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo2() {
        document.getElementById("next_page").addEventListener("click", setInfo3);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "2/3";
        
        var title = "Is COVID-19 like the flu?";
        var text = `<p style="text-decoration:underline">COVID-19 is NOTHING like a flu!</p>`;          
        text += `<p>Latest seasonal flu outbreaks have a “reproduction rate” (how many people a contagious person infects) of 1.28 (with a range from 1.19 to 1.37). We have an established infrastructure for vaccine development and distribution, and different treatment options are available in the hospitals.</p> 
        <p>The danger posed by COVID-19 is largely due to the fact that many details of the illness are unknown. Until now (March 2020), there is no clear therapy or vaccines. In addition to this, we don’t have any reliable data yet regarding the effect of the virus on pregnant women and unborn children. What is known, is that its reproduction rate is estimated above 2, making it much more infectious. This slightly higher number represents a very big growth in absolute numbers due to the exponential growth of the number of infected people. Having the many uncertainties in mind, the virus can’t be allowed to infect the majority of the population.</p>
        <p>Moreover, we are not even sure if being infected creates a lasting immunization: there are already many strains of the virus going around, showing it has a fast mutation rate and is very adaptable.</p>
        <p>Luckily, we have caught this early enough that we can stop it before it causes too many deaths. Other times, we were not so lucky. The 1918 “Spanish Flu” pandemic killed an estimate of 20 to 100 million people around the world which, at the time, represented between 5 to 25% of the total world population. We need to stop this.
        </p>`;
        text += `References</br>          
        <a href="https://bmcinfectdis.biomedcentral.com/articles/10.1186/1471-2334-14-480">https://bmcinfectdis.biomedcentral.com/articles/10.1186/1471-2334-14-480</a><br><br>
        <a href="https://wwwnc.cdc.gov/eid/article/12/1/05-0979_article">https://wwwnc.cdc.gov/eid/article/12/1/05-0979_article</a><br><br>
        <a href="https://academic.oup.com/jtm/article/27/2/taaa021/5735319">https://academic.oup.com/jtm/article/27/2/taaa021/5735319</a><br>
        <a href="https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwaa036/5775463">https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwaa036/5775463</a>`;

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo3() {
        document.getElementById("next_page").addEventListener("click", setInfo3);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "3/3";

        var title = "What happens if you go outside?";         
        var text = `<p>According to the current available knowledge, SARS-CoV-2 spreads mainly by droplet infection. These are small, wet particles we spread when we sneeze or cough, if we are infected, which can infect others only if they are in close contact to us. It is very easy to get infected if we don’t take measures to contain it and we freely meet others.</p> 
        <p>- If you suspect you are infected: going out is very dangerous not only for yourself, but also for others. Please observe a period of quarantine as suggested by your local authorities. If you get sick, do not just show up at the hospital! Call instead the health services: being in contact with already sick people will put them at a very high risk!</p>
        <p>- if you are a person at risk, or with pre-existing conditions (e.g.: asthma, allergies, severe or chronic illnesses): you should go out only if necessary. If you can get help to get groceries or medicinè, please do, and follow strict hygiene measures when exchanging goods (no direct contact, disinfect your hands and wash food).</p>
        <p>- if you are a healthy individual not at risk: you should also be going out only for necessity. You should stay healthy, so that others who are more at risk can get treatment and be safe. You can offer to help people at risk by collecting groceries and medicines for them. However, be sure to follow strict hygiene procedures (you can use gloves to pick up objects, you should wash your hands often and thoroughly, and leave the shopping on the front door).</p>`;
        
        text += `<img src="images/figure-wash.png"></img><span class="figure">Figure: wash your hands properly!</span>`;

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    document.body.innerHTML = `
        <header>
        <img class="logo" src="assets/logo_simthinkact2.svg"/>
        <!--<h2>SIM vs VIRUS</h2>-->
        <img class="topOption" src="assets/share-24px.svg"/>     
        </header>

        <!--<img class="small-virus" src="assets/virus.svg"/>-->

        <main id="info" class="info-box">
            <h4 style="text-align: center; text-transform: uppercase;" id="info-title">What is the corona-virus?</h4>     
            <div id="info-text">Test</p>          
            <!--<a class="more-info" href="">More information...</a>-->
        </main>

        <footer class="footer-controls">
            <div class="arrow-container">
                <img id="prev_page" class="arrow-left" src="assets/arrow_left.svg">
                <span id="page_num" class="disable-margin">-</span>
                <img id="next_page" class="arrow-right" src="assets/arrow_right.svg">
            </div>
        </footer>
        `
    setInfo1();
}

window.addEventListener("load", showLayoutInfo);

