// Understanding Web APIs
// Introduction to XMLHttpRequest and Fetch API
// Utilizing Storage API (localStorage and sessionStorage)
// Introduction to Web Workers
// Understanding the MutationObserver interface

// API Nedir?

// API (Application Programming Interface - Uygulama Programlama Arayüzü), yazılımların birbirleriyle iletişim kurmasını sağlayan bir arayüzdür. API'ler, farklı yazılım bileşenlerinin veya sistemlerinin veri alışverişi yapmasına ve belirli işlevleri yerine getirmesine olanak tanır. API'ler, çeşitli şekillerde olabilir: web tabanlı, işletim sistemi seviyesinde, kütüphane bazında veya uygulama içi API'ler olarak.

// Web API Nedir?

// Web API, internet üzerinden erişilebilen bir API türüdür. Web API'ler, HTTP protokolü kullanarak çalışır ve genellikle RESTful, SOAP ve graphql API standartlarına dayanır. RESTful API'ler, daha hafif ve daha esnek olmaları nedeniyle günümüzde daha yaygın olarak kullanılır.

// RESTful API Nedir?

// Kaynaklar (Resources): RESTful API'ler, veri ve işlevleri kaynaklar olarak tanımlar. Her kaynak, benzersiz bir URL ile temsil edilir.

// HTTP Metotları: Kaynaklar üzerinde işlem yapmak için HTTP metotları (GET, POST, PUT, DELETE) kullanılır.
// GET: Bir kaynağı almak için kullanılır.
// POST: Yeni bir kaynak oluşturmak için kullanılır.
// PUT: Var olan bir kaynağı güncellemek için kullanılır.
// DELETE: Bir kaynağı silmek için kullanılır.

// Stateless (Durumsuz): Her istek bağımsızdır ve gerekli tüm bilgileri içermelidir. Sunucu, istemcinin durumunu tutmaz.

// Uniform Interface (Tekdüze Arayüz): API'nin tüm istek ve yanıtları tutarlı ve standart bir şekilde olmalıdır.

// Cacheable (Önbelleklenebilir): Yanıtlar önbelleğe alınabilir olmalıdır, bu performansı artırır.

// Katmanlı Sistem (Layered System): İstemci ve sunucu arasında çeşitli katmanlar olabilir, ancak istemci yalnızca bir sonraki katmanı görür.

// RESTful API Örneği
// Bir RESTful API'nin nasıl çalıştığını görmek için bir örnek üzerinde çalışalım. Diyelim ki bir kitap mağazası için bir API tasarlıyoruz. Bu API, kitapları temsil eden kaynakları yönetecek.

//  GET - Tüm Kitapları Listele
// http://localhost:8080/api/v1/books

// response
/* [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: 8.99,
  },
]; */

// GET - Belirli Bir Kitabı Al
// http://localhost:8080/api/v1/book/1

// response
/* {
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 10.99
} */

// POST - Yeni Bir Kitap Ekle
// http://localhost:8080/api/v1/books

//body
// {
//   "title": "Brave New World",
//   "author": "Aldous Huxley",
//   "price": 9.99
// }

//response
/* {
  "id": 3,
  "title": "Brave New World",
  "author": "Aldous Huxley",
  "price": 9.99,
  "status": "created"
} */

// PUT - Bir Kitabı Güncelle
// http://localhost:8080/api/v1/books/3

//body
/* {
  "title": "Brave New World",
  "author": "Aldous Huxley",
  "price": 12.99
} */

// response
/* {
  "id": 3,
  "title": "Brave New World",
  "author": "Aldous Huxley",
  "price": 12.99,
  "status": "updated"
} */

// DELETE - Bir Kitabı Sil
// http://localhost:8080/api/v1/books/3

// response
/* {
  "status": "deleted"
} */

// -------------------------------------

// HTTP durum kodları

