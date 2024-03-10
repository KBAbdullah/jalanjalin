// SETTING NAVBAR
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Add click event listener to each nav link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Remove border bottom from all links
      navLinks.forEach(function (link) {
        link.classList.remove(
          "md:border-b-5",
          "border-b-4",
          "border-greyishBlue"
        );
      });

      // Add border bottom to clicked link
      link.classList.add("md:border-b-5", "border-b-4", "border-greyishBlue");
    });
  });
});

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add a class to trigger the transition
      entry.target.classList.add("opacity-100");
    } else {
      // Remove the class if not intersecting
      entry.target.classList.remove("opacity-100");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin
  threshold: 0.5, // Trigger when 50% of the element is visible
});

const greetingElement = document.getElementById("greeting");
observer.observe(greetingElement);
