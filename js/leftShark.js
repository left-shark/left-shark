(function() {
  document.body.style.margin = "0";

  var PATH_TO_VIDEO = "https://www.youtube.com/embed/WmcWZ2Bzoho?autoplay=1&loop=1";

  var allElements = document.querySelectorAll("body *");
  for (var i = 0; i < allElements.length; i++) {
    var element = allElements[i];
    setTimeout(function(element) {
      element.classList.add("animated");
      element.classList.add("infinite");
      element.classList.add("swing");
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
      var scale = Math.random();
      video.style.transform = "translateX(" + x + "px) translateY(" + y + "px) scale(" + scale + ")";
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
    img.src = "http://i.imgur.com/c9AnBzU.gif";
    (function moveShark() {
      var x = ~~((window.innerWidth)*Math.random());
      var y = ~~((window.innerHeight)*Math.random());
      var z = -~~(Math.random()*500);
      img.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
      img.style.WebkitAnimationDuration = "5s";
      img.style.animationDuration = "5s";
      setTimeout(moveShark, 4000);
    }());
    document.body.appendChild(img);
  }

  var i = 10;
  while (i--) {
    setTimeout(injectShark, i*100);
  }


  (function injectWave() {
    var img = document.createElement("img");
    img.setAttribute("class", "waves");
    img.src = "http://www.skylinesup.com/assets/images/_bgs/xbg_waves.png.pagespeed.ic.pGjXSUvPiA.png";
    document.body.appendChild(img);
  }());

  (function injectFin() {
    var img = document.createElement("img");
    img.setAttribute("class", "fin");
    img.src = "http://images.clipartpanda.com/fin-clipart-blue-fin.svg";
    document.body.appendChild(img);
    var x = 0;
    requestAnimationFrame(function loop() {
      if (x > window.innerWidth) x = 0;
      img.style.transform = "translateX(-" + (x++) + "px)";
      requestAnimationFrame(loop);
    });
  }());

  (function injectPalm() {
    var img = document.createElement("img");
    img.setAttribute("class", "palm");
    img.src = "http://www.dzzyn.com/wp-content/uploads/2015/01/20-Free-Tree-PNG-Images-jamaicanroyalpalm01L.png";
    document.body.appendChild(img);
    img.onload = function() {
      setTimeout(function() {
        img.style.transform = "translateY(0)";
      }, 10);
    };
  }());

  return true;
})();
