(function() {
  var PATH_TO_VIDEO = "http://www.youtube.com/v/MAtCSio876c?version=3&autoplay=1&loop=1&playlist=MAtCSio876c";

  var allElements = document.querySelectorAll("body *");
  for (var i = 0; i < allElements.length; i++) {
    var element = allElements[i];

    setTimeout(function(element) {
      element.setAttribute("class", "animated inifinite swing");
      element.style.WebkitAnimationDuration = "5s";
      element.style.animationDuration = "5s";
    }.bind(null, element), Math.random()*1000);
  }

  (function playVideo() {
    var video = document.createElement("iframe");
    video.setAttribute("class", "left-shark-video");
    setTimeout(function moveVideo() {
      var x = ~~((window.innerWidth - 400)*Math.random());
      var y = ~~((window.innerHeight - 400)*Math.random());
      video.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      setTimeout(moveVideo, 4000);
    }, 100);
    video.src = PATH_TO_VIDEO;
    video.height = 400;
    video.width = 400;
    video.autoplay = true;
    document.body.appendChild(video);
  }());

  return true;
})();
