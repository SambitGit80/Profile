(function () {
  var btn = document.getElementById("btnPrint");
  if (!btn) return;
  btn.addEventListener("click", function () {
    window.print();
  });
})();
