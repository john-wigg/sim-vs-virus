function showLayout(){
       
    var body = document.body;
    body.innerHTML="";
    var header = document.createElement("header"); 
    body.appendChild(header);
    var elem = document.createElement("img");
    header.appendChild(elem);
    elem.setAttribute("class","logo");
    elem.setAttribute("src","assets/logo_simvsvirus.svg");
    var elem = document.createElement("img");
    header.appendChild(elem);
    elem.setAttribute("class","topOption");
    elem.setAttribute("src","assets/share-24px.svg");
    var elem = document.createElement("h3");
    body.appendChild(elem);
    elem.setAttribute("class","greeting");
    elem.innerHTML = "WELCOME TO THE OFFICIAL VIRUS SPREAD SIMULATOR";
    var div = document.createElement("div");
    body.appendChild(div);
    div.setAttribute("class","arrow-container");
    var elem = document.createElement("span");
    div.appendChild(elem);
    elem.innerHTML = "1/6";
    var elem = document.createElement("img");
    div.appendChild(elem);
    elem.setAttribute("class","arrow-right");
    elem.setAttribute("src","assets/arrow_right.svg");
    var footer = document.createElement("footer");
    body.appendChild(footer);
    var div = document.createElement("div");
    footer.appendChild(div);
    div.setAttribute("class","separator");
    var elem = document.createElement("h4");
    div.appendChild(elem);
    elem.innerHTML = "OFFICIALLY SUPPORTED BY";
    var elem = document.createElement("img");
    footer.appendChild(elem);
    elem.setAttribute("src","assets/logo_rki.png");
    var elem = document.createElement("img");
    footer.appendChild(elem);
    elem.setAttribute("src","assets/logo_bmg.png");
    var div = document.createElement("div");
    footer.appendChild(div);
    div.setAttribute("class","separator footer");
    var elem = document.createElement("h4");
    div.appendChild(elem);
    elem.innerHTML = "www.example.com";

}

function showLayout-info(){
    var body = document.body;
    body.innerHTML="";
    var header = document.createElement("header"); 
    body.appendChild(header);
    var elem = document.createElement("img");
    header.appendChild(elem);
    elem.setAttribute("class","logo");
    elem.setAttribute("src","assets/logo_simvsvirus.svg");
    var elem = document.createElement("img");
    header.appendChild(elem);
    elem.setAttribute("class","topOption");
    elem.setAttribute("src","assets/share-24px.svg");
    
}

window.addEventListener("load", showLayout);