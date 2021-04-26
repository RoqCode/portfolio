$("body").prepend(`
    <div class="transition-wrap">
    <div class="transition transition-1 transition-function is-active">
    </div>
    <div class="transition transition-2 transition-function is-active"></div>
    <div class="transition transition-3 transition-function is-active"></div>
    <div class="transition transition-4 transition-function is-active"></div>
  </div>
`);

const transitions = $(".transition");
const anchors = $(".transition-a");

$(window).on("load", function () {
  console.log("load");

  for (let i = 0; i < transitions.length; i++) {
    $(transitions[i]).one("transitionend", function () {
      $(this).removeClass("transition-function");
      $(this).css("top", "100vh");
    });

    setTimeout(function () {
      $(transitions[i]).removeClass("is-active");
    }, Math.floor(Math.random() * 500 + 300));
  }

  for (let i = 0; i < anchors.length; i++) {
    $(anchors[i]).click((e) => {
      e.preventDefault();
      let target = e.currentTarget.href;
      console.log(target, window.location.href);
      if (
        target.includes("index.html") &&
        window.location.href.includes("index.html")
      ) {
        window.location.href = target;
      } else {
        for (let i = 0; i < transitions.length; i++) {
          setTimeout(function () {
            $(transitions[i]).addClass("transition-function");
            $(transitions[i]).addClass("is-active");
          }, Math.floor(Math.random() * 500 + 300));
        }

        setTimeout(function () {
          window.location.href = target;
        }, 1800);
      }
    });
  }
});
