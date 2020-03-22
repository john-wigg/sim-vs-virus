var checkFlu = false;
var checkCaugh = false;
var checkRiskArea = false;
var checkContact = false;
var checkKeepDistance = false;
var checkSelfIsolation = false;
var checkWashTime = false;
var checkWashHands = false;
var checkTouchFace = false;
var checkKnowContact = false;
var checkTransport = false;

function showLayoutWelcome() {
    var textWelcome = `Our communities are going through a crisis right now that threatens our lifestyles. Due to the pandemic outbreak of COVID-19, caused by the Coronavirus SARS-CoV-2, we are increasingly asked to observe many safety measures, like social distancing, self isolation, and increased hand hygiene. But will this be enough? Will these measures really have an impact? Inspired by <a href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/">this Washington Post article</a>, we devised an interactive simulator that will show you the importance of following these measures in a simple and understandable way. Let’s begin!<p><a href="https://www.youtube.com/watch?v=5mWXZCuTJE0">Our video for #WirvsVirusHack</a><br><a href="info.html">More Information</a>`;
    //var textRoommates = "Number of people I live with.";
    //var textMeet = "Number of people I meet outside per week.";

    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
        textWelcome = `Unsere Gesellschaft durchleben gerade eine Krise, die unsere Lebensweise bedroht. Aufgrund des Pandemieausbruchs von COVID-19, der durch das Coronavirus SARS-CoV-2 verursacht wird, werden wir zunehmend aufgefordert, viele Sicherheitsmaßnahmen zu beachten, wie z.B. "social Distancing", Selbstisolierung und erhöhte Handhygiene. Aber wird dies ausreichen? Werden diese Maßnahmen wirklich eine Wirkung haben? Inspiriert durch <a href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/">diesen Artikel der Washington Post</a> haben wir einen interaktiven Simulator entwickelt, der Ihnen auf einfache und verständliche Weise zeigt, wie wichtig es ist, diese Maßnahmen zu befolgen. Lassen Sie uns beginnen!<p><a href="https://www.youtube.com/watch?v=5mWXZCuTJE0">Unser Video für #WirvsVirusHack</a><br><a href="info.html">Mehr Information</a>`;
    } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
        textWelcome = `Le nostre comunità stanno attraversando una crisi che mette in pericolo il nostro stile di vita. A causa della pandemia di COVID-19, causata dal Coronavirus SARS-CoV-2, ci viene chiesto di aderire a numerose misure di sicurezza, come distanziamento sociale, autoisolamento, e igiene personale più accurata. Ma tutto ciò sarà sufficiente? Queste misure avranno un impatto reale sulla diffusione della malattia?
        Ci siamo ispirati a questo articolo del Washington Post per mettere a punto <a href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/">questo</a> simulatore interattivo che possa mostrarvi l’importanza di seguire queste misure in maniera semplice e comprensibile. Cominciamo!<p><a href="info.html">Maggiori informazioni</a>`

    }

    document.body.innerHTML = `
        <header>
        <img class="logo" src="assets/logo_simthinkact2.svg"/>
        <!--< h2 > SIM vs VIRUS</h2 > -->
        <img class="topOption" src="assets/share-24px.svg" />     
        </header >

        <h3 class="greeting">WELCOME TO THE OFFICIAL VIRUS SPREAD SIMULATOR</h3>
        <main id="info">` + textWelcome + `</main>
        <div class="arrow-container">
            <span></span>
            <img id="next_page" class="arrow-right" src="assets/arrow_right.svg">
        </div>

        <footer>
            <div class="separator">
                <h4>OFFICIALLY SUPPORTED BY</h4>
            </div>
            <img src="assets/logo_rki.png" />
            <img src="assets/logo_bmg.png" />
            <div class="separator footer">
                <h4>www.example.com</h4>
            </div>
        </footer>`;
    document.getElementById("next_page").addEventListener("click", showLayoutForm1);
}

