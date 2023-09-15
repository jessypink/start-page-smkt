var HeaderOptions = document.querySelectorAll('.nav-link');

  HeaderOptions.forEach(function(element, index) {
    element.addEventListener('click', switchPage);
  });

  function switchPage (event) {
    var targetElement = event.target;

    HeaderOptions.forEach(function(element, index) {
      element.classList.remove('active');
    });

    targetElement.classList.add('active');
  }


let buttonTabOne
let buttonTabTwo
goToFirstTab
goToFirstTab

var firstTabjs = document.getElementById('firstTab');
var secTabjs = document.getElementById('secTab');

function goToFirstTab() {
    firstTabjs.style.display='block'
    secTabjs.style.display='none'
  }

function goToSecTab() {
  firstTabjs.style.display='none'
  secTabjs.style.display='block'
  }
