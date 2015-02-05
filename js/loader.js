(function() {
    var scriptTag = document.createElement('script');
    scriptTag.src = 'SCRIPT_HERE';
    document.body.appendChild(scriptTag);

    var linkTag = document.createElement('link');
    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('type', 'text/css');
    linkTag.setAttribute('href', 'CSS_HERE');
    document.head.appendChild(linkTag);
    return true;
}());
