window.onload = function () {
    document.getElementById("timer").onclick = rudyTimer.timerPlay;
}

var rudyTimer = (function () {
    "use strict";
    let timer = null;
    let rudy = function () {
        document.getElementById("output").innerText += "Rudy!";
    };
    function delayMsg2() {
        if (timer == null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
    return {
        timerPlay: function () {
            delayMsg2();
        },
    };
})();