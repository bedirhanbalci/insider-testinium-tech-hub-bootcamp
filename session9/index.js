/* Asynchronous JavaScript: Promises, async/await

Promises: JavaScript'te bir Promise, asenkron bir işlemin tamamlanacağını veya başarısız olacağını temsil eden bir nesnedir. Promise'ler üç durumda olabilir: pending (beklemede), fulfilled (tamamlanmış), veya rejected (reddedilmiş).

async/await: async ve await anahtar kelimeleri, Promise tabanlı asenkron işlemleri daha okunabilir ve yönetilebilir hale getirir. async bir fonksiyonun asenkron olduğunu belirtir ve await anahtar kelimesi bir Promise'in çözülmesini bekler. */

/* document.getElementById("promiseBtn").addEventListener("click", () => {
  examplePromise()
    .then(result => {
      document.getElementById("output").innerText = result;
    })
    .catch(error => {
      document.getElementById("output").innerText = error;
    });
});

document.getElementById("asyncAwaitBtn").addEventListener("click", async () => {
  try {
    const result = await exampleAsyncAwait();
    document.getElementById("output").innerText = result;
  } catch (error) {
    document.getElementById("output").innerText = error;
  }
});

function examplePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise sonucu: Başarılı!");
    }, 2000);
  });
}

async function exampleAsyncAwait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("async/await sonucu: Başarılı!");
    }, 2000);
  });
} */

// -------------------------------------

/* ES6: Arrow Functions, Spread/Rest Operator, Destructuring, Template Literals

Arrow Functions: => sembolüyle tanımlanan fonksiyonlar, kısa ve öz yazım sağlar. this bağlamı, tanımlandıkları yere bağlı olarak korunur.

Spread/Rest Operator: ... operatörü, bir dizi veya nesneyi genişletmek veya parametre olarak almak için kullanılır.

Destructuring: Nesne veya dizi içerisindeki öğeleri kolayca değişkenlere ayırmayı sağlar.

Template Literals: `` (backticks) içinde kullanılan değişkenlerin doğrudan yazılmasını sağlar. */

/* document.getElementById("arrowFuncBtn").addEventListener("click", () => {
  const result = arrowFunctionExample();
  document.getElementById("output").innerText = result;
});

document.getElementById("spreadRestBtn").addEventListener("click", () => {
  const result = spreadRestExample();
  document.getElementById("output").innerText = result;
});

document.getElementById("destructuringBtn").addEventListener("click", () => {
  const result = destructuringExample();
  document.getElementById("output").innerText = result;
});

document.getElementById("templateLiteralsBtn").addEventListener("click", () => {
  const result = templateLiteralsExample();
  document.getElementById("output").innerText = result;
});

const arrowFunctionExample = () => {
  return "Bu bir arrow functions'dır!";
};

const spreadRestExample = () => {
  const arr = [1, 2, 3];
  const newArr = [...arr, 4, 5, 6];
  return `Yeni dizi: ${newArr}`;
};

const destructuringExample = () => {
  const person = { name: "Bedirhan", age: "25" };
  const { name, age } = person;
  return `İsim: ${name}, Yaş: ${age}`;
};

const templateLiteralsExample = () => {
  const name = "Bedirhan";
  const age = 25;
  return `Merhaba, benim adım ${name} ve ben ${age} yaşındayım.`;
};
 */

// -------------------------------------

/* "this" in JavaScript;

this: JavaScript'te this anahtar kelimesi, fonksiyonun çağrıldığı bağlama (context) bağlı olarak farklı nesneleri referans eder. Fonksiyonlar, metodlar veya arrow fonksiyonları içinde kullanıldığında farklılık gösterebilir. */

/* document.getElementById("thisBtn").addEventListener("click", () => {
  const person = {
    name: "Bedirhan",
    greet: function () {
      return `Merhaba, benim adım ${this.name}.`;
    },
  };
  document.getElementById("output").innerText = person.greet();
});
 */

// -------------------------------------

/* Closure ve Yüksek Mertebe Fonksiyonlar

Closure: JavaScript'te closure, bir fonksiyonun, kendi kapsamı dışındaki bir değişkene erişebilmesi anlamına gelir. Bir fonksiyon başka bir fonksiyonun içinde tanımlanmışsa ve bu içteki fonksiyon, dıştaki fonksiyonun değişkenlerine erişebiliyorsa, bu bir closure'dır.

Yüksek Mertebe Fonksiyonlar: Yüksek mertebe fonksiyonlar, başka fonksiyonları parametre olarak alan veya fonksiyon döndüren fonksiyonlardır. */

/* document.getElementById("closureBtn").addEventListener("click", () => {
  const result = closureExample();
  document.getElementById("output").innerText = result();
});

document.getElementById("higherOrderFuncBtn").addEventListener("click", () => {
  const result = higherOrderFunctionExample([1, 2, 3, 4, 5]);
  document.getElementById("output").innerText = result;
});

function closureExample() {
  let count = 0;
  return function () {
    count++;
    return `Sayı: ${count}`;
  };
}

function higherOrderFunctionExample(arr) {
  const doubled = arr.map(num => num * 2);
  return `İki katına çıkarılmış dizi: ${doubled}`;
}
 */
