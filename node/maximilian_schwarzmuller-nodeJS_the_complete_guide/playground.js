const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolve - Done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timeout is run!");
  fetchData()
    .then(text => {
      console.log("text");

      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log("text2");

      console.log(text2);
    });
}, 2000);

console.log("Hello!");
console.log("Hi. I am after Hello");

let person = {
  name: "Paraskevas",
  surname: "Apostolopoulos",
  greet() {
    return `Hello, I am ${this.name}`;
  }
};

let { name } = person;
