function showLayoutInfo() {
    function removeEventListeners() {
        var old_element = document.getElementById("next_page");
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        old_element = document.getElementById("prev_page");
        new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
    }
    function setInfo1() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo2);
        //document.getElementById("prev_page").addEventListener("click", showLayoutSim);
        document.getElementById("page_num").innerHTML = "1/10";

        var title = "What is the “coronavirus”?";
        var text = `<p style="background-color: yellow;">NOTE: We collected these information based on the currently available knowledge end of March 2020. For up-to-date information please refer to the resources linked at the end of the text.</p>`;

        text += `<p style="text-decoration:underline">The Virus</p><img src="images/figure1.jpg"></img><span class="figure">This work by [NIAID](<a href="https://www.flickr.com/photos/niaid/49534865371/">https://www.flickr.com/photos/niaid/49534865371/</a>) is licensed under [CC BY 2.0](<a href="https://creativecommons.org/licenses/by/2.0/">https://creativecommons.org/licenses/by/2.0/</a>)</span>`
        text += `<p>In December 2019, a new kind of pneumonia was discovered in China. This was later found to be originated by a virus in the group of Coronavirus, so in the same family as SARS (Severe Acute Respiratory Syndrome) and MERS (Middle Eastern Respiratory  Syndrome). The name that has been given to this virus is SARS-CoV-2. COVID-19 is the illness that the virus causes.</p>`;
        text += `Symptoms of COVID-19 <ul><li>Runny nose</li><li>Sore throat</li><li>Dry Cough</li><li>Fever</li><li>Difficulty Breathing</li></ul></br>
        References</br>          
        <a href="https://www.who.int/health-topics/coronavirus">https://www.who.int/health-topics/coronavirus</a><br><br>
        <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/<br>InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a><br><br>
        <a href="https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf">https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf</a>`;

        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
            title = "Was ist das “Coronavirus”?";

            text = `<p style="background-color: yellow;">HINWEIS: Wir haben diese Informationen auf Basis der im Moment verfügbaren Daten zusammengestellt. Für neueste Informationen besuchen Sie bitte die Seiten, die am Ende dieses Dokuments verlinkt sind. Stand: März 2020</p>`;

            text += `<p style="text-decoration:underline">Das Virus</p><img src="images/figure1.jpg"></img><span class="figure">Abbildung 1: Bild von einem Coronavirus unter dem Elektronenmikroskop. Es sieht wie eine Krone aus, daher der Name (Lat. corona = Krone). Dieses Werk von [NIAID](<a href="https://www.flickr.com/photos/niaid/49534865371/">https://www.flickr.com/photos/niaid/49534865371/</a>) ist lizensiert unter [CC BY 2.0](<a href="https://creativecommons.org/licenses/by/2.0/">https://creativecommons.org/licenses/by/2.0/</a>)</span>`
            text += `<p>Im Dezember 2019 wurde eine neuartige Lungenentzündung in China entdeckt. Man fand heraus, dass sie von einem Virus aus der Gruppe der Coronaviren verursacht wird, wie auch die Erkrankungen SARS (Severe Acute Respiratory Syndrome) und MERS (Middle Eastern Respiratory  Syndrome). Das Virus wurde SARS-CoV-2 genannt, die von ihm verursachte Krankheit hat den Namen COVID-19 bekommen.</p>`;
            text += `Symptome von COVID-19: <ul><li>Schnupfen</li><li>Halsschmerzen</li><li>Trockener Husten</li><li>Fieber</li><li>Atemschwierigkeiten</li></ul></br>
            Quellen</br>          
            <a href="https://www.who.int/health-topics/coronavirus">https://www.who.int/health-topics/coronavirus</a><br><br>
            <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/<br>InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a><br><br>
            <a href="https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf">https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf</a>`;
        } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
            title = "Cosa è il “coronavirus”?";

            text = `<p style="background-color: yellow;">NOTA: Abbiamo raccolto queste informazioni sulla base delle conoscenze attualmente disponibili alla fine di marzo 2020. Per informazioni aggiornate si prega di fare riferimento alle risorse collegate alla fine del testo.</p>`;

            text += `<p style="text-decoration:underline">The Virus</p><img src="images/figure1.jpg"></img><span class="figure">Gli autori [NIAID](<a href="https://www.flickr.com/photos/niaid/49534865371/">https://www.flickr.com/photos/niaid/49534865371/</a>) rilasciano questo lavoro sotto licenza [CC BY 2.0](<a href="https://creativecommons.org/licenses/by/2.0/">https://creativecommons.org/licenses/by/2.0/</a>)</span>`
            text += `<p>Nel Dicembre del 2019, un nuovo caso di polmonite è stato individuato in Cina. In un secondo momento, è stato determinato che la causa di questa è un virus del gruppo dei Coronavirus, la stessa famiglia della SARS e della MERS. Il nome che è stato dato a questo virus è SARS-CoV-2. COVID-19 è la malattia causata da questo virus.</p>`;
            text += `Sintomi del COVID-19: <ul><li>Febbre</li><li>Tosse secca</li><li>Fastidio alla gola</li><li>Raffreddore</li><li>Difficoltà respiratorie</li></ul></br>
            Fonti</br>          
            <a href="http://www.salute.gov.it/portale/malattieInfettive/dettaglioFaqMalattieInfettive.jsp?lingua=italiano&id=228">http://www.salute.gov.it/portale/malattieInfettive/dettaglioFaqMalattieInfettive.jsp?lingua=italiano&id=228</a><br><br>
            <a href="https://www.who.int/health-topics/coronavirus">https://www.who.int/health-topics/coronavirus</a><br><br>
            <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/<br>InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a><br><br>
            <a href="https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf">https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf</a>`;
        }

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo2() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo3);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "2/10";

        var title = "Is COVID-19 like the flu?";
        var text = `<p style="text-decoration:underline">COVID-19 is NOTHING like a flu!</p>`;
        text += `<p>Latest seasonal flu outbreaks have a “reproduction rate” (how many people a contagious person infects) of 1.28 (with a range from 1.19 to 1.37). We have an established infrastructure for vaccine development and distribution, and different treatment options are available in the hospitals.</p> 
        <p>The danger posed by COVID-19 is largely due to the fact that many details of the illness are unknown. Until now (March 2020), there is no clear therapy or vaccines. In addition to this, we don’t have any reliable data yet regarding the effect of the virus on pregnant women and unborn children. What is known, is that its reproduction rate is estimated above 2, making it much more infectious. This slightly higher number represents a very big growth in absolute numbers due to the exponential growth of the number of infected people. Having the many uncertainties in mind, the virus can’t be allowed to infect the majority of the population.</p>
        <p>Moreover, we are not even sure if being infected creates a lasting immunization: there are already many strains of the virus going around, showing it has a fast mutation rate and is very adaptable.</p>
        <p>Luckily, we have caught this early enough that we can stop it before it causes too many deaths. Other times, we were not so lucky. The 1918 “Spanish Flu” pandemic killed an estimate of 20 to 100 million people around the world which, at the time, represented between 5 to 25% of the total world population. We need to stop this.</p>`;
        text += `References</br>   
        <a href="https://bmcinfectdis.biomedcentral.com/articles/10.1186/1471-2334-14-480">https://bmcinfectdis.biomedcentral.com/articles/10.1186/1471-2334-14-480</a><br><br>       
        <a href="https://wwwnc.cdc.gov/eid/article/12/1/05-0979_article">https://wwwnc.cdc.gov/eid/article/12/1/05-0979_article</a><br><br>
        <a href="https://academic.oup.com/jtm/article/27/2/taaa021/5735319">https://academic.oup.com/jtm/article/27/2/taaa021/5735319</a><br>
        <a href="https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwaa036/5775463">https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwaa036/5775463</a>`;

        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
            title = "Wie ähnlich ist COVID-19 der Grippe?";

            text = `<p style="text-decoration:underline">COVID-19 unterscheidet sich stark von der Grippe!</p>`;
            text += `<p>Die letzten saisonal bedingten Ausbrüche der Grippe hatten eine Mortalität (Sterblichkeit)von weniger als 0,1% der Betroffenen und eine “Reproduktionsrate” (Wie viele weitere Personen steckt eine betroffene Person an) zwischen 1,19 und 1,37 mit einem Mittel von 1,28. Die Symptome einer Grippe erfordern nur selten eine stationäre Behandlung im Krankenhaus, und eine rasche Entwicklung von Impfstoffen verlangsamt die Ausbreitung beträchtlich.</p> 
            <p>Die Gefahr, die von COVID-19 ausgeht, besteht darin, dass nicht viel über die Krankheit bekannt ist und verschiedene Menschen sehr unterschiedlich auf die Krankheit reagieren. Außerdem wird angenommen, dass die Reproduktionsrate über 2 liegt, was zu einer deutlich schnelleren Ausbreitung führt. Da man keine Impfstoffe hat und keine effektiven Behandlungsmethoden kennt, muss dafür gesorgt werden, dass sich so wenige Menschen wie möglich infizieren. Hinzu kommt, dass das Virus schnell mutiert und sehr anpassungsfähig ist. Deshalb ist es nicht unwahrscheinlich, dass man sich mehrmals infizieren kann.</p>
            <p>Glücklicherweise wurde der Krankheitserreger früh entdeckt, sodass die Bemühungen für ein Gegenmittel und gegen die schnelle Verbreitung hoffentlich allzu viele Tode vermeiden können. Es gibt in der Geschichte auch Beispiele, die das verheerende Potenzial von Krankheiten zeigen: Im Jahre 1918 hat die “Spanische Grippe” schätzungsweise zwischen 20 und 100 Millionen Menschen getötet. Das entspricht 5-25% der damaligen Weltbevölkerung.</p>`;
            text += `Quellen</br>          
            <a href="https://bmcinfectdis.biomedcentral.com/articles/10.1186/1471-2334-14-480">https://bmcinfectdis.biomedcentral.com/articles/10.1186/1471-2334-14-480</a><br><br>
            <a href="https://wwwnc.cdc.gov/eid/article/12/1/05-0979_article">https://wwwnc.cdc.gov/eid/article/12/1/05-0979_article</a><br><br>
            <a href="https://academic.oup.com/jtm/article/27/2/taaa021/5735319">https://academic.oup.com/jtm/article/27/2/taaa021/5735319</a><br>
            <a href="https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwaa036/5775463">https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwaa036/5775463</a>`;
        } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
            title = "Il COVID-19 è come un’influenza, giusto?";

            text = `<p style="text-decoration:underline">SBAGLIATO</p>`;
            text += `<p>Le ultime epidemie stagionali di influenza hanno una capacità di riproduzione (quante persone vengono infettate da un soggetto contagioso) di 1.28 (nell'intervallo da 1.19 a 1.37). Abbiamo strutture e procedure chiare per produrre e distribuire un vaccino, ed è possibile seguire e curare i malati con larghe possibilità di successo.</p> 
            <p>Il pericolo posto dal COVID-19 è dovuto, in larga parte, al fatto che molti dettagli di questa malattia sono ancora sconosciuti, e colpisce le persone in maniera molto differente. Alla data di oggi (Marzo 2020) non esiste ancora un vaccino o una terapia testati e verificati. In più, la sua capacità di riproduzione è vicina a 2, quindi molto più infettivo dell’influenza stagionale. Questo significa che il numero di contagiati può aumentare molto rapidamente, a causa della crescita esponenziale dei malati, rischiando di eccedere la capacità del nostro sistema sanitario. In più, molte incognite riguardano anche le donne incinte: non sappiamo che effetto possa avere il virus sul feto, ad esempio se possa provocare disabilità nel neonato. Con tutte queste incognite, non possiamo permettere al virus di infettare la maggior parte della popolazione.</p>
            <p>Un’altra grossa incognita riguarda l’immunizzazione: non siamo sicuri che un individuo che abbia già contratto la malattia non la possa contrarre in futuro. Ci sono molte varianti di questo virus in giro, vista la sua alta capacità di mutazione e la sua adattabilità. Quindi, la recidività è una possibilità concreta.</p>
            <p>Fortunatamente, ci siamo accorti di questa epidemia in tempo, e possiamo evitare che causi ancora più morti. In passato, non siamo stati così fortunati. L’epidemia di “Spagnola” del 1918 ha causato, in tutto il mondo, tra i 20 e i 100 milioni di morti, di cui circa quattrocentomila (400000) in italia. In termini di percentuali, questo significa tra il 5 e il 25% della popolazione mondiale all’epoca, e l’1% della popolazione italiana. Dobbiamo fermare la diffusione di COVID-19 prima di raggiungere una tragedia di questa portata.
            </p>`;
            text += `Fonti</br>          
            <a href="http://www.treccani.it/enciclopedia/spagnola">http://www.treccani.it/enciclopedia/spagnola</a><br><br>
            <a href="https://bmcinfectdis.biomedcentral.com/articles/10.1186/1471-2334-14-480">https://bmcinfectdis.biomedcentral.com/articles/10.1186/1471-2334-14-480</a><br><br>
            <a href="https://wwwnc.cdc.gov/eid/article/12/1/05-0979_article">https://wwwnc.cdc.gov/eid/article/12/1/05-0979_article</a><br><br>
            <a href="https://academic.oup.com/jtm/article/27/2/taaa021/5735319">https://academic.oup.com/jtm/article/27/2/taaa021/5735319</a><br>
            <a href="https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwaa036/5775463">https://academic.oup.com/nsr/advance-article/doi/10.1093/nsr/nwaa036/5775463</a>`;
        }

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo3() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo4);
        document.getElementById("prev_page").addEventListener("click", setInfo2);
        document.getElementById("page_num").innerHTML = "3/10";

        var title = "What happens if you go outside?";
        var text = `<p>According to the current available knowledge, SARS-CoV-2 spreads mainly by droplet infection. These are small, wet particles we spread when we sneeze or cough, if we are infected, which can infect others only if they are in close contact to us. It is very easy to get infected if we don’t take measures to contain it and we freely meet others.</p> 
        <p>- If you suspect you are infected: going out is very dangerous not only for yourself, but also for others. Please observe a period of quarantine as suggested by your local authorities. If you get sick, do not just show up at the hospital! Call instead the health services: being in contact with already sick people will put them at a very high risk!</p>
        <p>- if you are a person at risk, or with pre-existing conditions (e.g.: asthma, allergies, severe or chronic illnesses): you should go out only if necessary. If you can get help to get groceries or medicinè, please do, and follow strict hygiene measures when exchanging goods (no direct contact, disinfect your hands and wash food).</p>
        <p>- if you are a healthy individual not at risk: you should also be going out only for necessity. You should stay healthy, so that others who are more at risk can get treatment and be safe. You can offer to help people at risk by collecting groceries and medicines for them. However, be sure to follow strict hygiene procedures (you can use gloves to pick up objects, you should wash your hands often and thoroughly, and leave the shopping on the front door).</p>`;

        text += `<img src="images/figure-wash.png"></img><span class="figure">Figure: wash your hands properly!</span>`;

        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
            title = "Was passiert, wenn man nach draußen geht?";
            text = `<p>Wie andere Coronaviren auch, verbreitet sich Sars-CoV-2 über die Atemwege und Kontakt zu infizierten Personen und kontaminierten Oberflächen. Ohne Gegenmaßnahmen und besondere Vorsicht kann man sich leicht anstecken.</p> 
            <p>- Wenn man glaubt, dass man infiziert sein könnte: Das Haus verlassen ist besonders für andere Menschen gefährlich. Man sollte soziale Kontakte soweit möglich meiden und nicht ins Krankenhaus gehen, sondern diese informieren und auf Anweisungen warten, um andere Kranke nicht zu gefährden.</p>
            <p>- Wenn man in der Risikogruppe ist: Das Haus nicht verlassen, wenn nicht unbedingt nötig. Andere Leute einkaufen lassen, und strikte Hygienevorschriften befolgen</p>
            <p>- Auch wenn man persönlich nicht in der Risikogruppe ist: Man sollte sich trotzdem ähnlich verhalten, um das Risiko einer Infektion für die gefährdeten Menschen zu minimieren. Wenn man hlfen möchte, kann man für gefährdete Leute Einkäufe erledigen.</p>`;

            text += `<img src="images/figure-wash.png"></img><span class="figure">Figure: wash your hands properly!</span>`;
        } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
            title = "Cosa succede se esco?";
            text = `<p>Come altri esempi di Coronavirus, il SARS-CoV-2 si diffonde prevalentemente per via aerea, e tramite contatto con superfici e individui infetti. È molto facile venire infettati se non adottiamo contromisure per ridurre le possibilità di infezione e se incontriamo altra gente normalmente.</p> 
            <p>- Se sospetti di essere infetto: uscire è molto pericoloso non solo per te, ma anche per gli altri! Per quanto possibile, cerca di osservare un periodo di quarantena stretta di almeno 14 giorni, come suggerito dalle autorità locali. Se ti ammali seriamente, NON farti accompagnare in ospedale normalmente! Al contrario, chiama i numeri verdi regionali messi a disposizione dalle autorità sanitarie, o il numero di pubblica utilità 1500, che ti istruiranno sul da farsi: metterti a contatto con persone già ammalate le mette in grave pericolo!</p>
            <p>- Se sei in una categoria considerata a rischio, o con condizioni pre-esistenti (asma, allergie, sindromi croniche o acute): è consigliabile uscire solo se strettamente necessario. Se ti è possibile farti portare a casa la spesa o le medicine, approfittane, ma segui contromisure igieniche severe quando le ricevi (nessun contatto diretto, lava o disinfetta le mani e lava il cibo).</p>
            <p>- Se sei una persona in salute, fuori dalle categorie a rischio: fai il possibile per non ammalarti, ed esci solo se necessario. Devi restare in salute, così che persone già a rischio possano ricevere aiuto prontamente in caso si ammalino. Se vuoi fare qualcosa, puoi offrirti di aiutare le persone a rischio andando a prendere medicine e spesa al posto loro. In questo caso, ricordati di seguire contromisure igieniche severe (puoi usare dei guanti per prendere i prodotti, disinfettarti le mani spesso quando li maneggi, e lasciare i prodotti davanti la porta di casa, senza entrare).</p>`;

            text += `<img src="images/figure-wash.png"></img><span class="figure"></span>`;
        }

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo4() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo5);
        document.getElementById("prev_page").addEventListener("click", setInfo3);
        document.getElementById("page_num").innerHTML = "4/10";

        var title = "What happens if you go outside?";
        var text = `<p style="text-decoration:underline">Staying inside for that long is hard.</p> 
        <p>It is understandable that we want to go out, and enjoy weekends. But this time, our community asks us to be responsible: it is in everybody’s hands to stop this, and any behaviour against the prevention of the diffusion of the virus prolongs this phase in which restrictions are heavier. However, we should consider ourselves lucky to have so many means of communication nowadays, that can help us be in touch with our loved ones. Check also other #WirVsVirus projects to see what solution have been developed to better spend your time inside!</p>`;
        text += `References</br>          
        <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a><br><br>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a><br><br>
        <a href="http://www.salute.gov.it/nuovocoronavirus">http://www.salute.gov.it/nuovocoronavirus</a>`;

        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
            title = "Was passiert, wenn man nach draußen geht?";
            text = `<p style="text-decoration:underline">So lange drinnen bleiben ist nicht leicht.</p> 
            <p>Es ist verständlich, dass man das Haus verlassen und Spaß haben möchte. Allerdings trägt in diesen Zeiten jeder eine große gesellschaftliche Verantwortung: Wir als Gemeinschaft müssen die Krankheit bekämpfen, und jegliches Verhalten, das zur Verbreitung des Virus beiträgt, verlängert diese schwierige Phase mit Einschränkungen des Alltags. Allerdings gibt es heute viele Kommunikationsmittel, sodass wir auch ohne physische Anwesenheit weiter mit Menschen, die einem wichtig sind, in Kontakt bleiben können. Seht euch auch die anderen #WirVsVirus-Projekte für Anregungen, was man drinnen machen kann, an.</p>`;

            text += `Quellen</br>          
            <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a><br><br>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a><br><br>
            <a href="http://www.salute.gov.it/nuovocoronavirus">http://www.salute.gov.it/nuovocoronavirus</a>`;
        } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
            title = "Cosa succede se esco?";
            text = `<p style="text-decoration:underline">Stare in casa a lungo è difficile</p> 
            <p>È comprensibile che vogliamo uscire, e goderci i nostri finesettimana, ad esempio. Ma in questo periodo, la nostra comunità ci chiede di essere responsabili: la soluzione a questo problema è nelle mani di tutti, e ogni comportamento che viola le norme di prevenzione del contagio mette tutti a rischio, e prolunga le restrizioni sulla nostra libertà individuale. Ciononostante, dobbiamo considerarci molto fortunati ad avere così tante opzioni per comunicare al giorno d’oggi, e possiamo metterci in contatto coi nostri cari molto facilmente.</p>`;

            text += `Fonti</br>          
            <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a><br><br>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a><br><br>
            <a href="http://www.salute.gov.it/nuovocoronavirus">http://www.salute.gov.it/nuovocoronavirus</a>`;
        }

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo5() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo6);
        document.getElementById("prev_page").addEventListener("click", setInfo4);
        document.getElementById("page_num").innerHTML = "5/10";

        var title = "Why are the measures so strict?";
        var text = `<p>The virus is very infectious, and it has happened that people not showing any symptoms have been tested positive. That means, even though you don’t feel anything, you can spread the illness to your fellow humans and therewith to risk groups. This is also related to the fact that we do not have enough knowledge on the virus itself. It is necessary that contact between people is reduced to a minimum until the active cases are reduced. This kind of phase can be called the “Hammer”, in which we hit the problem as hard as we can.</p>`;
        text += `<p style="text-decoration:underline">Will this work?</p><p>YES! In China, where extreme isolation measures have been implemented, there are now no more new cases reported each day. The dedicated hospitals are closing because they are not needed anymore, and life is slowly starting again as normal. Now the challenge is up to us.</p>`
        text += `<img src="images/figure-china.png"></img><span class="figure">Figure: Cases recorded in China over time</span>`;

        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
            title = "Warum sind die Maßnahmen so strikt?";

            text = `<p>Das Virus ist sehr infektiös, und es wurden Leute ganz ohne Symptome positiv auf das Virus getestet. Das heißt, dass man das Virus an nahestehende Menschen weitergeben kann, ohne es zu merken. Zusammen mit dem Fakt, dass wir nur wenig über das Virus wissen, entsteht daraus die Notwendigkeit, den Kontakt zwischen Menschen auf ein Minimum zu reduzieren, bis die Anzahl der Infizierten abnimmt. Diese Phase wird als “Hammer” bezeichnet, es wird versucht, das Problem mit drastischen Maßnahmen so schnell wie möglich unter Kontrolle zu bringen.</p>`;
            text += `<p style="text-decoration:underline">Funktioniert das?</p><p>JA! In China, wo eine strenge soziale Isolation durchgesetzt wurde, wird von keinen Neuinfektionen mehr berichtet. Die speziell eingerichteten Krankenhäuser schließen wieder, weil sie nicht mehr benötigt werden, und der Alltag normalisiert sich langsam wieder. Nun stehen wir vor dieser Herausforderung.</p>`
            text += `<img src="images/figure-china.png"></img><span class="figure">Figure: Entwicklung der Fälle in China</span>`;
        } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
            title = "Perché queste contromisure sono così severe?";

            text = `<p>Il virus è molto infettivo, ed è già stato osservato come persone asintomatiche siano positive, e dunque potenzialmente contagiose. In aggiunta a questo, non abbiamo ancora abbastanza informazioni sul virus stesso. È dunque necessario che i contatti tra le persone vengano ridotti il più possibile, almeno finché i casi attivi comincino a diminuire. Questa fase può essere chiamata il “Martello”, durante la quale “colpiamo” il problema più duramente possiamo.</p>`;
            text += `<p style="text-decoration:underline">Queste restrizioni funzionano?</p><p>CERTO! In Cina, dove molte regioni hanno adottato regimi estremi di isolamento personale, i casi giornalieri si sono ridotti fino a quasi azzerarsi. Gli ospedali speciali vengono chiusi per mancanza di casi, e la vita sta lentamente tornando alla normalità. Adesso, è il nostro momento di raccogliere la sfida.</p>`
            text += `<img src="images/figure-china.png"></img><span class="figure"></span>`;
        }

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo6() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo7);
        document.getElementById("prev_page").addEventListener("click", setInfo5);
        document.getElementById("page_num").innerHTML = "6/10";

        var title = "Why are the measures so strict?";
        var text = `<p style="text-decoration:underline">How long will it take?</p><p>The only way to make it go faster is to follow the guidelines of the authorities to the letter. The less strict and responsible we are, the more people will die! What is more, the authorities will have no choice but to pass harder restrictions for longer times. This will endanger the economy, the mental health of the population, and the quality of life of everyone.</p>`;
        text += `References</br>          
        <a href="https://www.who.int/dg/speeches/detail/who-director-general-s-statement-on-ihr-emergency-committee-on-novel-coronavirus-(2019-ncov)">https://www.who.int/dg/speeches/detail/who-director-general-s-statement-on-ihr-emergency-committee-on-novel-coronavirus-(2019-ncov)</a><br><br>
        <a href="https://wwwnc.cdc.gov/eid/article/26/6/20-0357_article">https://wwwnc.cdc.gov/eid/article/26/6/20-0357_article</a><br><br>
        <a href="https://www.apa.org/practice/programs/dmhi/research-information/social-distancing">https://www.apa.org/practice/programs/dmhi/research-information/social-distancing</a>`;

        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
            title = "Warum sind die Maßnahmen so strikt?";

            text = `<p style="text-decoration:underline">Wie lange werden die Maßnahmen andauern?</p><p>Der einzige Weg, diese Phase zu beschleunigen, ist, den Richtlinien der Behörden zu befolgen. Je weniger diese umgesetzt werden, desto mehr Menschen werden sterben. Das wird dazu führen, dass noch strengere Maßnahmen für einen längeren Zeitraum angewendet werden. Das wird die Wirtschaft, die Moral der Bevölkerung, und die Lebensqualität schädigen.</p>`;
            text += `Quellen</br>          
            <a href="https://www.who.int/dg/speeches/detail/who-director-general-s-statement-on-ihr-emergency-committee-on-novel-coronavirus-(2019-ncov)">https://www.who.int/dg/speeches/detail/who-director-general-s-statement-on-ihr-emergency-committee-on-novel-coronavirus-(2019-ncov)</a><br><br>
            <a href="https://wwwnc.cdc.gov/eid/article/26/6/20-0357_article">https://wwwnc.cdc.gov/eid/article/26/6/20-0357_article</a><br><br>
            <a href="https://www.apa.org/practice/programs/dmhi/research-information/social-distancing">https://www.apa.org/practice/programs/dmhi/research-information/social-distancing</a>`;
        } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
            title = "Perché queste contromisure sono così severe?";

            text = `<p style="text-decoration:underline">Per quanto dureranno?</p><p>L’unico modo di accelerare questo processo è di seguire alla lettera le linee guida delle autorità. Se ci comportiamo egoisticamente e irresponsabilmente, moriranno più persone! Inoltre, le sanzioni e le restrizioni diventeranno più severe, mettendo a rischio il nostro stile di vita, l’economia, e la salute della popolazione.</p>`;
            text += `Fonti</br>      
            <a href="hhttp://www.salute.gov.it/portale/malattieInfettive/dettaglioFaqMalattieInfettive.jsp?lingua=italiano&id=228">http://www.salute.gov.it/portale/malattieInfettive/dettaglioFaqMalattieInfettive.jsp?lingua=italiano&id=228</a><br><br>    
            <a href="https://www.who.int/dg/speeches/detail/who-director-general-s-statement-on-ihr-emergency-committee-on-novel-coronavirus-(2019-ncov)">https://www.who.int/dg/speeches/detail/who-director-general-s-statement-on-ihr-emergency-committee-on-novel-coronavirus-(2019-ncov)</a><br><br>
            <a href="https://wwwnc.cdc.gov/eid/article/26/6/20-0357_article">https://wwwnc.cdc.gov/eid/article/26/6/20-0357_article</a><br><br>
            <a href="https://www.apa.org/practice/programs/dmhi/research-information/social-distancing">https://www.apa.org/practice/programs/dmhi/research-information/social-distancing</a>`;
        }

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo7() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo8);
        document.getElementById("prev_page").addEventListener("click", setInfo6);
        document.getElementById("page_num").innerHTML = "7/10";

        var title = "What is this “Hammer and Dance” approach?";
        var text = `<p>It is very likely that governments will follow this kind of approach. Just a mitigation approach is not sensible: the growth of the illness will still be very fast and very large. What is necessary, is restricting movement as much as possible in a short phase: this is called the “Hammer” approach. In this phase, we contain movement and exchanges as much as possible, until the disease has reduced drastically.</p>`;
        text += `In the following months, the fight is not over. There will still be infectious people, but very few, and we will know what we are up against. This is the “Dance” phase. The authorities will monitor areas and the number of infected individuals, and have focused measures instead of large scale restrictions. But to get there fast, we need to act fast and decisively!`;
        text += `References</br>          
        <a href="https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca">https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca</a><br><br>
        <a href="https://medium.com/@tomaspueyo/coronavirus-the-hammer-and-the-dance-be9337092b56">https://medium.com/@tomaspueyo/coronavirus-the-hammer-and-the-dance-be9337092b56</a><br><br>`;

        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
            title = "Was ist der “Hammer und Tanz”-Ansatz?";

            text = `<p>Vermutlich werden viele Regierungen diesem Ansatz folgen. Ein weniger strikter Ansatz ist nicht sinnvoll: Die Krankheit wird sich trotzdem schnell in weiten Teilen der Bevölkerung verbreiten. Deshalb muss in einer kurzen Zeitspanne die Bewegungsfreiheit der Bevölkerung radikal eingeschränkt werden. Das ist der “Hammer”-Ansatz. In dieser Zeit werden Bewegung und Austausch der Bevölkerung untereinander drastisch eingeschränkt, bis ein starker Rückgang der Krankheit zu verzeichnen ist. In den Monaten danach ist der Kampf gegen die Krankheit noch nicht vorbei. Es wird immer noch infizierte Personen geben, aber nur wenige, und wir werden wissen, was uns erwartet. Das ist die “Tanz”-Phase. Die Behörden werden Gebiete und die Anzahl der Infizierten überwachen, und fokussierte Maßnahmen statt Einschränkungen im großen Maßstab einführen. Aber um schnell an diesen Punkt zu gelangen, müssen wir schnell und defensiv handeln.</p>`;
            text += `Quellen</br>          
            <a href="https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca">https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca</a><br><br>
            <a href="https://medium.com/@tomaspueyo/coronavirus-the-hammer-and-the-dance-be9337092b56">https://medium.com/@tomaspueyo/coronavirus-the-hammer-and-the-dance-be9337092b56</a><br><br>`;
        } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
            title = "Qual è un approccio realizzabile?";

            text = `<p>In questo articolo del Washington post si fa riferimento a un approccio chiamato “Hammer and Dance”, “Martello e Danza”. Come vediamo dal grafico, una semplice “mitigazione” degli effetti non è consigliabile: i casi aumenterebbero comunque troppo rapidamente, e metterebbero tutti in pericolo. Ciò che è necessario è la restrizione dei movimenti il più possibile nel breve periodo: questo è il “Martello”. In questa fase, vengono adottate molte restrizioni finché la diffusione del virus viene contenuta e i casi si sono ridotti drasticamente.</p>`;
            text += `<img src="images/figure-hammer.png"></img>`;
            text += `<p>Nei mesi successivi, la battaglia deve continuare. Ci saranno ancora persone contagiose e infette, ma il loro numero sarà esiguo, e a quel punto saremo al corrente della situazione. Questa è la “Danza”. Le autorità continueranno a monitorare le aree a rischio e il numero di infetti, e ci saranno misure mirate invece di restrizioni su scala nazionale. Ma per arrivare a questa fase in fretta, bisogna agire rapidamente e con decisione. Ognuno deve fare la sua parte.</p>`;
            text += `Fonti</br>          
            <a href="https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca">https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca</a><br><br>
            <a href="https://medium.com/@tomaspueyo/coronavirus-the-hammer-and-the-dance-be9337092b56">https://medium.com/@tomaspueyo/coronavirus-the-hammer-and-the-dance-be9337092b56</a><br><br>`;
        }

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo8() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo9);
        document.getElementById("prev_page").addEventListener("click", setInfo7);
        document.getElementById("page_num").innerHTML = "8/10";

        var title = "What should we do?";
        var text = `<p>Once again: follow the advice of the authorities! The measures will work, but they require the responsibility and patience of everyone. We live in democracies, which give every citizen responsibility on the quality of public life. Our freedom is the freedom to choose how to act. It is essential that each one of us makes a sacrifice for the wellbeing of everyone, freely and responsibly. Enforcement is in place, but puts at risk the health and lives of police officers, soldiers and health workers. This is not necessary if everyone behaves as they should.</p>`;

        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
            title = "Was sollten wir jetzt tun?";

            text = `<p>Noch einmal: Wir sollten die Anweisungen der Behörden befolgen! Die Maßnahmen funktionieren, aber sie erfordern Verantwortung und Geduld von jedem. Wir Leben in Demokratien, in denen jeder Bürger Verantwortung für die Qualität des öffentlichen Lebens trägt. Unsere Freiheit ist, zu entscheiden, wie wir handeln. Es ist notwendig, dass jeder von uns ein Opfer für das Wohl der Gesellschaft bringt. Erzwungene Maßnahmen funktionieren, gefährden aber Polizisten, Soldaten und Pflegekräfte. Sie sind nicht nötig, wenn sich jeder der Situation angemessen verhält.</p>`;
        } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
            title = "Cosa dovremmo fare?";
            text = `<p>Seguite il consiglio delle autorità! Queste misure funzioneranno, ma c’è bisogno del senso di responsabilità e della pazienza di tutti. Viviamo in una democrazia, che da a ogni cittadino la responsabilità sulla qualità della vita comune. La nostra libertà include la libertà di scegliere come agire. È fondamentale che ognuno di noi realizzi che la soluzione viene da noi stessi, e non dagli altri o dallo stato: dobbiamo fare un sacrificio temporaneo per il bene comune, liberamente e responsabilmente. Le forze dell’ordine stanno facendo rispettare i decreti e le linee guida, ma a rischio delle vite di soldati, poliziotti e operatori sanitari. Se ognuno si comportasse come deve, ciò non sarebbe necessario. Controlliamo il nostro comportamento, prima di giudicare gli altri. Sforziamoci di capire se e quanto sia necessario uscire, con la consapevolezza che ogni sortita non necessaria è un rischio per la salute pubblica.</p>`;
        }

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo9() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo10);
        document.getElementById("prev_page").addEventListener("click", setInfo8);
        document.getElementById("page_num").innerHTML = "9/10";

        var title = "What happens next?";
        var text = `<p>The fight is not over once we are rid of cases. This is a pandemic: it is now going around the world. New cases will appear and will need to be contained when it happens. Does it mean we are going back to this state? Hopefully not, but nobody can know. If we implement the Hammer phase successfully, we can move forward to the second phase, “the Dance”. In this phase, life will go on nearly as normal, but people will be asked to isolate and be careful if they show symptoms, or quarantine if they travel to a risk area. No widespread measures should be necessary, as long as we are responsible.</p>`;

        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
            title = "Was passiert als nächstes?";
            text = `<p>Der Kampf gegen das Virus ist nicht vorbei, sobald es keine Fälle mehr gibt. Wir haben eine Pandemie, es gibt überall auf der Welt Fälle. Es wird auf kurz oder lang Neuinfektionen geben, und wir müssen auf diese vorbereitet sein. Heißt das, dass wir noch einmal in diese Phase der sozialen Distanz zurückkehren? Hoffentlich nicht, aber ausschließen können wir das auch nicht. Wenn wir den Hammer-Ansatz erfolgreich verfolgen, können wir und in die zweite Phase begeben. Dann wird sich das Leben nahezu normal abspielen, aber Leute werden angehalten sein, sich zu isolieren, falls sie Symptome zeigen. Keine weit gefächerten Maßnahmen sollten nötig sein, solange sich jeder verantwortungsbewusst verhält.</p>`;

        } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
            title = "Cosa succederà in futuro?";
            text = `<p>Preoccupiamoci innanzitutto di far passare questa fase. In secondo luogo, la nostra prima preoccupazione deve essere la salute nostra, dei nostri cari e della comunità. In futuro, nuovi casi compariranno e dovranno essere monitorati e isolati. Se la fase del “Martello” avrà successo in fretta, potremo entrare nella seconda fase, la “Danza”. In questa fase, la vita potrà riprendere più o meno normalmente, ma le persone dovranno osservare quarantene se viaggiano in aree di rischio, o se esibiscono sintomi. Nessuna misura su larga scala dovrebbe essere necessaria, se ci comportiamo responsabilmente.</p>`;
        }

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    function setInfo10() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo1);
        document.getElementById("prev_page").addEventListener("click", setInfo9);
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

        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
            title = "Wo kann ich mich weiter informieren?";

            text = `<p>Ratschläge und Informationen auf verschiedenen Sprachen werden von den jeweiligen Regierungen herausgegeben.<br>Deutsche Informationen:</p>`;
            text += `<ul><li>Robert-Koch-Institut <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a></li>`;
            text += `<li>Bundeszentrale für gesundheitliche Aufklärung <a href="https://www.infektionsschutz.de/coronavirus.html">https://www.infektionsschutz.de/coronavirus.html</a></li>`;
            text += `<li>Bundesministerium für Gesundheit <a href="https://www.bundesgesundheitsministerium.de/coronavirus.html">https://www.bundesgesundheitsministerium.de/coronavirus.html</a></li></ul>`;

            text += `<p>For English speakers:</p>`;
            text += `<ul><li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a></li>`;
            text += `<li>the CDC website (US) <a href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">https://www.cdc.gov/coronavirus/2019-nCoV/index.html</a></li>`;
            text += `<li>-	the NHS website (UK) <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/">https://www.nhs.uk/conditions/coronavirus-covid-19/</a></li></ul>`;

            text += `<p>For Italian speakers:</p>`;
            text += `<ul><li>Ministero della Salute <a href="http://www.salute.gov.it/nuovocoronavirus">http://www.salute.gov.it/nuovocoronavirus</a></li>`;
            text += `<li>Dipartimento della Protezione Civile <a href="http://www1.protezionecivile.gov.it/home?contentId=LEG21407">http://www1.protezionecivile.gov.it/home?contentId=LEG21407</a></li></ul>`;
        } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
            title = "Come posso documentarmi?";

            text = `<p>In queste circostanze, è molto facile farsi prendere dal panico e cercare notizie da fonti non attendibili. Non fidatevi di catene di messaggi Whatsapp, voci o fonti non ufficiali. Le uniche fonti certe sono le istituzioni:</p>`;
            text += `<ul><li>Ministero della Salute <a href="http://www.salute.gov.it/nuovocoronavirus">http://www.salute.gov.it/nuovocoronavirus</a></li>`;
            text += `<li>Dipartimento della Protezione Civile <a href="http://www1.protezionecivile.gov.it/home?contentId=LEG21407">http://www1.protezionecivile.gov.it/home?contentId=LEG21407</a></li></ul>`;

            text += `<p>For English speakers:</p>`;
            text += `<ul><li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a></li>`;
            text += `<li>the CDC website (US) <a href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">https://www.cdc.gov/coronavirus/2019-nCoV/index.html</a></li>`;
            text += `<li>-	the NHS website (UK) <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/">https://www.nhs.uk/conditions/coronavirus-covid-19/</a></li></ul>`;

            text += `<p>Advice and information in several languages is being given by governments regularly and clearly. If you are a German speaker, you can consult:</p>`;
            text += `<ul><li>Robert Koch Institut <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/nCoV.html</a></li>`;
            text += `<li>the website <a href="https://www.infektionsschutz.de/coronavirus.html">https://www.infektionsschutz.de/coronavirus.html</a> by the Bundeszentrale für gesundheitliche Aurklärung</li>`;
            text += `<li>the Bundesministerium für Gesundheit <a href="https://www.bundesgesundheitsministerium.de/coronavirus.html">https://www.bundesgesundheitsministerium.de/coronavirus.html</a></li></ul>`;
        }

        document.getElementById("info-title").innerHTML = title;
        document.getElementById("info-text").innerHTML = text;
    }

    document.body.innerHTML = `
        <header>
            <a href="index.html"><img id="b-back" class="topBack" src="assets/arrow_back-24px.svg"/></a>
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
        `;

    //document.getElementById("b-back").addEventListener("click", () => { location.href = "index.html"; location.reload(); });
    setInfo1();
}

window.addEventListener("load", showLayoutInfo);

