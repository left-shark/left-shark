// http://left-shark.github.io/left-shark/left-shark.gif
(function() {
    var allElements = document.querySelectorAll('*');

    requestAnimationFrame(function loop(t) {
        var alpha = 1;
        document.body.style.background = 'rgba(189, 239, 255, ' + alpha + ')';

        wave1.style.left = 100 + 'px';
        wave2.style.right = 200 + 'px';
        wave2.style.left = 300 + 'px';

        requestAnimationFrame(loop);
    });

    var wave1 = document.createElement('div');
    var wave2 = document.createElement('div');
    var wave3 = document.createElement('div');
    (function insertWaves() {
        wave1.classList.add('wave1');
        wave2.classList.add('wave2');
        wave3.classList.add('wave3');

        document.body.appendChild(wave1);
        document.body.appendChild(wave2);
        document.body.appendChild(wave3);
    }());


    (function insertWavesStyle() {
        var tag = document.createElement('style');
        tag.appendChild(document.createTextNode(tag.cssText));
        document.head.appendChild(tag);
    }());



    var container = document.createElement('div');
    container.innerHTML = '<div style="opacity: 0;"><iframe src="https://youtube.com/embed/MAtCSio876c?autoplay=1&controls=0&showinfo=0&autohide=1"></iframe></div>';
    document.body.appendChild(container);

    return true;
}());
