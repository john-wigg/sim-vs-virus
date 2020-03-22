function showLayoutInfo() {
    function setInfo1() {
        document.getElementById("next_page").addEventListener("click", setInfo2);
        //document.getElementById("prev_page").addEventListener("click", showLayoutSim);
        document.getElementById("page_num").innerHTML = "1/10";

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
        document.getElementById("page_num").innerHTML = "2/10";
        
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
        document.getElementById("next_page").addEventListener("click", setInfo4);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "3/10";

        var title = "What happens if you go outside?";         
        var text = `<p>According to the current available knowledge, SARS-CoV-2 spreads mainly by droplet infection. These are small, wet particles we spread when we sneeze or cough, if we are infected, which can infect others only if they are in close contact to us. It is very easy to get infected if we don’t take measures to contain it and we freely meet others.</p> 
        <p>- If you suspect you are infected: going out is very dangerous not only for yourself, but also for others. Please observe a period of quarantine as suggested by your local authorities. If you get sick, do not just show up at the hospital! Call instead the health services: being in contact with already sick people will put them at a very high risk!</p>
        <p>- if you are a person at risk, or with pre-existing conditions (e.g.: asthma, allergies, severe or chronic illnesses): you should go out only if necessary. If you can get help to get groceries or medicinè, please do, and follow strict hygiene measures when exchanging goods (no direct contact, disinfect your hands and wash food).</p>
        <p>- if you are a healthy individual not at risk: you should also be going out only for necessity. You should stay healthy, so that others who are more at risk can get treatment and be safe. You can offer to help people at risk by collecting groceries and medicines for them. However, be sure to follow strict hygiene procedures (you can use gloves to pick up objects, you should wash your hands often and thoroughly, and leave the shopping on the front door).</p>`;
        
        text += `<img src="images/figure-wash.png"></img><span class="figure">Figure: wash your hands properly!</span>`;

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo4() {
        document.getElementById("next_page").addEventListener("click", setInfo5);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "4/10";

        var title = "What happens if you go outside?";         
        var text = `<p style="text-decoration:underline">Staying inside for that long is hard.</p> 
        <p>It is understandable that we want to go out, and enjoy weekends. But this time, our community asks us to be responsible: it is in everybody’s hands to stop this, and any behaviour against the prevention of the diffusion of the virus prolongs this phase in which restrictions are heavier. However, we should consider ourselves lucky to have so many means of communication nowadays, that can help us be in touch with our loved ones. Check also other #WirVsVirus projects to see what solution have been developed to better spend your time inside!</p>`;
        text += `References</br>          
        <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a><br><br>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a><br><br>
        <a href="http://www.salute.gov.it/nuovocoronavirus">http://www.salute.gov.it/nuovocoronavirus</a>`;


        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo5() {
        document.getElementById("next_page").addEventListener("click", setInfo6);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "5/10";

        var title = "Why are the measures so strict?";         
        var text = `<p>The virus is very infectious, and it has happened that people not showing any symptoms have been tested positive. That means, even though you don’t feel anything, you can spread the illness to your fellow humans and therewith to risk groups. This is also related to the fact that we do not have enough knowledge on the virus itself. It is necessary that contact between people is reduced to a minimum until the active cases are reduced. This kind of phase can be called the “Hammer”, in which we hit the problem as hard as we can.</p>`;
        text += `<p style="text-decoration:underline">Will this work?</p><p>YES! In China, where extreme isolation measures have been implemented, there are now no more new cases reported each day. The dedicated hospitals are closing because they are not needed anymore, and life is slowly starting again as normal. Now the challenge is up to us.</p>`
        text += `<img src="images/figure-china.png"></img><span class="figure">Figure: Cases recorded in China over time</span>`;

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo6() {
        document.getElementById("next_page").addEventListener("click", setInfo7);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "6/10";

        var title = "Why are the measures so strict?";         
        var text = `<p style="text-decoration:underline">How long will it take?</p><p>The only way to make it go faster is to follow the guidelines of the authorities to the letter. The less strict and responsible we are, the more people will die! What is more, the authorities will have no choice but to pass harder restrictions for longer times. This will endanger the economy, the mental health of the population, and the quality of life of everyone.</p>`;
        text += `References</br>          
        <a href="https://www.who.int/dg/speeches/detail/who-director-general-s-statement-on-ihr-emergency-committee-on-novel-coronavirus-(2019-ncov)">https://www.who.int/dg/speeches/detail/who-director-general-s-statement-on-ihr-emergency-committee-on-novel-coronavirus-(2019-ncov)</a><br><br>
        <a href="https://wwwnc.cdc.gov/eid/article/26/6/20-0357_article">https://wwwnc.cdc.gov/eid/article/26/6/20-0357_article</a><br><br>
        <a href="https://www.apa.org/practice/programs/dmhi/research-information/social-distancing">https://www.apa.org/practice/programs/dmhi/research-information/social-distancing</a>`;


        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo7() {
        document.getElementById("next_page").addEventListener("click", setInfo8);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "7/10";

        var title = "What is this “Hammer and Dance” approach?";         
        var text = `<p>It is very likely that governments will follow this kind of approach. Just a mitigation approach is not sensible: the growth of the illness will still be very fast and very large. What is necessary, is restricting movement as much as possible in a short phase: this is called the “Hammer” approach. In this phase, we contain movement and exchanges as much as possible, until the disease has reduced drastically.</p>`;
        text += `In the following months, the fight is not over. There will still be infectious people, but very few, and we will know what we are up against. This is the “Dance” phase. The authorities will monitor areas and the number of infected individuals, and have focused measures instead of large scale restrictions. But to get there fast, we need to act fast and decisively!`;
        text += `References</br>          
        <a href="https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca">https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca</a><br><br>
        <a href="https://medium.com/@tomaspueyo/coronavirus-the-hammer-and-the-dance-be9337092b56">https://medium.com/@tomaspueyo/coronavirus-the-hammer-and-the-dance-be9337092b56</a><br><br>`;


        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo8() {
        document.getElementById("next_page").addEventListener("click", setInfo9);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "8/10";

        var title = "What should we do?";         
        var text = `<p>Once again: follow the advice of the authorities! The measures will work, but they require the responsibility and patience of everyone. We live in democracies, which give every citizen responsibility on the quality of public life. Our freedom is the freedom to choose how to act. It is essential that each one of us makes a sacrifice for the wellbeing of everyone, freely and responsibly. Enforcement is in place, but puts at risk the health and lives of police officers, soldiers and health workers. This is not necessary if everyone behaves as they should.</p>`;

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo9() {
        document.getElementById("next_page").addEventListener("click", setInfo10);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "9/10";

        var title = "What happens next?";         
        var text = `<p>The fight is not over once we are rid of cases. This is a pandemic: it is now going around the world. New cases will appear and will need to be contained when it happens. Does it mean we are going back to this state? Hopefully not, but nobody can know. If we implement the Hammer phase successfully, we can move forward to the second phase, “the Dance”. In this phase, life will go on nearly as normal, but people will be asked to isolate and be careful if they show symptoms, or quarantine if they travel to a risk area. No widespread measures should be necessary, as long as we are responsible.</p>`;

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo10() {
        document.getElementById("next_page").addEventListener("click", setInfo3);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "10/10";

        var title = "Where can I get useful information?";         
        var text = `<p>Advice and information in several languages is being given by governments regularly and clearly. If you are a German speaker, you can consult:</p>`;
        text += `<ul><li>Robert Koch Institut <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a></li>`; 
        text += `<li>the website <a href="https://www.infektionsschutz.de/coronavirus.html">https://www.infektionsschutz.de/coronavirus.html</a> by the Bundeszentrale für gesundheitliche Aurklärung</li>`; 
        text += `<li>the Bundesministerium für Gesundheit <a href="https://www.bundesgesundheitsministerium.de/coronavirus.html">https://www.bundesgesundheitsministerium.de/coronavirus.html</a></li></ul>`;

        text += `<p>For English speakers:</p>`;
        text += `<ul><li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a></li>`; 
        text += `<li>the CDC website (US) <a href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">https://www.cdc.gov/coronavirus/2019-nCoV/index.html</a></li>`; 
        text += `<li>-	the NHS website (UK) <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/">https://www.nhs.uk/conditions/coronavirus-covid-19/</a></li></ul>`; 
        
        text += `<p>For Italian speakers:</p>`;
        text += `<ul><li>Ministero della Salute <a href="http://www.salute.gov.it/nuovocoronavirus">http://www.salute.gov.it/nuovocoronavirus</a></li>`; 
        text += `<li>Dipartimento della Protezione Civile <a href="http://www1.protezionecivile.gov.it/home?contentId=LEG21407">http://www1.protezionecivile.gov.it/home?contentId=LEG21407</a></li></ul>`; 

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

