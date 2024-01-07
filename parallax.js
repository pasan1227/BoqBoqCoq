document.addEventListener("DOMContentLoaded", () => {
  let text = document.getElementById("text");
  let hero2 = document.getElementById("hero2");
  let hero3 = document.getElementById("hero3");
  let hero4 = document.getElementById("hero4");
  let hero5 = document.getElementById("hero5");
  let hero8 = document.getElementById("hero8");
  let hero9 = document.getElementById("hero9");
  let hero13 = document.getElementById("hero13");
  let hero15 = document.getElementById("hero15");
  let hero14 = document.getElementById("hero14");

  // Define the point where you want to stop and resume the scrolling effect
  let stopScrollingPoint = 300; // Adjust this value according to your needs
  let isParallaxEnabled = true;

  // Function to handle the scroll event
  function handleScroll() {
    if (isParallaxEnabled) {
      let value = window.scrollY;

      // Check if the scroll position has reached the stopScrollingPoint
      if (value >= stopScrollingPoint) {
        isParallaxEnabled = false; // Disable parallax effect
      }

      // Adjust the parallax effect based on the scroll position and window dimensions
      hero8.style.left = value * -2.5 + "px";
      hero8.style.top = value * 0.5 + "px";
      hero9.style.left = value * 0.5 + "px";
      hero2.style.left = value * -0.5 + "px";
      hero13.style.left = value * -2.5 + "px";
      hero13.style.top = value * 2.5 + "px";

      hero14.style.marginTop = value * 3 + "px";
      hero9.style.left = value * 0.5 + "px";
      hero2.style.left = value * -0.5 + "px";
      hero4.style.left = value * -1.5 + "px";
      hero5.style.top = value * -1.5 + "px";
      hero3.style.left = value * 1.5 + "px";
      hero15.style.left = value * 1.5 + "px";
    }
  }

  // Add the initial scroll event listener
  window.addEventListener("scroll", handleScroll);
});
