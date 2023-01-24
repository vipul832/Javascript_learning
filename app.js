// Async

//before using async and await

function checkname(name) {
  return new Promise((resolve, reject) => {
    console.log("making Request");
    if (name == "vipul") {
      resolve("Access Allowed");
    } else {
      reject("Access Denied");
    }
  });
}

function processrequest(res) {
  return new Promise((resolve, reject) => {
    console.log("process Response");
    resolve("Welcome to Page");
  });
}

// checkname("vipul")
//   .then((a) => {
//     console.log("response received");
//     return processrequest(a);
//   })
//   .then((pro) => {
//     console.log(pro);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// using async and await

async function login() {
  try {
    const checkuser = await checkname("vipul");
    console.log("response received");
    const loadpage = await processrequest(checkuser);
    console.log(loadpage);
  } catch (err) {
    console.log(err);
  }
}

login();
