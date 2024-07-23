javascript: (function () {
  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  var selectedText = window.getSelection().toString();
  if (selectedText) {
    var fileName = prompt("Dosya adı:", "file.txt");
    if (fileName) {
      download(fileName, selectedText);
    } else {
      alert("Lütfen metin seçin!");
    }
  }
})();
