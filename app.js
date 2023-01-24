//Closure Function

function cloth() {
  let clo = "Shirt";

  //if you buy shirt you need pants right
  function pant(pa) {
    console.log(clo); //here it will take the latest value of variable in closure
    return "With " + clo + " buy " + pa + " also.";
  }

  clo = "T-shirt";
  return pant;
}

let clo1 = cloth();

//now i can use pant() out side it parent function

console.log(clo1("pant"));
console.log(clo1);
