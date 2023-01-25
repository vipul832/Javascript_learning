//Debouncing

const text = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");

const updatedebouncetext = debounce((text) => {
  debounceText.textContent = text;
}, 3000);

text.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value; //this will send request every single time i do change in text
  updatedebouncetext(e.target.value); // Here if i does not type gap of 3s it will send request and do update
});

function debounce(callbackf, delay) {
  let timer;
  return (...args) => {
    //...args is a any array-like object accessible inside functions that contains the values of the arguments passed to that functions.
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackf(...args);
    }, delay);
  };
}
