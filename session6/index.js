document.getElementById("element").innerHTML = "Element Content Changed";

document.getElementsByTagName("img").src =
  "https://image.useinsider.com/ingbank/defaultImageLibrary/cropped-1707839307.png";

// document.getElementById("dummy-text").style.color = "#234fd3";
// document.getElementById("dummy-text").style.border = "2px solid black";
// document.getElementById("dummy-text").style.padding = "8px";
// document.getElementById("dummy-text").style.borderRadius = "8px";

document.getElementById("dummy-text").classList.add("styled-text");

const elements = document.getElementsByClassName("test");
if (elements.length > 0) {
  elements[0].classList.add("colorBlue");
}

const elements2 = document.getElementsByClassName("test");
if (elements2.length > 0) {
  elements[0].classList.add("colorBlue");
  elements[0].classList.toggle("border");
}

function myFunction() {
  document.getElementById("myCheck").click();
}

const dummy = document.createElement("div");
dummy.innerText = "Hello Bedirhan!";
dummy.classList = "deneme";
document.body.appendChild(dummy);
