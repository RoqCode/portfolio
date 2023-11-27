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
    document.getElementById('hmb-img').src = 'src/img/HMB_TitleCard_m.jpg';
    document.getElementById('anners-web-img').src =
      'src/img/anners_magazin_titlecard_m.jpg';
    document.getElementById('hansa-beton-img').src =
      'src/img/hansa/hansa-beton_cover.jpg';
    document.getElementById('doering-img').src =
      'src/img/doering/doering_cover.jpg';
    document.getElementById('adpiraten-img').src =
      'src/img/adpiraten/adpiraten_cover.jpg';
    document.getElementById('girschner-img').src =
      'src/img/girschner/girschner_cover.jpg';

    document.querySelectorAll('.creative-video').forEach(function (video) {
      video.removeAttribute('autoplay');
      video.setAttribute('preload', 'none');
      video.setAttribute('poster', 'src/img/bachelor/logo_variation.png');
    });
  } else if (width > 768) {
    document.getElementById('hero').style.backgroundImage =
      "url('src/img/gradient2.jpg')";
    document.getElementById('hmb-img').src = 'src/img/HMB_TitleCard.jpg';
    document.getElementById('anners-web-img').src =
      'src/img/anners_magazin_titlecard.jpg';
    document.getElementById('hansa-beton-img').src =
      'src/img/hansa/hansa-beton_cover.jpg';
    document.getElementById('doering-img').src =
      'src/img/doering/doering_cover.jpg';
    document.getElementById('adpiraten-img').src =
      'src/img/adpiraten/adpiraten_cover.jpg';
    document.getElementById('girschner-img').src =
      'src/img/girschner/girschner_cover.jpg';

    document.querySelectorAll('.creative-video').forEach(function (video) {
      video.setAttribute('autoplay', true);
    });
  }
}