function showLayoutInfo() {
    function removeEventListeners() {
        var old_element = document.getElementById("next_page");
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        old_element = document.getElementById("prev_page");
        new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
    }
    var textInfo1 = `<b>The Simulation</b><p>Simulations like this one are intended to show a real world effect in an easy way. That is, the numbers in the following do not mirror the reality, but are set to show the intended effects in the simulation. The simulation is intended to show how the course of the corona pandemic changes when everyone behaves like the interviewed. This means that the majority of the simulated persons will behave according to the answers given by the user (including the probability of being infected by corona, the number of household members and the physical distance that is maintained). These persons are assigned a mortality probability of 2 %. However, 20% of the points represent persons at risk, for whom the simulation assigns an increased mortality rate of 10 %. If the percentage of infected individuals goes above 15 %, the overall mortality raises, representing the effect of the overload of the healthcare system.<p><b>Physical distance</b><p>This parameter is influenced by the number of people I meet outside my household and whether I can avoid public transport. In the simulation, this factor affects the speed at which the points move: faster movement means less physical distance.`
    var textInfo2 = `<b>Isolation factor</b><p>We assume that very few people live completely cut off from the outside world. Therefore, in the simulation the isolation factor never takes the value zero. But of course it varies depending on how you behave. The main factor here is whether you meet people outside your own household. However, within the same household infections are hard to avoide. Since we assume that nobody lives in absolute isolation, more household members automatically increase the probability of getting infected themselves or infecting others. The isolation factor affects the probability with which the points leave their "own" box.<p><b>Infectivity</b><p>How infectious someone is, i.e. the  probability they will infect others, depends on how high their probability is of being already infected by COVID-19. Existing disease symptoms, recent visits to high-risk areas and contact with patients increase this probability. What is more, one's own behaviour also plays a role, i.e. washing one's hands correctly and consistently and not touching one's face reduces the infectivity.`;
    var textInfo3 = `<b>Comparison with influenza</b><p>The statement that Corona is as dangerous as the flu is - briefly spoken - completely wrong. We will go into this in more detail <a href="info.html">here</a>. For the simulation we assume that people who tick this box have a small social distance and do not worry about their infectiousness. In the simulation, therefore, corresponding points break out of their boxes quickly and are very likely to infect other points.<p><b>Knowing people that you had contact with</b><p>In the long run, once we overcome the current phase of massive numbers of infections (see also <a href="info.html>here</a>), life will carefully go back to a less restricted stage. However, the virus will not be stopped completely. In this time, it should be everybody’s main concern to early detect infections, isolate oneself and everybody one had contact with. That is, knowing with whom you had contact during the last two weeks is essential for controlling the virus as much as possible.`;

    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
        textInfo1 = `<b>Die Simulation</b><p>Simulationen wie diese sollen auf einfache Weise eine Wirkung in der realen Welt zeigen. Das heißt, die Zahlen im Folgenden spiegeln nicht die Realität wider, sondern sind so eingestellt, dass sie in der Simulation die beabsichtigten Effekte  zeigen. Die Simulation soll darstellen, wie sich der Verlauf der Corona-Pandemie ändert, wenn sich alle so verhalten, wie man selbst eingibt. Das bedeutet, ein Großteil der simulierten Personen verhält sich entsprechend der zuvor spezifizierten Faktoren (d.h. die Wahrscheinlichkeit an Corona erkrankt zu sein, die Anzahl der Haushaltsmitglieder und die physische Distanz, die zu anderen aktuell gewahrt wird). Einmal infiziert haben diese Personen eine festgelegte Sterblichkeitswahrscheinlichkeit. Eine Untergruppe stellt jedoch die Gruppe der Risikopersonen dar, für die in der Simulation eine erhöhte Sterblichkeit festgelegt wird. Wenn der Anteil der Infizierten 15% überschreitet, steigt  die Sterblichkeit aller, womit in der Simulation die Überlastung des Gesundheitssystems dargestellt wird.<p>Die Simulation basiert auf verschiedenen Annahmen und Bedingungen:<p><b>Phyische Distanz</b><p>Dieses Maß für den Abstand, den Personen voneinander halten, wird zum einen beeinflusst von der Anzahl der Menschen, die ich außerhalb meines Haushalts treffe, sowie davon, ob ich öffentliche Transportmittel vermeiden kann. In der Simulation wird dieser Faktor über die Geschwindigkeit mit der sich die Punkte bewegen dargestellt: schnellere Bewegung bedeutet weniger physische Distanz.`;
        textInfo2 = `<b>Isolationsfaktor</b><p>Wir gehen davon aus, dass nur sehr wenige Menschen völlig abgeschnitten von der Außenwelt leben. Daher nimmt in der Simulation der Isolationsfaktor einzelner Personen nie den Wert Null an. Er variiert aber abhängig davon, wie man sich verhält. Einflussfaktor ist hier insbesondere ob man Leute außerhalb des eigenen Haushalts trifft. Innerhalb eines Haushalts lassen sich Infektionen nur sehr schwer verhindern. Da wir davon ausgehen, dass kein Mensch absolut isoliert lebt, erhöhen mehr Haushaltsmitglieder also automatisch die Wahrscheinlichkeit infiziert zu werden bzw. andere zu infizieren. Der Isolationsfaktor wird in der Simulation über die Wahrscheinlichkeit dargestellt, mit der die Punkte die „eigene“ Box verlassen.<p><b>Infektionsität</b><p>Wie infektiös jemand ist, also mit welcher Wahrscheinlichkeit er oder sie andere ansteckt, hängt zum einen davon ab, wie hoch ihre Wahrscheinlichkeit ist, an Corona erkrankt zu sein. Vorhandene Krankheitssymptome, der kürzliche Besuch von Hochrisikogebieten sowie Kontakt zu Erkrankten erhöhen diese Wahrscheinlichkeit. Zum anderen spielt darüber hinaus auch das eigene Verhalten eine Rolle, also korrektes und konsequentes Händewaschen und sich nicht ins Gesicht zu fassen.`;
        textInfo3 = `<b>Vergleich mit der Grippe</b><p>Die Aussage Corona sei ähnlich gefährlich wie die Grippe, ist – kurz gesagt – völlig falsch. Wir gehen <a href="info.html>hier</a> näher darauf ein. Für die Simulation gehen wir davon aus, dass Personen, die diese Annahme vertreten, eine geringe soziale Distanz einnehmen und sich nicht um ihre Infektiosität sorgen. In der Simulation brechen entsprechende Punkte also schnell aus ihren Boxen aus und stecken mit großer Wahrscheinlichkeit andere Punkte an.<p><b>Wissen, mit wem man in den letzten zwei Wochen Kontakt hatte</b><p>Auf lange Sicht wird das Leben, sobald wir die derzeitige Phase der massiven Infektionen (siehe auch <a href="info.html>hier</a>) überwunden haben, vorsichtig in ein weniger eingeschränktes Stadium zurückkehren. Das Virus wird jedoch nicht vollständig gestoppt sein. In dieser Zeit sollte es das Hauptanliegen aller sein, Infektionen frühzeitig zu erkennen und im Falle einer Infektion sich selbst und alle, mit denen man Kontakt hatte, zu isolieren. Das heißt, zu wissen, mit wem man in den letzten zwei Wochen Kontakt hatte, ist wesentlich, um das Virus so weit wie möglich unter Kontrolle zu bringen. In die Simulation fließt diese Frage aktuell noch nicht ein.`;
    } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
        textInfo1 = `<b>Spiegazione della simulazione</b><p>Simulazioni come questa sono mirate a semplificare e descrivere un fenomeno reale in maniera immediatamente comprensibile. Ciò significa che i numeri che seguono non devono essere presi come dati reali, ma indicano ciò che modificano nella simulazione. Il nostro scopo con questa simulazione è di mostrare come le azioni individuali possono cambiare il corso della pandemia, mostrando cosa succede se tutti adottano il nostro stesso comportamento. Quindi, la maggior parte delle persone simulate si comporteranno secondo i comportamenti descritti dall’utente nel questionario (inclusa la probabilità di essere infetti, il numero di persone nell’abitazione, e la distanza fisica da mantenere). A queste persone viene assegnata una certa probabilità di mortalità. Il 20% dei soggetti simulati appartiene a una categoria “a rischio”, per cui la probabilità di mortalità è aumentata. In aggiunta a questo, se la percentuale di contagiati supera la capacità del sistema sanitario ipotizzata, la mortalità totale aumenta, a causa dell’impossibilità di curare tutti i malati.<p>La simulazione si basa sui seguenti parametri:<p><b>Distanza fisica</b><p>Questo parametro è influenzato dal numero di persone incontrate al di fuori dell’abitazione, e se è possibile evitare i mezzi pubblici. Nella simulazione, questo influenza la velocità di spostamento delle persone simulate: più sono veloci, minore la distanza fisica mantenuta.`;
        textInfo2 = `<b>Isolamento</b><p>Ipotizziamo sia poco realistico vivere completamente isolati dal mondo esterno. Quindi, nella simulazione, la probabilità di lasciare un’area chiusa non è mai zero. Ma naturalmente dipende da come ci si comporta. Il fattore principale è se si incontrano persone al di fuori della propria abitazione. Cionondimeno, nella stessa abitazione le infezioni sono difficili da evitare. Visto che assumiamo che nessuno vive in isolamento totale, più persone significa un aumento della probabilità di venire contagiati o di contagiare altri. L’isolamento influenza dunque la probabiltà di lasciare la “scatola” dove la persona si trova.<p><b>Contagiosità</b><p>Questo fattore dipende da quanto alta è la probabilità di essere già infetti. Sintomi già presenti, visite a aree di rischio e contatto con pazienti confermati aumentano questa probabilità. Questo è influenzato anche dall’igiene personale (lavarsi le mani) e non toccare la propria faccia.`
        textInfo3 = `<b>Confronto con l’influenza</b><p>La percezione che il coronavirus sia pericoloso quanto l’influenza è errata. In questa simulazione facciamo l’assunto che le persone che selezionano questo mantengono le abitudini pre-esistenti (nessun isolamento fisico, standard igienici normali, ignorare la propria contagiosità o sintomi lievi). Quindi, nella simulazione, i punti corrispondenti escono dalle loro scatole regolarmente, e infettano gli altri con probabilità maggiore.<p><b>Conoscenza delle persone con cui si è stati a contatto</b><p>Nel lungo periodo, quando i contagi saranno contenuti, torneremo a una fase con meno restrizioni. Ciononostante, il virus sarà ancora in circolazione. In questo periodo, è necessario che ognuno di noi sia in grado di identificare se si è contratto il coronavirus o meno, e che si sia in grado di identificare con chi si sono avuti contatti stretti, o quali luoghi si sono frequentati.`

    }

    function setInfo1() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo2);
        document.getElementById("prev_page").addEventListener("click", showLayoutSim);
        document.getElementById("page_num").innerHTML = "1/3";
        document.getElementById("info").innerHTML = textInfo1;
    }

    function setInfo2() {
        removeEventListeners();
        document.getElementById("next_page").addEventListener("click", setInfo3);
        document.getElementById("prev_page").addEventListener("click", setInfo1);
        document.getElementById("page_num").innerHTML = "2/3";
        document.getElementById("info").innerHTML = textInfo2;
    }

    function setInfo3() {
        removeEventListeners();
        document.getElementById("prev_page").addEventListener("click", setInfo2);
        document.getElementById("page_num").innerHTML = "3/3";
        document.getElementById("info").innerHTML = textInfo3;
    }

    document.body.innerHTML = `
        <header>
        <img class="logo" src="assets/logo_simthinkact2.svg"/>
        <!--<h2>SIM vs VIRUS</h2>-->
        <img class="topOption" src="assets/share-24px.svg"/>     
        </header>

        <main class="info-box" id="info">

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

function showLayoutForm1() {
    function save_choices() {
        checkFlu = document.getElementById("check-flu").checked;
        checkCaugh = document.getElementById("check-caught").checked;
        checkRiskArea = document.getElementById("check-risk-area").checked;
        checkContact = document.getElementById("check-contact").checked;
        checkKeepDistance = document.getElementById("check-keepdistance").checked;
        checkSelfIsolation = document.getElementById("check-selfisolation").checked;
    }

    function go_to_next() {
        save_choices();
        showLayoutForm2();
    }

    function go_to_prev() {
        save_choices();
        showLayoutWelcome();
    }
    var textBefore = "Before we start the Simulation, we need to ask some questions...";
    var textFlu = "I think that COVID-19 is not much worse than the Flu.";
    var textCough = "I have cough/fever/breathing problems.";
    var textRisk = "I was in a high risk area in the past 14 day.s";
    var textContact = "I was in contact with an COVID-19 infected individual in the past 14 days.";
    var textKeepDistance = "I keep more than 2 m distance from other people."
    var textSelfIsolation = "My household is self-isolating."
    //var textRoommates = "Number of people I live with.";
    //var textMeet = "Number of people I meet outside per week.";

    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
        textBefore = "Bevor die Simulation startet, beantworte bitte einige Fragen:";
        textFlu = "Ich glaube, dass COVID-19 nicht sehr viel schlimmer ist, als die Grippe.";
        textCough = "Aktuell habe ich Husten, Fieber oder Atembeschwerden.";
        textRisk = "In den letzten 14 Tagen war ich in einem Hochrisikogebiet.";
        textContact = "In den letzten 14 Tagen hatte ich Kontakt zu einer Person, die mit COVID-19 infiziert war.";
        textRoommates = "Anzahl der Menschen mit denen ich zusammen wohne?";
        textMeet = "Mit wievielen Menschen triffst du dich pro Woche!";
        textKeepDistance = "Ich halte einen Abstand von mindestens 2 m zu anderen Personen ein."
        textSelfIsolation = "Mein Haushalt ist in Selbstisolation."
    } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
        textBefore = "Prima di cominciare la simulazione, dobbiamo fare qualche domanda.";
        textFlu = "Penso che COVID-19 sia come l’influenza.";
        textCough = "Ho la tosse/febbre/problemi a respirare.";
        textRisk = "Sono stato in un’area a rischio nelle ultime due settimane.";
        textContact = "Sono stato a contatto con una persona infetta nelle ultime due settimane.";
        textRoommates = "Con quante persone vivi?";
        textMeet = "Quante persone incontri ogni giorno?";
        textKeepDistance = "Tengo una distanza di almeno 2m dagli altri.";
        textSelfIsolation = "Ci stiamo auto-isolando.";
    }

    document.body.innerHTML = `
        <header>
            <img class="logo" src="assets/logo_simthinkact2.svg"/>
            <!--<h2>SIM vs VIRUS</h2>-->
            <img class="topOption" src="assets/share-24px.svg"/>     
        </header>

        <h3 class="page-title">` + textBefore + `</h3>
        <div class="question">       
            <span>"` + textFlu + `"</span>     
            <div class="mycheckbox">
                <input id="check-flu" type="checkbox">
                <label for="check-flu"></label> 
            </div>  
        </div>
        <div class="question odd">       
            <span>"` + textCough + `"</span>     
            <div class="mycheckbox">
                <input id="check-caught" type="checkbox">
                <label for="check-caught" class="checker"></label> 
            </div>  
        </div>
        <div class="question">       
            <span>"`+ textRisk + `"</span>     
            <div class="mycheckbox">
                <input id="check-risk-area" type="checkbox">
                <label for="check-risk-area" class="checker"></label> 
            </div>   
        </div>
        <div class="question odd">       
            <span>"`+ textContact + `"</span>   
            <div class="mycheckbox">
                <input id="check-contact" type="checkbox">
                <label for="check-contact" class="checker"></label> 
            </div>  
        </div>
        <div class="question odd">       
        <span>"`+ textKeepDistance + `"</span>   
            <div class="mycheckbox">
                <input id="check-keepdistance" type="checkbox">
                <label for="check-keepdistance" class="checker"></label> 
            </div>  
        </div>
        <div class="question odd">       
        <span>"`+ textSelfIsolation + `"</span>   
            <div class="mycheckbox">
                <input id="check-selfisolation" type="checkbox">
                <label for="check-selfisolation" class="checker"></label> 
            </div>  
        </div>

        <footer class="footer-controls">
            <div class="arrow-container">
                <img id="prev_page" class="arrow-left" src="assets/arrow_left.svg">
                <span class="disable-margin">1/2</span>
                <img id="next_page" class="arrow-right" src="assets/arrow_right.svg">
            </div>
        </footer>
        `;

    /* Set checkboxes based on currently active parameters */
    document.getElementById("check-flu").checked = checkFlu;
    document.getElementById("check-caught").checked = checkCaugh;
    document.getElementById("check-risk-area").checked = checkRiskArea;
    document.getElementById("check-contact").checked = checkContact;
    document.getElementById("check-keepdistance").checked = checkKeepDistance;
    document.getElementById("check-selfisolation").checked = checkSelfIsolation;

    document.getElementById("prev_page").addEventListener("click", go_to_prev);
    document.getElementById("next_page").addEventListener("click", go_to_next);
}

function showLayoutForm2() {
    function go_to_next() {
        save_choices();
        showLayoutSim();
    }

    function go_to_prev() {
        save_choices();
        showLayoutForm1();
    }
    function save_choices() {
        checkWashTime = document.getElementById("check-wash-time").checked;
        checkWashHands = document.getElementById("check-wash-hands").checked;
        checkTouchFace = document.getElementById("check-touch-face").checked;
        checkKnowContact = document.getElementById("check-know-contact").checked;
        checkTransport = document.getElementById("check-transport").checked;
    }

    var textWashTime = "I wash my hands every time I come back home for at least 20 sec.";
    var textWashHands = "I have a reminder to wash my hands frequently.";
    var textFace = "I try not to touch my face frequently.";
    var textContact = "I know who I have been in contact with in the past 14 days.";
    var textTransport = "I avoid public transport during this pandemia.";
    var textBehavior = "What is your current behavior?";
    var textLetsSimulate = "Ok, let’s simulate the effects of your behaviour!";

    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes("de-DE") || userLang.includes("de-AT") || userLang.includes("de-CH") || userLang.includes("de")) {
        textWashTime = "Ich wasche meine Hände immer wenn ich nach Hause komme für mind. 20 Sekunden.";
        textWashHands = "Ich wasche regelmäßig meine Hände.";
        textFace = "Ich versuche nicht ständig mein Gesicht zu berühren.";
        textContact = "Ich weiß, mit welchen Personen ich in den letzten 14 Tagen Kontakt hatte.";
        textTransport = "Ich vermeide öffentliche Verkehrsmittel während der Pandemie.";
        textBehavior = "Wie verhälst du dich momentan?";
        textLetsSimulate = "Ok, lass uns die Auswirkungen deines Verhaltens simulieren!"
    } else if (userLang.includes("it-IT") || userLang.includes("it-CH") || userLang.includes("it")) {
        textWashTime = "Mi lavo le mani ogni volta che torno a casa, per almeno 20 secondi.";
        textWashHands = "Ho un promemoria per lavarmi le mani frequentemente.";
        textFace = "Evito di toccarmi la faccia frequentemente.";
        textContact = "So chi ho incontrato nelle ultime due settimane.";
        textTransport = "Evito di usare i trasporti pubblici durante la pandemia.";
        textBehavior = "Come va adesso?";
        textLetsSimulate = "Ok, simuliamo gli effetti del tuo comportamento!";
    }


    document.body.innerHTML = `
        <header>
            <img class="logo" src="assets/logo_simthinkact2.svg"/>
            <!--<h2>SIM vs VIRUS</h2>-->
            <img class="topOption" src="assets/share-24px.svg"/>     
        </header>

        <h3 class="page-title">` + textBehavior + `</h3>
        <div class="question">       
            <span>"` + textWashTime + `"</span>     
            <div class="mycheckbox">
                <input id="check-wash-time" type="checkbox">
                <label for="check-wash-time"></label> 
            </div>  
        </div>
        <div class="question odd">       
            <span>"` + textWashHands + `"</span>     
            <div class="mycheckbox">
                <input id="check-wash-hands" type="checkbox">
                <label for="check-wash-hands" class="checker"></label> 
            </div>  
        </div>
        <div class="question">       
            <span>"` + textFace + `"</span>     
            <div class="mycheckbox">
                <input id="check-touch-face" type="checkbox">
                <label for="check-touch-face" class="checker"></label> 
            </div>   
        </div>
        <div class="question odd">       
            <span>"` + textContact + `"</span>   
            <div class="mycheckbox">
                <input id="check-know-contact" type="checkbox">
                <label for="check-know-contact" class="checker"></label> 
            </div>  
        </div>
        <div class="question">       
            <span>"` + textTransport + `"</span>     
            <div class="mycheckbox">
                <input id="check-transport" type="checkbox">
                <label for="check-transport" class="checker"></label> 
            </div>   
        </div>
        <h3 class="page-title">` + textLetsSimulate + `</h3>

        <footer class="footer-controls">
            <div class="arrow-container">
                <img class="arrow-left" id="prev_page" src="assets/arrow_left.svg">
                <span class="disable-margin">2/2</span>
                <img id="next_page" class="arrow-right" src="assets/arrow_right.svg">
            </div>
        </footer>
        `

    /* Set check boxes based on currently chosen parameters. */
    document.getElementById("check-wash-time").checked = checkWashTime;
    document.getElementById("check-wash-hands").checked = checkWashHands;
    document.getElementById("check-touch-face").checked = checkTouchFace;
    document.getElementById("check-know-contact").checked = checkKnowContact;
    document.getElementById("check-transport").checked = checkTransport;

    document.getElementById("prev_page").addEventListener("click", go_to_prev);
    document.getElementById("next_page").addEventListener("click", go_to_next);
}

function showLayoutSim() {
    document.body.innerHTML = `
        <header>
            <img class="logo" src="assets/logo_simthinkact2.svg"/>
            <!--<h2>SIM vs VIRUS</h2>-->
            <img class="topOption" src="assets/share-24px.svg"/>     
        </header>

        <h5 class="page-title-small">Filter by person group</h5>

        <div class="group-options">      
            <div>
                <input id="adults" type="checkbox" checked>
                <label for="adults" class="adults"></label> 
            </div>
            <div>
                <input id="elderly" type="checkbox" checked>
                <label for="elderly" class="elderly"></label> 
            </div>     
        </div>
        <div class="sim-top-separator"></div>
        <div id="container">

        </div>
        <div class="sim-bottom-separator"></div>
        <div class="group-options behavior">      
            <div>
                <input id="wash-hands" type="checkbox">
                <label for="wash-hands" class="wash-hands"></label> 
            </div>
            <div>
                <span id="distance" class="distance"></span>
            </div>
            <div>
                <input id="home-inside" type="checkbox">
                <label for="home-inside" class="home-inside"></label> 
            </div>        
        </div>
        <h6 class="page-title-small">Change your behavior<br>(Will override your previous choices)</h6>
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
                <img id="prev_page" class="arrow-left" src="assets/arrow_left.svg">
                <span class="disable-margin" id="pageCounter">3/3</span>
                <img id="next_page" class="arrow-right" src="assets/arrow_right.svg">
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
            simulation_view.simulation.group_normal.velocity_multiplicator = 0.8;
            simulation_view.simulation.group_risk.velocity_multiplicator = 0.8;
        } else if (distanceButton.style.backgroundImage == 'url("assets/icon_distance_05.svg")') {
            distanceButton.style.backgroundImage = 'url(assets/icon_distance_1.svg)';
            simulation_view.simulation.group_normal.velocity_multiplicator = 0.5;
            simulation_view.simulation.group_risk.velocity_multiplicator = 0.5;
        } else if (distanceButton.style.backgroundImage == 'url("assets/icon_distance_1.svg")') {
            distanceButton.style.backgroundImage = "url(assets/icon_distance_2.svg)";
            simulation_view.simulation.group_normal.velocity_multiplicator = 0.2;
            simulation_view.simulation.group_risk.velocity_multiplicator = 0.2;
        } else if (distanceButton.style.backgroundImage == 'url("assets/icon_distance_2.svg")') {
            distanceButton.style.backgroundImage = "url(assets/icon_distance_0.svg)";
            simulation_view.simulation.group_normal.velocity_multiplicator = 1.0;
            simulation_view.simulation.group_risk.velocity_multiplicator = 1.0;
        } else {
            distanceButton.style.backgroundImage = "url(assets/icon_distance_05.svg)";
            simulation_view.simulation.group_normal.velocity_multiplicator = 0.6;
            simulation_view.simulation.group_risk.velocity_multiplicator = 0.6;
        }
    });

    var washCheck = document.getElementById("wash-hands");
    washCheck.addEventListener("change", function (e) {
        console.log("wash: " + e.target.checked);
        if (e.target.checked) {
            simulation_view.simulation.group_normal.infectivity += 0.4;
        } else {
            simulation_view.simulation.group_normal.infectivity -= 0.4;
        }
    });
    var homeCheck = document.getElementById("home-inside");
    homeCheck.addEventListener("change", function (e) {
        console.log("home-inside: " + e.target.checked);
        if (e.target.checked) {
            for (var i = 0; i < simulation_view.simulation.boxes.length; i++) {
                simulation_view.simulation.boxes[i].area_escape = { "Normal": 1.0, "Risk": 1.0 };
                simulation_view.simulation.boxes[i].area_entry = { "Normal": 1.0, "Risk": 1.0 };
            }
        } else {
            for (var i = 0; i < simulation_view.simulation.boxes.length; i++) {
                simulation_view.simulation.boxes[i].area_escape = { "Normal": 0.05, "Risk": 0.1 };
                simulation_view.simulation.boxes[i].area_escape = { "Normal": 0.05, "Risk": 0.1 };
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
            simulation_view.filter.push("Normal"); // Add Normal to filter
            curve.filter.push("Normal");
        } else {
            simulation_view.filter.splice(simulation_view.filter.indexOf("Normal"), 1); // Remove Normal from filte
            curve.filter.splice(curve.filter.indexOf("Normal"), 1);
        }
    });
    var elderlyFilter = document.getElementById("elderly");
    elderlyFilter.addEventListener("change", function (e) {
        console.log("elderly: " + e.target.checked);
        if (e.target.checked) {
            simulation_view.filter.push("Risk");    // Add risk to filter
            curve.filter.push("Risk");
        } else {
            simulation_view.filter.splice(simulation_view.filter.indexOf("Risk"), 1); // Remove risk from filter
            curve.filter.splice(curve.filter.indexOf("Risk"), 1);
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

    var sim_width = 8;
    var sim_height = 4;
    this.simulation = new Simulation(sim_width, sim_height, 200);
    var area_entry = { "Normal": 0.05, "Risk": 0.0 };
    var area_escape = { "Normal": 0.05, "Risk": 0.0 };

    for (var i = 0; i < 5; i++) {
        this.simulation.boxes.push(new IsolationBox(0.05 * sim_width, 0.2 * sim_width, (i + 0.1) * sim_height / 5.0, (i + 0.9) * sim_height / 5.0, area_escape, area_entry));
        this.simulation.boxes.push(new IsolationBox(0.8 * sim_width, 0.95 * sim_width, (i + 0.1) * sim_height / 5.0, (i + 0.9) * sim_height / 5.0, area_escape, area_entry));
    }

    /* Set simulation parameters from questionaire */
    let infectivity = 0.8;
    let area_mobility = 0.6;
    let velocity_multiplicator = 0.8;
    let num_infected_initial = 1;

    if (checkFlu) {
        infectivity += 0.2;
        area_mobility += 0.2;
        velocity_multiplicator += 0.2;
    }

    if (checkCaugh) {
        num_infected_initial += 1;
    }

    if (checkRiskArea) {
        num_infected_initial += 1;
    }

    if (checkContact) {
        num_infected_initial += 1;
    }

    if (checkKeepDistance) {
        velocity_multiplicator -= 0.2;
    }

    if (checkSelfIsolation) {
        area_mobility -= 0.5;
    }

    if (checkWashTime) {
        infectivity -= 0.1;
    }

    if (checkWashHands) {
        infectivity -= 0.1;
    }

    if (checkTouchFace) {
        infectivity -= 0.1;
    }

    if (checkKnowContact) {
        velocity_multiplicator -= 0.2;
    }

    if (checkTransport) {
        velocity_multiplicator -= 0.2;
    }

    this.simulation.group_normal.infectivity = infectivity;
    this.simulation.group_risk.infectivity = infectivity;
    this.simulation.group_normal.velocity_multiplicator = velocity_multiplicator;
    this.simulation.group_risk.velocity_multiplicator = velocity_multiplicator;
    for (var i = 0; i < this.simulation.boxes.length; i++) {
        this.simulation.boxes[i].area_escape = { "Normal": area_mobility, "Risk": area_mobility };
        this.simulation.boxes[i].area_escape = { "Normal": area_mobility, "Risk": area_mobility };
    }

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
        } else {
            curve.style.display = "block";
            simulation_view.style.display = "none";
        }
    });

    document.getElementById("prev_page").addEventListener("click", showLayoutForm1);
    document.getElementById("next_page").addEventListener("click", showLayoutInfo);
}