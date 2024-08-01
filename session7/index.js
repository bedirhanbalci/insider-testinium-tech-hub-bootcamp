// Events and Event Handlers, AJAX: Asynchronous JavaScript and XML

// Mouse Events

// click: Bir elemente tıklandığında tetiklenir.
// dblclick: Bir elemente çift tıklandığında tetiklenir.
// mousedown: Bir mouse tuşu element üzerinde basıldığında tetiklenir.
// mouseup: Bir mouse tuşu element üzerinde bırakıldığında tetiklenir.
// mousemove: Mouse işaretçisi element üzerinde hareket ettiğinde tetiklenir.
// mouseover: Mouse işaretçisi elementin üzerine geldiğinde tetiklenir.
// mouseout: Mouse işaretçisi elementin üzerinden çıktığında tetiklenir.

// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("myButton");

//   button.addEventListener("click", () => {
//     console.log("Button clicked!");
//   });

//   button.addEventListener("dblclick", () => {
//     console.log("Button double-clicked!");
//   });

//   button.addEventListener("mousedown", () => {
//     console.log("Mouse button pressed on button!");
//   });

//   button.addEventListener("mouseup", () => {
//     console.log("Mouse button released on button!");
//   });

//   button.addEventListener("mousemove", () => {
//     console.log("Mouse is moving over the button!");
//   });

//   button.addEventListener("mouseover", () => {
//     console.log("Mouse is over the button!");
//   });

//   button.addEventListener("mouseout", () => {
//     console.log("Mouse has left the button!");
//   });
// });

// ---------------------------------------------

// Keyboard Events

// keydown: Bir tuşa basıldığında tetiklenir.
// keyup: Bir tuş serbest bırakıldığında tetiklenir.
// event.key: Basılan tuşun değerini döner (örneğin, 'a', 'Enter', 'ArrowUp').
// event.code: Basılan tuşun kodunu döner (örneğin, 'KeyA', 'Enter', 'ArrowUp').

// document.addEventListener("DOMContentLoaded", () => {
//   const inputField = document.getElementById("inputField");
//   const output = document.getElementById("output");

//   inputField.addEventListener("keydown", event => {
//     output.textContent = `Tuşa basıldı: ${event.key} (Kod: ${event.code})`;
//     console.log(`Tuşa basıldı: ${event.key} (Kod: ${event.code})`);
//   });

//   inputField.addEventListener("keyup", event => {
//     output.textContent = `Tuş serbest bırakıldı: ${event.key} (Kod: ${event.code})`;
//     console.log(`Tuş serbest bırakıldı: ${event.key} (Kod: ${event.code})`);
//   });
// });

// ---------------------------------------------

/* Form Events

// submit: Bir form gönderildiğinde tetiklenir.
// change: Bir input, select veya textarea elemanının değeri değiştiğinde tetiklenir.
// input: Bir input, select veya textarea elemanının değeri değiştiğinde tetiklenir.
// focus: Bir eleman odaklandığında tetiklenir.
// blur: Bir elemanın odağı kaybettiğinde tetiklenir.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const output = document.getElementById("output");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderSelect = document.getElementById("gender");

  form.addEventListener("submit", event => {
    event.preventDefault();
    output.textContent = "Form gönderildi!";
    console.log("Form gönderildi!");
  });

  genderSelect.addEventListener("change", event => {
    output.textContent = `Cinsiyet değiştirildi: ${event.target.value}`;
    console.log(`Cinsiyet değiştirildi: ${event.target.value}`);
  });

  nameInput.addEventListener("input", event => {
    output.textContent = `İsim değeri değişti: ${event.target.value}`;
    console.log(`İsim değeri değişti: ${event.target.value}`);
  });

  ageInput.addEventListener("input", event => {
    output.textContent = `Yaş değeri değişti: ${event.target.value}`;
    console.log(`Yaş değeri değişti: ${event.target.value}`);
  });

  nameInput.addEventListener("focus", () => {
    output.textContent = "İsim alanına odaklanıldı!";
    console.log("İsim alanına odaklanıldı!");
  });

  ageInput.addEventListener("focus", () => {
    output.textContent = "Yaş alanına odaklanıldı!";
    console.log("Yaş alanına odaklanıldı!");
  });

  nameInput.addEventListener("blur", () => {
    output.textContent = "İsim alanının odağı kaybedildi!";
    console.log("İsim alanının odağı kaybedildi!");
  });

  ageInput.addEventListener("blur", () => {
    output.textContent = "Yaş alanının odağı kaybedildi!";
    console.log("Yaş alanının odağı kaybedildi!");
  });
});
 */

// ---------------------------------------------