// 1xx: Bilgi Durum Kodları
// Bu durum kodları, isteğin alındığını ve işlem yapılmakta olduğunu belirtir.

// 2xx: Başarı Durum Kodları
// Bu kodlar, istemcinin isteğinin başarıyla işlendiğini belirtir.

// 200 OK: İstek başarıyla tamamlandı. GET isteği için istenen kaynak döndürülür. POST veya PUT isteği için ise isteğin sonucu hakkında bilgi içerir.
// 201 Created: Yeni bir kaynak oluşturuldu. POST isteği ile birlikte kullanılır.
// 204 No Content: İstek başarıyla tamamlandı, ancak geri dönecek içerik yok. DELETE isteği ile sıkça kullanılır.

// 4xx: İstemci Hatası Durum Kodları
// Bu kodlar, istemcinin isteğinde bir hata olduğunu belirtir.

// 400 Bad Request: İstek, sunucu tarafından anlaşılamıyor veya işlenemiyor. Genellikle yanlış bir isteğin sonucudur.
// 401 Unauthorized: Kimlik doğrulama gerekli ve başarısız oldu veya sağlanmadı.
// 403 Forbidden: İstemci, kaynağa erişim iznine sahip değil.
// 404 Not Found: İstenilen kaynak bulunamadı.

// 5xx: Sunucu Hatası Durum Kodları
// Bu kodlar, sunucunun isteği işleyemediğini belirtir.

// 500 Internal Server Error: Sunucuda genel bir hata oluştu.
// 503 Service Unavailable: Sunucu şu anda istekleri işleyemiyor. Genellikle geçici bir durumdur.

// -------------------------------------

// XMLHttpRequest ve Fetch API

// XMLHttpRequest
// XMLHttpRequest, JavaScript kullanarak sunucuya HTTP isteği göndermek ve sunucudan veri almak için kullanılan eski bir yöntemdir.

/* var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.send(); */

// Fetch API
// Fetch API, XMLHttpRequest'in modern bir alternatifidir. Kullanımı daha basit ve daha okunabilir hale getirilmiştir. Promise tabanlıdır.

/* fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data =>
    console.log(data).catch(error => console.error("Fetch error:", error))
  ); */

// Storage API
// localStorage ve sessionStorage

// Web Storage API, istemcinin tarayıcısında veri depolamak için kullanılan bir yöntemdir. İki ana depolama türü vardır:

// localStorage: Veriler tarayıcı kapatıldıktan sonra bile saklanır.
// sessionStorage: Veriler yalnızca sayfa oturumu süresince saklanır.

// localStorage Kullanımı

/* localStorage.setItem("key", "value");

let value = localStorage.getItem("key");
console.log(value);

localStorage.removeItem("key");

localStorage.clear(); */

// sessionStorage Kullanımı

/* sessionStorage.setItem("key", "value");

let value2 = sessionStorage.getItem("key");
console.log(value2);

sessionStorage.removeItem("key");

sessionStorage.clear(); */

// -------------------------------------

// Web Workers
// Web Workers, ağır işlemleri ana iş parçacığından (main thread) ayırarak arka planda çalıştırmak için kullanılır. Bu sayede uygulamanın performansı artar ve kullanıcı deneyimi iyileşir.

// Web Worker Kullanımı

// worker.js (Worker Dosyası)
/* self.addEventListener("message", function (e) {
  let data = e.data;
  this.self.postMessage("İşlem tamamlandı: " + data);
});
 */
// main.js (Ana JavaScript Dosyası)
/* let worker = new Worker("worker.js");

worker.addEventListener("message", function (e) {
  console.log(e.data);

  worker.postMessage("Ağır işlemi başlat");
});
 */
// -------------------------------------

// MutationObserver
// MutationObserver, DOM'daki değişiklikleri gözlemlemek için kullanılır. Bu sayede DOM değişikliklerine tepki vermek mümkündür.

// MutationObserver Kullanımı

