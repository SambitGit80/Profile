(function () {
  var boot = document.getElementById("boot");
  if (boot) {
    window.setTimeout(function () {
      boot.classList.add("done");
    }, 1200);
  }

  var page = document.body.getAttribute("data-page");
  if (!page) return;
  document.querySelectorAll(".site-nav a[data-nav]").forEach(function (a) {
    if (a.getAttribute("data-nav") === page) {
      a.classList.add("is-active");
    }
  });
})();
