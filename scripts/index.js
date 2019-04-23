let button = $(".button");

button.click(openPanel);

function openPanel() {
  this.classList.toggle("active");
  let panel = this.nextElementSibling;

  if (panel.style.opacity === "1") {
    panel.style.opacity = "0";
    $('.panel').css('transition-delay', '0s');
    $('.button').css('transition-delay', '1s');
  } else {
    panel.style.opacity = "1";
    $('.panel').css('transition-delay', '1s');
    $('.button').css('transition-delay', '0s');
  }

}
