(function() {
    var rand = ~~(Math.random()*10000000);
    var scriptTag = document.createElement('script');
    scriptTag.src = 'https://left-shark.github.io/left-shark/js/leftShark.js?' + rand;
    document.body.appendChild(scriptTag);

    var linkTag = document.createElement('link');
    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('type', 'text/css');
    linkTag.setAttribute('href', 'https://left-shark.github.io/left-shark/css/leftShark.css?' + rand);
    document.head.appendChild(linkTag);
    return true;
}());
