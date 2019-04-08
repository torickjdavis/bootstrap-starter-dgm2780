// Custom JS here
const mediumBreakPoint = 768; // bootstrap md break point

document.addEventListener("DOMContentLoaded", () => {
  let isPhone = (window.innerWidth < mediumBreakPoint);
  if (!isPhone) {
    let backgroundIconImages = document.querySelectorAll(".bg-icon-image");
    for (let icon of backgroundIconImages) {
      let url = icon.getAttribute("data-image");
      if (url) {
        icon.style.backgroundImage = `url(${url})`;
      }
    }
  }
});
