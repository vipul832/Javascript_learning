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
