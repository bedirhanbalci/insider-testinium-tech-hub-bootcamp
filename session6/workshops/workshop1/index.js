const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.setAttribute("data-active", "false");

const title = document.createElement("h1");
title.textContent = "Attribute Örneği";

const paragraph = document.createElement("p");
paragraph.textContent = "Boolean Attribute";

const button = document.createElement("button");
button.textContent = "Toggle Active";

button.addEventListener("click", () => {
  const isActive = wrapper.getAttribute("data-active") === "true";
  if (isActive) {
    wrapper.classList.remove("wrapper-active");
    wrapper.setAttribute("data-active", "false");
    console.log("attribute değeri false");
  } else {
    wrapper.classList.add("wrapper-active");
    wrapper.setAttribute("data-active", "true");
  }
});

wrapper.appendChild(title);
wrapper.appendChild(paragraph);
wrapper.appendChild(button);

document.getElementById("wrapper").appendChild(wrapper);
