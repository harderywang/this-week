var backtop = document.querySelector(".backtop");
var load = document.querySelector(".loading");
setTimeout(function () {
  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 1200) {
      backtop.style.display = "block";
    } else {
      backtop.style.display = "none";
    }
  });
}, 100);
backtop.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
window.onload = function () {
  setTimeout(function () {
    load.style.display = 'none';
  }, 1000);
};
