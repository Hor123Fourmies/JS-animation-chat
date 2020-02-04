var catEl = document.getElementById("cat");

var startTime = new Date().getTime();

var walkTheCat = function() {
    var currTime = new Date().getTime();
    var secondsElapsed = ((currTime - startTime)/1000);
    var gauche = (100 + secondsElapsed * 50);
    catEl.style.left = gauche + "px";
    if (gauche < 800) {
        window.requestAnimationFrame(walkTheCat);
    }

};
walkTheCat();

//

var catEl = document.getElementById("cat");

var startTime = new Date().getTime();

var walkTheCat = function() {
    var currTime = new Date().getTime();
    var secondsElapsed = ((currTime - startTime)/1000)*2;
    var newLeft = secondsElapsed+ "px";
    catEl.style.left = newLeft;
    window.requestAnimationFrame(walkTheCat);
};
walkTheCat();
