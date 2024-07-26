document.addEventListener("DOMContentLoaded", () => {
  const middleCircle = document.querySelector(".circle.middle");

  middleCircle.addEventListener("mouseover", () => {
    middleCircle.style.backgroundImage =
      'url("https://picsum.photos/id/7/600/300")';
    middleCircle.style.backgroundSize = "cover";
    middleCircle.style.backgroundPosition = "center";
  });

  middleCircle.addEventListener("mouseout", () => {
    middleCircle.style.backgroundImage = "";
    middleCircle.style.backgroundSize = "";
    middleCircle.style.backgroundPosition = "";
  });
});
