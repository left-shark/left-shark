// http://left-shark.github.io/left-shark/left-shark.gif
(function() {
    var allElements = document.querySelectorAll('*');

    requestAnimationFrame(function loop(t) {
        // var alpha = (t%1000)/1000;
        var alpha = 1;

        document.body.style.background = 'rgba(189, 239, 255, ' + alpha + ')';

        wave1.style.transform = 'translateX(' + t%1000 + 'px)';
        wave2.style.transform = 'translateX(' + t%2000 + 'px)';
        wave2.style.transform = 'translateX(' + -t%3000 + 'px)';

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
        tag.cssText = ".wave1{" +
        "  background:#177b8f;" +
        "  height:300px;" +
        "  position:absolute;" +
        "  width:250%;" +
        "  bottom:0;" +
        "  left:-20%;" +
        "  z-index:1;" +
        "  " +
        "  -ms-animation: background 3s infinite alternate;" +
        "    -moz-animation: background 3s infinite alternate;" +
        "    -webkit-animation: background 3s infinite alternate;" +
        "    -o-animation: background 3s infinite alternate;" +
        "    animation: background 3s infinite alternate;" +
        "}" +
        ".wave1:after{" +
        "  content:'';" +
        "  width:300px;" +
        "  height:100px;" +
        "  background:#BFEFFF;" +
        "  position:absolute;" +
        "  border-radius:50%;" +
        "  top:-50px;" +
        "  box-shadow:" +
        "    300px 0 0 0 #BFEFFF," +
        "    600px 0 0 0 #BFEFFF," +
        "    900px 0 0 0 #BFEFFF," +
        "    1200px 0 0 0 #BFEFFF," +
        "    1500px 0 0 0 #BFEFFF," +
        "    1800px 0 0 0 #BFEFFF" +
        "    ;" +
        "}" +
        ".wave2{" +
        "  background:#1D9AB3;" +
        "  height:200px;" +
        "  position:absolute;" +
        "  width:250%;" +
        "  bottom:0;" +
        "  left:-20%;" +
        "  z-index:10;" +
        "  " +
        "  -ms-animation: middle 2s infinite alternate;" +
        "    -moz-animation: middle 2s infinite alternate;" +
        "    -webkit-animation: middle 2s infinite alternate;" +
        "    -o-animation: middle 2s infinite alternate;" +
        "    animation: middle 2s infinite alternate;" +
        "}" +
        ".wave2:after{" +
        "  content:'';" +
        "  width:200px;" +
        "  height:100px;" +
        "  background:#177b8f;" +
        "  position:absolute;" +
        "  border-radius:50%;" +
        "  top:-50px;" +
        "  left:-50px;" +
        "  box-shadow:" +
        "    200px 0 0 0 #177b8f," +
        "    400px 0 0 0 #177b8f," +
        "    600px 0 0 0 #177b8f," +
        "    800px 0 0 0 #177b8f," +
        "    1000px 0 0 0 #177b8f," +
        "    1200px 0 0 0 #177b8f," +
        "    1400px 0 0 0 #177b8f," +
        "    1600px 0 0 0 #177b8f," +
        "    1800px 0 0 0 #177b8f" +
        "    ;" +
        "}" +
        ".wave3{" +
        "  background:#4aaec2;" +
        "  height:100px;" +
        "  width:250%;" +
        "  bottom:0;" +
        "  left:-20%;" +
        "  position:absolute;" +
        "  z-index:11;" +
        "  " +
        "  -ms-animation: first 1.5s infinite alternate;" +
        "    -moz-animation: first 1.5s infinite alternate;" +
        "    -webkit-animation: first 1.5s infinite alternate;" +
        "    -o-animation: first 1.5s infinite alternate;" +
        "    animation: first 1.5s infinite alternate;" +
        "}" +
        ".wave3:after{" +
        "  content:'';" +
        "  width:150px;" +
        "  height:100px;" +
        "  background:#1D9AB3;" +
        "  position:absolute;" +
        "  border-radius:50%;" +
        "  top:-50px;" +
        "  left:-70px;" +
        "  box-shadow:" +
        "    150px 0 0 0 #1D9AB3," +
        "    300px 0 0 0 #1D9AB3," +
        "    450px 0 0 0 #1D9AB3," +
        "    600px 0 0 0 #1D9AB3," +
        "    750px 0 0 0 #1D9AB3," +
        "    900px 0 0 0 #1D9AB3," +
        "    1050px 0 0 0 #1D9AB3," +
        "    1200px 0 0 0 #1D9AB3," +
        "    1350px 0 0 0 #1D9AB3," +
        "    1500px 0 0 0 #1D9AB3," +
        "    1650px 0 0 0 #1D9AB3," +
        "    1800px 0 0 0 #1D9AB3," +
        "    1950px 0 0 0 #1D9AB3" +
        "    ;" +
        "}";

        tag.appendChild(document.createTextNode(tag.cssText));
        document.head.appendChild(tag);
    }());





    var html = ('<div style="opacity: 0;">' +
        '<iframe src="https://youtube.com/embed/MAtCSio876c?autoplay=1&controls=0&showinfo=0&autohide=1">' +
        '</iframe>' +
    '</div>');

    var container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);

    return true;
}());
