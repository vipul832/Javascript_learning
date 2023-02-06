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

// Promise method

const promiseOne = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("promiseOne Resolved !...");
      reject("promiseOne Reject !...");
    }, 500);
  });
const promiseTwo = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("promiseTwo Resolved !...");
      reject("promiseTwo Reject !...");
    }, 600);
  });
const promiseThree = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promiseThree Resolve !...");
      // reject("promiseThree Reject !...");
    }, 700);
  });

const fetchData = async () => {
  try {
    // let startTime = new Date();

    // const responseOne = await promiseOne();
    // const responseTwo = await promiseTwo();
    // const responseThree = await promiseThree();

    // let endTime = new Date();

    // console.log(
    //   "Promises:",
    //   responseOne,
    //   responseTwo,
    //   responseThree,
    //   endTime - startTime
    // );

    //#1  promise.all()   return  a single promise then it return an array with fulfillment values.It rejects when any of the
    // input's promises rejects, with this first rejection reason.

    // let startTime = new Date();

    // const response = await Promise.all([
    //   promiseOne(),
    //   promiseTwo(),
    //   promiseThree(),
    // ]);

    // let endTime = new Date();

    // console.log("Repsonse from promise.all:", response, endTime - startTime);

    //#2  promise.allsettled     //return array of object with status and value or reason for each promise

    // let startTime = new Date();

    // const response = await Promise.allSettled([
    //   promiseOne(),
    //   promiseTwo(),
    //   promiseThree(),
    // ]);

    // let endTime = new Date();

    // console.log("Repsonse from promise.all:", response, endTime - startTime);

    // for (const status1 of response) {
    //   if (status1.status === "rejected") {
    //     console.log(status1.reason);
    //   } else {
    //     console.log(status1.value);
    //   }
    // }

    //#3 promise.race()    //return a result of a promise whose take time less

    // let startTime = new Date();

    // const response = await Promise.race([
    //   promiseOne(),
    //   promiseTwo(),
    //   promiseThree(),
    // ]);

    // let endTime = new Date();

    // console.log("Repsonse from promise.all:", response, endTime - startTime);

    //#4 promise.any()      //return first filled value in return promises

    let startTime = new Date();

    const response = await Promise.any([
      promiseOne(),
      promiseTwo(),
      promiseThree(),
    ]);

    let endTime = new Date();

    console.log("Repsonse from promise.all:", response, endTime - startTime);
  } catch (error) {
    console.log("error:", error);
  }
};

fetchData();