// let targetNode = document.getElementById("target");

// let observerOptions = {
//   childList: true,
//   attribute: true,
//   subtree: true,
// };

// let observer = new MutationObserver(function (mutationList, observer) {
//   for (let mutation of mutationList) {
//     if (mutation.type === "childList") {
//       console.log("Child düğümde değişiklik:", mutation);
//     } else if (mutation.type === "attributes") {
//       console.log("Attribute değişti:", mutation);
//     }
//   }
// });

// observer.observe(targetNode, observerOptions);

// observer.disconnect();

// MutationObserverRecord Nedir?
// MutationObserverRecord, MutationObserver API'si tarafından oluşturulan ve DOM'da gerçekleşen değişiklikleri temsil eden bir nesnedir. Her bir MutationObserverRecord, gözlemlenen bir değişikliği detaylı bir şekilde tanımlar. MutationObserver tarafından döndürülen bir dizi MutationObserverRecord içerir ve her biri belirli bir değişiklik türünü temsil eder.

// MutationObserverRecord Özellikleri
// Her bir MutationObserverRecord nesnesi, aşağıdaki özelliklere sahiptir:

// type: Değişikliğin türünü belirtir (örneğin, "childList", "attributes", veya "characterData").
// target: Değişikliğin gerçekleştiği düğümü belirtir.
// addedNodes: Eklenen düğümleri (NodeList) içerir.
// removedNodes: Kaldırılan düğümleri (NodeList) içerir.
// previousSibling: Önceki kardeş düğümünü belirtir (varsa).
// nextSibling: Sonraki kardeş düğümünü belirtir (varsa).
// attributeName: Değiştirilen özniteliğin adını belirtir (sadece "attributes" türü için).
// attributeNamespace: Değiştirilen özniteliğin ad alanını belirtir (sadece "attributes" türü için).
// oldValue: Değişiklikten önceki değeri belirtir (sadece "characterData" ve "attributes" türleri için).

// Örnek Kullanım
/* let targetNode = document.getElementById("target");

let observerOptions = {
  childList: true,
  attributes: true,
  subtree: true,
  attributeOldValue: true,
  characterData: true,
  characterDataOldValue: true,
};

let observer = new MutationObserver(function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    console.log(`Type: ${mutation.type}`);
    console.log(`Target: `, mutation.target);

    if (mutation.type === "childList") {
      console.log("Added Nodes: ", mutation.addedNodes);
      console.log("Removed Nodes: ", mutation.removedNodes);
    } else if (mutation.type === "attributes") {
      console.log(`Attribute Name: ${mutation.attributeName}`);
      console.log(`Old Value: ${mutation.oldValue}`);
    } else if (mutation.type === "characterData") {
      console.log(`Old Value: ${mutation.oldValue}`);
    }

    console.log("Previous Sibling: ", mutation.previousSibling);
    console.log("Next Sibling: ", mutation.nextSibling);
  }
});

observer.observe(targetNode, observerOptions);

document.getElementById("addChild").addEventListener("click", function () {
  let newChild = document.createElement("p");
  newChild.textContent = "Yeni bir çocuk düğüm eklendi.";
  targetNode.appendChild(newChild);
});

document.getElementById("changeAttr").addEventListener("click", function () {
  targetNode.setAttribute("data-test", "true");
}); */

// Resize Observer
const boxes = document.querySelectorAll(".box");

const myObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const infoEl = entry.target.querySelector(".info");
    const width = Math.floor(entry.contentRect.width);
    const height = Math.floor(entry.contentRect.height);

    const angle = Math.floor((width / 360) * 100);
    const gradient = `linear-gradient(${angle}deg, rgba(0,143,104,1), rgba(250,224,66,1))`;

    entry.target.style.background = gradient;

    infoEl.innerText = `I'm ${width}px and ${height}px tall`;
  }
});

boxes.forEach(box => {
  myObserver.observe(box);
});
