(function() {
  var PATH_TO_VIDEO = "http://www.youtube.com/v/MAtCSio876c?version=3&autoplay=1&loop=1&playlist=MAtCSio876c";

  (function playVideo() {
    var video = document.createElement("iframe");
    video.src = PATH_TO_VIDEO;
    video.height = 400;
    video.width = 400;
    video.autoplay = true;
    document.body.appendChild(video);
  }());

  var allElements = document.querySelectorAll("body *");
  for (var i = 0; i < allElements.length; i++) {
    var element = allElements[i];

    setTimeout(function(element) {
      element.classList.add("wobble");
      element.classList.add("left-shark-start");
      element.classList.add("left-shark-slow");
    }.bind(null, element), 100 + Math.random()*1000);
  }

  return true;
})();
