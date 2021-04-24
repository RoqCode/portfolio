$("body").prepend(`
    <div id="navBar" class="text white">
    <a class="transition-a" href="index.html">
      <div id="nav-logo">
        <svg
          width="74"
          height="46"
          viewBox="0 0 74 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.25 45.1944H5.40155V36.5561H14.2597V45.1944H19.4113V24.5254H14.2597V32.5354H5.40155V24.5254H0.25V45.1944Z"
            fill="#F6F6F3"
          />
          <path
            d="M27.9614 45.4457C30.7885 45.4457 32.5476 44.2521 33.0187 42.0532H33.0501C33.0501 42.9956 32.9245 44.4091 32.8303 45.1944H37.6049V35.7708C37.6049 31.6245 34.715 29.4256 29.7833 29.4256C25.0715 29.4256 22.3073 31.2789 22.3073 34.4201C22.3073 34.7343 22.3387 35.0798 22.3701 35.3311H26.7678C26.7364 35.017 26.7364 34.7657 26.7364 34.6714C26.7364 33.415 27.7729 32.6611 29.5634 32.6611C31.7623 32.6611 32.8303 33.415 32.8303 35.2997V36.3363H27.7729C23.658 36.3363 21.8361 38.1896 21.8361 40.7339C21.8361 43.8751 24.3491 45.4457 27.9614 45.4457ZM28.9038 42.2103C27.1761 42.2103 26.1395 41.582 26.1395 40.3884C26.1395 39.5089 26.9248 38.912 28.2127 38.912H32.8303V39.2262C32.8303 41.1109 31.3853 42.2103 28.9038 42.2103Z"
            fill="#F6F6F3"
          />
          <path
            d="M45.784 45.4457C48.6111 45.4457 50.3701 44.2521 50.8413 42.0532H50.8727C50.8727 42.9956 50.7471 44.4091 50.6528 45.1944H55.4274V35.7708C55.4274 31.6245 52.5375 29.4256 47.6059 29.4256C42.8941 29.4256 40.1298 31.2789 40.1298 34.4201C40.1298 34.7343 40.1613 35.0798 40.1927 35.3311H44.5903C44.5589 35.017 44.5589 34.7657 44.5589 34.6714C44.5589 33.415 45.5955 32.6611 47.386 32.6611C49.5848 32.6611 50.6528 33.415 50.6528 35.2997V36.3363H45.5955C41.4806 36.3363 39.6587 38.1896 39.6587 40.7339C39.6587 43.8751 42.1716 45.4457 45.784 45.4457ZM46.7263 42.2103C44.9987 42.2103 43.9621 41.582 43.9621 40.3884C43.9621 39.5089 44.7474 38.912 46.0353 38.912H50.6528V39.2262C50.6528 41.1109 49.2079 42.2103 46.7263 42.2103Z"
            fill="#F6F6F3"
          />
          <path
            d="M65.1457 45.4457C70.4543 45.4457 73.25 43.5296 73.25 40.2627C73.25 38.912 72.5275 37.7498 71.5223 37.1844C70.3601 36.5247 69.0094 36.3363 67.0933 36.1478C65.4284 35.9907 64.0463 35.8651 63.261 35.6766C62.3815 35.4567 62.1302 34.9541 62.1302 34.2945C62.1302 33.2265 63.0725 32.504 65.2086 32.504C67.5644 32.504 68.3183 33.3521 68.3497 34.9855H72.5589C72.5589 31.3732 70.2345 29.4256 65.1457 29.4256C60.8423 29.4256 57.387 31.2789 57.387 34.64C57.387 35.9279 57.9838 37.0587 58.8634 37.687C59.8057 38.3466 61.5334 38.6922 63.7636 38.8806C65.3028 39.0063 66.5593 39.1319 67.376 39.3204C68.1927 39.5089 68.4754 39.9486 68.4754 40.514C68.4754 41.6449 67.5959 42.3673 65.1143 42.3673C62.3815 42.3673 61.659 41.425 61.659 39.98H57.387C57.387 43.1212 59.6801 45.4457 65.1457 45.4457Z"
            fill="#F6F6F3"
          />
          <path
            d="M0.25 20.9517H5.40155V12.3135H14.2597V20.9517H19.4113V0.282707H14.2597V8.29274H5.40155V0.282707H0.25V20.9517Z"
            fill="#F6F6F3"
          />
          <path
            d="M27.9614 21.203C30.7885 21.203 32.5476 20.0094 33.0187 17.8105H33.0501C33.0501 18.7529 32.9245 20.1664 32.8303 20.9517H37.6049V11.5282C37.6049 7.38179 34.715 5.18296 29.7833 5.18296C25.0715 5.18296 22.3073 7.03626 22.3073 10.1775C22.3073 10.4916 22.3387 10.8371 22.3701 11.0884H26.7678C26.7364 10.7743 26.7364 10.523 26.7364 10.4287C26.7364 9.17227 27.7729 8.41839 29.5634 8.41839C31.7623 8.41839 32.8303 9.17227 32.8303 11.057V12.0936H27.7729C23.658 12.0936 21.8361 13.9469 21.8361 16.4912C21.8361 19.6324 24.3491 21.203 27.9614 21.203ZM28.9038 17.9676C27.1761 17.9676 26.1395 17.3394 26.1395 16.1457C26.1395 15.2662 26.9248 14.6694 28.2127 14.6694H32.8303V14.9835C32.8303 16.8682 31.3853 17.9676 28.9038 17.9676Z"
            fill="#F6F6F3"
          />
          <path
            d="M39.9414 3.80084H44.7474V0H39.9414V3.80084ZM38.9048 27.5482C42.5486 27.5482 44.716 25.2866 44.716 21.4229V5.43426H39.9414V21.1716C39.9414 22.8364 39.1875 23.8416 37.4598 23.8416C36.7059 23.8416 36.1405 23.7788 35.4495 23.6532V27.2341C35.8264 27.3283 36.8944 27.5482 38.9048 27.5482Z"
            fill="#F6F6F3"
          />
          <path
            d="M55.4377 21.203C60.5579 21.203 63.8875 18.2503 63.8875 13.2244C63.8875 8.16709 60.5579 5.18296 55.4377 5.18296C50.3176 5.18296 46.9879 8.16709 46.9879 13.2244C46.9879 18.2503 50.3176 21.203 55.4377 21.203ZM55.4377 17.5592C53.1133 17.5592 51.7626 15.9572 51.7626 13.2244C51.7626 10.4602 53.1133 8.82674 55.4377 8.82674C57.7622 8.82674 59.1129 10.4602 59.1129 13.2244C59.1129 15.9572 57.7622 17.5592 55.4377 17.5592Z"
            fill="#F6F6F3"
          />
        </svg>
      </div>
      </a>
      <ul>
        <li class="nav-link"><a class="nav-link-a transition-a" href="index.html#Arbeiten">Arbeiten</a></li>
        <li class="nav-link"><a class="nav-link-a transition-a" href="about-me.html">Über mich</a></li>
        <li class="nav-link"><a class="nav-link-a transition-a" href="index.html#Kontakt">Kontakt</a></li>
      </ul>
       <div class="back-to-top">
      <svg
        width="13"
        height="9"
        viewBox="0 0 13 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.2102 9.00031H1.79019C1.45778 9.0008 1.13203 8.90713 0.850638 8.73016C0.56925 8.55318 0.343733 8.30014 0.200191 8.00032C0.0321586 7.64457 -0.0325605 7.24878 0.0134084 6.85805C0.0593773 6.46731 0.214185 6.09735 0.460191 5.79032L4.67019 0.690315C4.83541 0.499685 5.03967 0.346799 5.26914 0.242018C5.49861 0.137236 5.74793 0.0830078 6.00019 0.0830078C6.25245 0.0830078 6.50177 0.137236 6.73124 0.242018C6.96071 0.346799 7.16497 0.499685 7.33019 0.690315L11.5402 5.79032C11.7862 6.09735 11.941 6.46731 11.987 6.85805C12.0329 7.24878 11.9682 7.64457 11.8002 8.00032C11.6566 8.30014 11.4311 8.55318 11.1497 8.73016C10.8684 8.90713 10.5426 9.0008 10.2102 9.00031ZM2.00019 7.00032H9.90019L6.00019 2.18032L2.00019 7.00032Z"
          fill="white"
        />
      </svg>
    </div>
    </div>
`);

let button = $(".back-to-top");
let d = 600;

$(window).scroll(function () {
  if (document.body.scrollTop > d || document.documentElement.scrollTop > d) {
    button.fadeIn("fast");
  } else {
    button.fadeOut("fast");
  }
});

button.click(() => {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
});
