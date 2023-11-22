document.body.insertAdjacentHTML(
  'afterbegin',
  `
  <div class="transition-wrap">
    <div class="transition transition-1 transition-function is-active"></div>
    <div class="transition transition-2 transition-function is-active"></div>
    <div class="transition transition-3 transition-function is-active"></div>
    <div class="transition transition-4 transition-function is-active"></div>
  </div>
`
);

const transitions = document.querySelectorAll('.transition');
const anchors = document.querySelectorAll('.transition-a');

window.addEventListener('load', function () {
  transitions.forEach((transition, i) => {
    transition.addEventListener('transitionend', function () {
      this.classList.remove('transition-function');
      this.style.top = '100vh';
    });

    setTimeout(() => {
      transition.classList.remove('is-active');
    }, Math.floor(Math.random() * 500 + 300));
  });

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let target = this.href;

      if (
        target.includes('index.html') &&
        window.location.href.includes('index.html')
      ) {
        window.location.href = target;
      } else {
        transitions.forEach((transition, i) => {
          setTimeout(() => {
            transition.classList.add('transition-function');
            transition.classList.add('is-active');
          }, Math.floor(Math.random() * 500 + 300));
        });

        setTimeout(() => {
          window.location.href = target;
        }, 1800);
      }
    });
  });
});
