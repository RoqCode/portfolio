$(document).ready(function () {
  imageSwap();
  console.log("ready");
});

$(window).resize(function () {
  imageSwap();
});

function imageSwap() {
  if (window.innerWidth <= 768) {
    console.log("small window");
    //hero gradient
    $("#hero").css("background-image", "url('src/img/gradient2_m.jpg')");
    //HMB
    $("#hmb-img").attr("src", "src/img/HMB_TitleCard_m.jpg");
    //anners Web
    $("#anners-web-img").attr("src", "src/img/anners_web_titlecard_m.jpg");
    //Reworks
    $("#webseiten-img").attr("src", "src/img/webseiten_title_m.jpg");
    //BHV malt
    $("#bhv-malt-img").attr("src", "src/img/bhv_card_m.jpg");
    //anners Magazin
    $("#anners-mag-img").attr("src", "src/img/anners_magazin_titlecard_m.jpg");
    //posters
    $("#poster-img").attr("src", "src/img/poster_card_m.jpg");
    //Kulinarium
    $("#kulinarium-img").attr("src", "src/img/kulinarium_title_m.jpg");
    //Creative Coding Video
    $(".creative-video").attr("preload", "none");
    $(".creative-video").attr("poster", "src/img/CreativeCodings/poster_m.jpg");
  } else if (window.innerWidth > 768) {
    //hero gradient
    $("#hero").css("background-image", "url('src/img/gradient2.jpg')");
    //HMB
    $("#hmb-img").attr("src", "src/img/HMB_TitleCard.jpg");
    //anners Web
    $("#anners-web-img").attr("src", "src/img/anners_web_titlecard.jpg");
    //BHV malt
    $("#bhv-malt-img").attr("src", "src/img/bhv_card.jpg");
    //Reworks
    $("#webseiten-img").attr("src", "src/img/webseiten_title_m.jpg");
    //anners Magazin
    $("#anners-mag-img").attr("src", "src/img/anners_magazin_titlecard.jpg");
    //posters
    $("#poster-img").attr("src", "src/img/poster_card.jpg");
    //Kulinarium
    $("#kulinarium-img").attr("src", "src/img/kulinarium_title.jpg");
    //Creative Coding Video
    $(".creative-video").attr("autoplay", true);
  } else {
    //hero gradient
    $("#hero").css("background-image", "url('src/img/gradient2.jpg')");
    //HMB
    $("#hmb-img").attr("src", "src/img/HMB_TitleCard.jpg");
    //anners Web
    $("#anners-web-img").attr("src", "src/img/anners_web_titlecard.jpg");
    //BHV malt
    $("#bhv-malt-img").attr("src", "src/img/bhv_card.jpg");
    //Reworks
    $("#webseiten-img").attr("src", "src/img/webseiten_title_m.jpg");
    //anners Magazin
    $("#anners-mag-img").attr("src", "src/img/anners_magazin_titlecard.jpg");
    //posters
    $("#poster-img").attr("src", "src/img/poster_card.jpg");
    //Kulinarium
    $("#kulinarium-img").attr("src", "src/img/kulinarium_title.jpg");
    //Creative Coding Video
    $(".creative-video").attr("autoplay", true);
  }
}