/* Document/Window Events

// load: Tüm sayfa, stil dosyaları ve resimler gibi tüm bağımlı kaynaklar dahil yüklendiğinde tetiklenir.
// resize: Belge görünümü (pencere) yeniden boyutlandırıldığında tetiklenir.
// scroll: Belge görünümü veya bir eleman kaydırıldığında tetiklenir.
// mousewheel: Mouse tekerleği kaydırıldığında tetiklenir.
// unload: Kullanıcı sayfadan giderken tetiklenir. (beforeunload)

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  window.addEventListener("load", () => {
    console.log("Sayfa tamamen yüklendi.");
    output.textContent = "Sayfa tamamen yüklendi.";
  });

  window.addEventListener("resize", () => {
    console.log("Pencere boyutlandırıldı");
    output.textContent = `Pencere boyutu: ${window.innerWidth} x ${window.innerHeight}`;
  });

  window.addEventListener("scroll", () => {
    console.log("Sayfa kaydırıldı.");
    output.textContent = `Sayfa kaydırıldı. Scroll pozisyonu: ${window.scrollY}`;
  });

  window.addEventListener("mousewheel", event => {
    console.log("Mouse tekerleği kaydırıldı.");
    output.textContent = `Mouse tekerleği kaydırıldı. Delta: ${event.deltaY}`;
  });

  window.addEventListener("beforeunload", event => {
    console.log("Sayfadan çıkılmak üzere.");
    event.preventDefault();
    event.returnValue = "";
  });
}); */

// ---------------------------------------------

// Touch Events

// touchstart: Dokunmatik yüzeye bir dokunma noktası yerleştirildiğinde tetiklenir.
// touchmove: Dokunmatik yüzeyde bir dokunma noktası hareket ettirildiğinde tetiklenir.
// touchend: Dokunmatik yüzeyden bir dokunma noktası kaldırıldığında tetiklenir.
// touchcancel: Bir dokunma olayı iptal edildiğinde tetiklenir.

/* document.addEventListener("DOMContentLoaded", () => {
  const touchArea = document.getElementById("touchArea");
  const output = document.getElementById("output");

  touchArea.addEventListener("touchstart", event => {
    const touch = event.touches[0];
    output.textContent = `touchStart - X: ${touch.clientX}, Y: ${touch.clientY}`;
    console.log(`touchStart - X: ${touch.clientX}, Y: ${touch.clientY}`);
  });

  touchArea.addEventListener("touchmove", event => {
    const touch = event.touches[0];
    output.textContent = `touchmove - X: ${touch.clientX}, Y: ${touch.clientY}`;
    console.log(`touchmove - X: ${touch.clientX}, Y: ${touch.clientY}`);
  });

  touchArea.addEventListener("touchend", event => {
    output.textContent = "touchend";
    console.log("touchend");
  });

  touchArea.addEventListener("touchcancel", event => {
    output.textContent = "touchcancel";
    console.log("touchcancel");
  });
}); */

// ---------------------------------------------

// Clipboard Events

// copy: Kullanıcı bir kopyalama işlemi başlattığında tetiklenir.
// cut: Kullanıcı bir kesme işlemi başlattığında tetiklenir.
// paste: Kullanıcı bir yapıştırma işlemi başlattığında tetiklenir.

/* document.addEventListener("DOMContentLoaded", () => {
  const textArea = document.getElementById("textArea");
  const output = document.getElementById("output");

  textArea.addEventListener("copy", () => {
    const selectedText = window.getSelection().toString();
    output.textContent = `Kopyalandı: ${selectedText}`;
    console.log(`Kopyalandı: ${selectedText}`);
  });

  textArea.addEventListener("cut", () => {
    const selectedText = window.getSelection().toString();
    output.textContent = `Kesildi: ${selectedText}`;
    console.log(`Kesildi: ${selectedText}`);
  });

  textArea.addEventListener("paste", event => {
    const pastedText = event.clipboardData.getData("text");
    output.textContent = `Yapıştırıldı: ${pastedText}`;
    console.log(`Yapıştırıldı: ${pastedText}`);
  });
});
 */

// ---------------------------------------------

// Drag and Drop Events

// dragstart: Kullanıcı bir öğeyi sürüklemeye başladığında tetiklenir.
// drag: Öğeyi sürüklerken sürekli olarak tetiklenir.
// dragend: Sürükleme işlemi tamamlandığında tetiklenir.
// dragenter: Sürüklenen öğe bir bırakma hedefine girdiğinde tetiklenir.draggable
// dragover: Sürüklenen öğe bir bırakma hedefinin üstünde olduğunda tetiklenir.
// dragleave: Sürüklenen öğe bir bırakma hedefinden ayrıldığında tetiklenir.
// drop: Sürüklenen öğe bir bırakma hedefine bırakıldığında tetiklenir.

