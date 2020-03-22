"use strict";
(function () {

    function onLoad() {
        console.log("onLoad()");
        var page_handler = new PageHandler();
        page_handler.showLayoutWelcome();
    }

    window.addEventListener("load", onLoad);
})();