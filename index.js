// http://left-shark.github.io/left-shark/left-shark.gif
(function() {
    var allElements = document.querySelectorAll('*');

    requestAnimationFrame(function loop(t) {
        document.body.style.background = 'rgba(0, 0, 255, ' + (t%1000)/1000 + ')';

        requestAnimationFrame(loop);
    });

    var html = ('<div style="opacity: 0;">' +
        '<iframe src="https://youtube.com/embed/MAtCSio876c?autoplay=1&controls=0&showinfo=0&autohide=1">' +
        '</iframe>' +
    '</div>');

    var container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);

    return true;
}());
