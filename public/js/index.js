$(document).ready(function(){
  var minWidth = 992;

  var heroElement = document.getElementById("hero");

  function checkViewPort() {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (vw < minWidth) {
      heroElement.innerHTML = '<h1 id="head-title" class="text-center">Build Your Own Rod Combo</h1><p id="head-text" class="text-center">Choose from your favorite products</p><a href="/builder"><button id="head-btn" class="justify-content-center">Build Now</button></a><div class="row justify-content-center"><img src="/img/parallax/trans_reel.png"></div>';
      $("section").css("min-height", "55vh");
      $("section").css("height", "auto");
    }
/*
    else if (vw > minWidth) {
      heroElement.innerHTML = '<h1 id="head-title" class="text-center">Build Your Own Rod Combo</h1><p id="head-text" class="text-center">Choose from your favorite products</p><a href="/builder"><button id="head-btn" class="justify-content-center">Build Now</button></a><img src="/img/parallax/trans_reel.png" class="reel rellax" data-rellax-speed="3"><img src="/img/parallax/trans-rod.png" class="rod rellax" data-rellax-speed="-3"><img src="/img/parallax/trans-line2.png" class="line rellax" data-rellax-speed="-2">';

    }
    */
  }
  checkViewPort();

  $(window).resize(function() {
    checkViewPort();
  });

});
