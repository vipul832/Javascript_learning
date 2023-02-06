console.log(Error); //return function of error

const a = new Error("This is error");

//throw a; //ut will stop execution code untill this error solve

console.log("here....");

console.log(a.message);

//
function test(num) {
  try {
    if (num > 0) {
      console.log("The number is positive");
    }
    if (num < 0) {
      throw new Error("The number is negative Try again !!");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("This will run even you have error or not.");
  }
}

test(10);

//async error handling

Promise.resolve("Async Fail")
  .then((respon) => {
    throw new Error("#1 Fail error");
    return respon;
  })
  .then((response) => {
    console.log("2", response);
  });

//promise inside promise

Promise.resolve("Async Fail")
  .then((respon) => {
    Promise.resolve()
      .then(() => {
        throw new Error("#2 Fail error");
      })
      .catch(console.log());
    return 5;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("final error", err);
  });

//using async and await

(async function () {
  try {
    await Promise.resolve("NO error");
    await Promise.reject("Error #1");
  } catch (err) {
    console.log(err);
  }
})();

//Create custom Error

class AuthError extends Error {
  constructor(messsage) {
    super(messsage);
    this.name = "Authentication Error";
    this.fruit = "grapes";
  }
}

throw new AuthError("Wrong Password");