/* document.addEventListener("DOMContentLoaded", () => {
  const draggable = document.getElementById("draggable");
  const dropZone = document.getElementById("dropZone");
  const output = document.getElementById("output");

  draggable.addEventListener("dragstart", event => {
    output.textContent = "Sürükleme başladı.";
    console.log("Sürükleme başladı.");
    event.dataTransfer.setData("text/plain", draggable.id);
  });

  draggable.addEventListener("drag", () => {
    output.textContent = "Sürükleniyor...";
    console.log("Sürükleniyor...");
  });

  draggable.addEventListener("dragend", () => {
    output.textContent = "Sürükleme tamamlandı.";
    console.log("Sürükleme tamamlandı.");
  });

  dropZone.addEventListener("dragenter", event => {
    event.preventDefault();
    output.textContent = "Bırakma alanına girdi.";
    console.log("Bırakma alanına girdi.");
    dropZone.style.backgroundColor = "lightgreen";
  });

  dropZone.addEventListener("dragover", event => {
    event.preventDefault();
    output.textContent = "Bırakma alanının üzerinde.";
    console.log("Bırakma alanının üzerinde.");
  });

  dropZone.addEventListener("dragleave", () => {
    output.textContent = "Bırakma alanından çıktı.";
    console.log("Bırakma alanından çıktı.");
    dropZone.style.backgroundColor = "lightblue";
  });

  dropZone.addEventListener("drop", event => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const droppedElement = document.getElementById(data);
    dropZone.appendChild(droppedElement);
    output.textContent = "Öğe bırakıldı.";
    console.log("Öğe bırakıldı.");
    dropZone.style.backgroundColor = "lightblue";
  });
});
 */

// ---------------------------------------------

/* AJAX Nedir?
AJAX (Asynchronous JavaScript and XML), web sayfalarının sunucuyla arka planda veri alışverişi yapmasını ve sayfa yeniden yüklenmeden güncellenmesini sağlayan bir tekniktir. AJAX, kullanıcı deneyimini iyileştirir çünkü sayfanın tamamını yeniden yüklemek yerine yalnızca gerekli veriler güncellenir. */

/* AJAX GET

document.addEventListener("DOMContentLoaded", () => {
  const loadDataBtn = document.getElementById("loadDataBtn");
  const output = document.getElementById("output");

  loadDataBtn.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        output.textContent = `Title: ${response.title}\nBody: ${response.body}`;
      }
    };

    xhr.send();
  });
}); */

/* AJAX POST

document.addEventListener("DOMContentLoaded", () => {
  const sendDataBtn = document.getElementById("sendDataBtn");
  const outout = document.getElementById("output");

  sendDataBtn.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 201) {
        const response = JSON.parse(xhr.responseText);
        outout.textContent = `ID: ${response.id}\nTitle: ${response.title}\nBody: ${response.body}`;
      }
    };

    const data = JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    });

    xhr.send(data);
  });
}); */

// ---------------------------------------------

/* Fetch API Nedir?
Fetch API, modern web tarayıcılarında asenkron veri alışverişi yapmak için kullanılan bir JavaScript arayüzüdür. XMLHttpRequest'in daha basit ve güçlü bir alternatifidir. Fetch API, Promise tabanlıdır ve bu sayede asenkron işlemleri yönetmek daha kolaydır. */

/* Fetch GET

document.addEventListener("DOMContentLoaded", () => {
  const loadDataBtn = document.getElementById("loadDataBtn");
  const output = document.getElementById("output");

  loadDataBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Ağ hatası oldu.");
        }
        return response.json();
      })
      .then(data => {
        output.textContent = `Title: ${data.title}\nBody: ${data.body}`;
      })
      .catch(error => {
        console.error("Hata:", error);
        output.textContent = "Veri yüklenemedi";
      });
  });
}); */

/* Fetch POST

document.addEventListener("DOMContentLoaded", () => {
  const sendDataBtn = document.getElementById("sendDataBtn");
  const output = document.getElementById("output");

  sendDataBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Ağ hatası oldu.");
        }
        return response.json();
      })
      .then(data => {
        output.textContent = `ID: ${data.id}\nTitle: ${data.title}\nBody: ${data.body}`;
      })
      .catch(error => {
        console.error("Hata:", error);
        output.textContent = "Veri gönderilemedi.";
      });
  });
});
 */

// ---------------------------------------------

/* Promise Nedir?
Promise, JavaScript'te asenkron işlemleri yönetmek için kullanılan bir nesnedir. Promise, gelecekte bir değerin mevcut olacağını temsil eder. Promise, üç durumda olabilir:

Pending (Beklemede): İşlem henüz tamamlanmamış.
Fulfilled (Başarılı): İşlem başarıyla tamamlanmış.
Rejected (Başarısız): İşlem başarısız olmuş.
Promise, resolve ve reject işlevleriyle tamamlanır ve then, catch ve finally metodları ile işlenir. */

/* const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("İşlem başarılı!");
    } else {
      reject("İşlem başarısız!");
    }
  }, 1000);
});

myPromise
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("İşlem tamamlandı.");
  }); */

// Promise Kullanım Örnekleri

/* Fetch API Örneği

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("Ağ hatası oldu");
    }
    return response.json();
  })
  .then(data => {
    console.log("Başlık:", data.title);
    console.log("İçerik:", data.body);
  })
  .catch(error => {
    console.error("Hata:", error);
  }); */

// Async/Await Kullanımı
// async ve await anahtar kelimeleri, Promiseları daha okunabilir ve yönetilebilir hale getirir. async fonksiyonları asenkron hale getirir ve await anahtar kelimesi, bir Promise'in çözülmesini bekler.

/* async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("Ağ hatası oldu.");
    }
    const data = await response.json();
    console.log("Başlık:", data.title);
    console.log("İçerik:", data.body);
  } catch (error) {
    console.error("Hata:", error);
  }
}

fetchData(); */
