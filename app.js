const pro = fetch("https://jsonplaceholder.typicode.com/users");

console.log(pro); //It show promise

//This show the promiseState and PromiseResults where our data is store
data = pro
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
