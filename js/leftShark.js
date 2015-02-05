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
    (function moveVideo() {
      var x = ~~((window.innerWidth - 400)*Math.random());
      var y = ~~((window.innerHeight - 400)*Math.random());
      video.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      setTimeout(moveVideo, 4000);
    }());
    video.src = PATH_TO_VIDEO;
    video.height = 400;
    video.width = 400;
    video.autoplay = true;
    document.body.appendChild(video);
  }());

  function injectShark() {
    var img = document.createElement("img");
    img.setAttribute("class", "left-shark-gif");
    img.src = "http://localhost:1337/assets/left-shark.gif";
    (function moveShark() {
      var x = ~~((window.innerWidth - 400)*Math.random());
      var y = ~~((window.innerHeight - 400)*Math.random());
      var z = ~~(Math.random()*500);
      var scale = Math.random();
      img.style.transform = "scale(" + scale + ") translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
      setTimeout(moveShark, 4000);
    }());
    img.style.position = "fixed";
    document.body.appendChild(img);
  }

  var i = 10;
  while (i--) {
    injectShark();
  }

  return true;
})();
