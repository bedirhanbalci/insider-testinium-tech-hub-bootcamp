/*  jQuery Temel Söz Dizimi

jQuery, JavaScript kütüphanesi olarak bilinir ve yazılım geliştiricilerin JavaScript kodlarını daha az ve daha basit yazmasını sağlar. jQuery'nin temel söz dizimi şöyle özetlenebilir:

- Bir HTML elementini seçmek için $ işareti kullanılır.
- jQuery kodu, genellikle document ready fonksiyonu içinde yazılır. */

/* $(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });
}); */

// -----------------------------------

/* jQuery Seçiciler ve Olaylar

jQuery'de HTML elemanlarını seçmek ve bu elemanlara olaylar atamak oldukça kolaydır. Seçiciler CSS seçicilere benzer ve olaylar JavaScript olaylarına benzer.

Seçiciler:
$("p"): Tüm <p> elementlerini seçer.
$("#id") : Belirli bir ID'ye sahip elementi seçer.
$(".class") : Belirli bir sınıfa sahip elementleri seçer.

Olaylar:
click(): Tıklama olayını dinler.
mouseover(): Mouse üzerine geldiğinde.
mouseout(): Mouse çıktığında. */

/* $(document).ready(function () {
  $("#hideBtn").click(function () {
    $(".message").hide();
  });

  $("#showBtn").click(function () {
    $(".message").show();
  });

  $("p").mouseover(function () {
    $(this).css("color", "red");
  });

  $("p").mouseout(function () {
    $(this).css("color", "black");
  });
}); */

// -----------------------------------

/* jQuery ile HTML Manipülasyonu

jQuery ile HTML içeriğini değiştirmek, yeni elementler eklemek veya silmek oldukça basittir.

İçerik Manipülasyonu:
text(): Elementin sadece metin içeriğini değiştirmek için kullanılır.
html(): Elementin HTML içeriğini değiştirmek için kullanılır.
val(): Form elementlerinin değerini almak veya değiştirmek için kullanılır.

Element Manipülasyonu:
append(): Seçilen elementin sonuna yeni içerik ekler.
prepend(): Seçilen elementin başına yeni içerik ekler.
remove(): Seçilen elementleri kaldırır.
empty(): Seçilen elementlerin içeriğini temizler. */

/* $(document).ready(function () {
  $("#changeText").click(function () {
    $("#content").text("Yeni metin içeriği");
  });

  $("#addHtml").click(function () {
    $("#content").html("<strong>Yeni HTML içeriği.</strong>");
  });

  $("#appendText").click(function () {
    $("#content").append(" Eklenmiş metin.");
  });

  $("#prependText").click(function () {
    $("#content").prepend("Önce eklenmiş metin. ");
  });

  $("#removeContent").click(function () {
    $("#content").remove();
  });
}); */

/* jQuery Animasyon ve Efektler

jQuery, sayfa elemanları üzerinde animasyonlar ve efektler oluşturmak için birçok yöntem sunar.

Temel Animasyonlar:
hide(): Elemanı gizler.
show(): Gizli elemanı gösterir.
toggle(): Elemanın gösterilip gizlenmesini değiştirir.
fadeIn(): Elemanı yavaş yavaş gösterir.
fadeOut(): Elemanı yavaş yavaş gizler.
slideUp(): Elemanı yukarı kaydırarak gizler.
slideDown(): Elemanı aşağı kaydırarak gösterir. */

/* $(document).ready(function () {
  $("#fadeIn").click(function () {
    $(".box").fadeIn();
  });

  $("#fadeOut").click(function () {
    $(".box").fadeOut();
  });

  $("#slideToggle").click(function () {
    $(".box").slideToggle();
  });
}); */

// -----------------------------------

/* AJAX Kullanarak jQuery

AJAX, sayfanın yenilenmeden sunucu ile veri alışverişi yapmasını sağlar. jQuery, AJAX işlemlerini kolaylaştırmak için çeşitli metodlar sunar.

$.ajax(): Genel AJAX çağrısı.
$.get(): GET isteği gönderir.
$.post(): POST isteği gönderir. */

/* $(document).ready(function () {
  $("#getData").click(function () {
    $.get("data.txt", function (data) {
      $("#content").text(data);
    });
  });

  $("#postData").click(function () {
    $.post("server.php", { name: "Bedirhan", age: 25 }, function (response) {
      $("#content").text(response);
    });
  });
}); */

// -----------------------------------

/* jQuery Eklentiler ve Yardımcı Araçlar

jQuery eklentileri, mevcut jQuery fonksiyonelliğini genişletir. jQuery UI ve diğer eklentiler bu alanda popülerdir. */

/* $(document).ready(function () {
  $("#draggable").draggable();
});
 */
