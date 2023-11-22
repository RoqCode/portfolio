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
      'src/img/anners_web_titlecard_m.jpg';
    document.getElementById('webseiten-img').src =
      'src/img/webseiten_title_m.jpg';
    document.getElementById('bhv-malt-img').src = 'src/img/bhv_card_m.jpg';
    document.getElementById('anners-mag-img').src =
      'src/img/anners_magazin_titlecard_m.jpg';
    document.getElementById('poster-img').src = 'src/img/poster_card_m.jpg';
    document.getElementById('kulinarium-img').src =
      'src/img/kulinarium_title_m.jpg';

    document.querySelectorAll('.creative-video').forEach(function (video) {
      video.removeAttribute('autoplay');
      video.setAttribute('preload', 'none');
      video.setAttribute('poster', 'src/img/CreativeCodings/poster_m.jpg');
    });
  } else if (width > 768) {
    document.getElementById('hero').style.backgroundImage =
      "url('src/img/gradient2.jpg')";
    document.getElementById('hmb-img').src = 'src/img/HMB_TitleCard.jpg';
    document.getElementById('anners-web-img').src =
      'src/img/anners_web_titlecard.jpg';
    document.getElementById('webseiten-img').src =
      'src/img/webseiten_title.jpg';
    document.getElementById('bhv-malt-img').src = 'src/img/bhv_card.jpg';
    document.getElementById('anners-mag-img').src =
      'src/img/anners_magazin_titlecard.jpg';
    document.getElementById('poster-img').src = 'src/img/poster_card.jpg';
    document.getElementById('kulinarium-img').src =
      'src/img/kulinarium_title.jpg';

    document.querySelectorAll('.creative-video').forEach(function (video) {
      video.setAttribute('autoplay', true);
    });
  }
}
