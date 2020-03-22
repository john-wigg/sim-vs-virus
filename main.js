"use strict";
(function () {

    function onLoad() {
        console.log("onLoad()");
        customElements.define('curve-view', Curve);
        customElements.define('sim-view', SimulationView);
        showLayoutWelcome();
    }

    window.addEventListener("load", onLoad);
})();