document.addEventListener('DOMContentLoaded', function () {
  imageSwap();
});

window.addEventListener('resize', function () {
  imageSwap();
});

function imageSwap() {
  var width = window.innerWidth;

  if (width <= 768) {
    document.getElementById('hero').style.backgroundImage =
      "url('src/img/gradient2_m.jpg')";

    document.querySelectorAll('.creative-video').forEach(function (video) {
      video.removeAttribute('autoplay');
      video.setAttribute('preload', 'none');
      video.setAttribute('poster', 'src/img/bachelor/logo_variation.png');
    });
  } else if (width > 768) {
    document.getElementById('hero').style.backgroundImage =
      "url('src/img/gradient2.jpg')";

    document.querySelectorAll('.creative-video').forEach(function (video) {
      video.setAttribute('autoplay', true);
    });
  }
}
