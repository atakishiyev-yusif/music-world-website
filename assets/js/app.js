window.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  window.addEventListener("scroll", AOS.refresh);
  AOS.refresh();
});
