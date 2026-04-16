document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".tag-filter");
  var cards = document.querySelectorAll(".catalog-card");
  var empty = document.getElementById("catalog-empty");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var tag = this.getAttribute("data-tag");

      // Toggle active
      buttons.forEach(function (b) { b.classList.remove("active"); });
      this.classList.add("active");

      var visibleCount = 0;
      cards.forEach(function (card) {
        var cardTags = card.getAttribute("data-tags") || "";
        if (tag === "all" || cardTags.indexOf(tag) !== -1) {
          card.classList.remove("hidden");
          visibleCount++;
        } else {
          card.classList.add("hidden");
        }
      });

      if (empty) {
        empty.style.display = visibleCount === 0 ? "block" : "none";
      }
    });
  });
});
