// ----- DOM ile Elemanların Seçilmesi -----

// getElementById: Belirli bir ID'ye sahip elemanı seçer.
// getElementsByClassName: Belirli bir sınıfa sahip olan tüm elemanları seçer.
// getElementsByTagName: Belirli bir etiket adıyla tüm elemanları seçer.
// querySelector: CSS seçicilerini kullanarak ilk eşleşen elemanı seçer.
// querySelectorAll: CSS seçicilerini kullanarak tüm eşleşen elemanları seçer

const header = document.getElementById("header");

const buttons = document.getElementsByClassName("btn");

const paragraphs = document.getElementsByTagName("p");

const firstButton = document.querySelector(".btn");

const allButtons = document.querySelectorAll(".btn");

// ----- Elemanların Değiştirilmesi -----

// textContent: Elemanın metin içeriğini değiştirir.
// innerHTML: Elemanın iç HTML içeriğini değiştirir.
// setAttribute: Elemanın bir özelliğini değiştirir.

header.textContent = "Yeni Başlık";

header.innerHTML = "<h1>Yeni Başlık</h1>";

header.setAttribute("class", "new-class");

// ----- Düğümlerin Oluşturulması -----

// createElement, appendChild

const newParagraph = document.createElement("p");
newParagraph.textContent = "Bu yeni bir paragraftır.";

document.body.appendChild(newParagraph);

// ----- Düğümlerin Kaldırılması -----

// removeChild, remove

const elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);

const anotherElement = document.querySelector("removeMe");
anotherElement.remove();

// ----- Düğümlerin Güncellenmesi -----

// textContent, innerHTML veya setAttribute

const paragraphToUpdate = document.getElementById("updateMe");
paragraphToUpdate.textContent = "Güncellenmiş metin";

// ----- Elemanların Stillerinin Değiştirilmesi -----

header.style.backgroundColor = "blue";
header.style.color = "white";
header.style.fontSize = "24px";

// ----- Olay Dinleyicileri Ekleme -----

const button = document.querySelector(".btn");
button.addEventListener("click", function () {
  alert("Düğmeye tıklandı!");
});

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form gönderildi!");
});

// ----- Düğümleri Kopyalama -----

const originalElement = document.getElementById("copyMe");
const copyElement = originalElement.cloneNode(true);

document.body.appendChild(copyElement);

// -----  Düğümlerin Yerini Değiştirme -----

const elementToMove = document.getElementById("moveMe");
const newParent = document.getElementById("newParent");
newParent.appendChild(elementToMove);

// ----- Elemanların Sınıfını Değiştirme -----

const element = document.querySelector(".someClass");
element.classList.add("newClass");

element.classList.remove("oldClass");

const hasClass = element.classList.contains("newClass");
console.log(hasClass);

element.classList.toggle("toggleClass");

// ----- HTML İçeriğini Güncelleme -----

const container = document.getElementById("container");
container.innerHTML = `
<h2>Başlık</h2>
<p>Bu dinamik olarak eklenmiş bir paragraftır.</p>
`;

// ----- Form Verilerini Alma -----

const form2 = document.querySelector("form");
const input = form2.querySelector('input[name="username"]');
const username = input.value;
console.log("Kullanıcı Adı:", username);

// ----- Dış Veri ile İçeriği Güncelleme -----

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    const output = document.getElementById("output");
    output.textContent = `API'den alınan veri: ${data.value}`;
  })
  .catch(error => console.error("Hata:", error));
