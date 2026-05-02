(function () {
  var boot = document.getElementById("boot");
  if (boot) {
    window.setTimeout(function () {
      boot.classList.add("done");
    }, 1200);
  }

  function setScrollPadding() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var h = Math.ceil(header.getBoundingClientRect().height) + 12;
    document.documentElement.style.scrollPaddingTop = h + "px";
    document.querySelectorAll(".page-section").forEach(function (sec) {
      sec.style.scrollMarginTop = h + "px";
    });
  }

  var navLinks = document.querySelectorAll(".site-nav a[data-nav]");
  var sections = document.querySelectorAll("main.page-main section[id]");

  function navIdForScroll() {
    var header = document.querySelector(".site-header");
    var threshold = header ? header.getBoundingClientRect().height + 24 : 80;
    var current = "home";
    sections.forEach(function (sec) {
      var top = sec.getBoundingClientRect().top;
      if (top <= threshold) current = sec.id;
    });
    return current;
  }

  function updateNavActive() {
    var id = navIdForScroll();
    navLinks.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("data-nav") === id);
    });
  }

  if (sections.length && navLinks.length) {
    setScrollPadding();
    window.addEventListener("resize", setScrollPadding);
    window.addEventListener("scroll", updateNavActive, { passive: true });
    updateNavActive();

    window.addEventListener("hashchange", updateNavActive);

    window.addEventListener("load", function () {
      if (window.location.hash) {
        var el = document.querySelector(window.location.hash);
        if (el && el.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setScrollPadding();
      updateNavActive();
    });
  }
})();
