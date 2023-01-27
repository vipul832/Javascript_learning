let text = "This is sample text";
let l = text.length; // using length method you can find the length of text including wide space.
console.log(l);

//extracting string parts

//slice(start,end)
//substring(start,end)
//substr(start,length)

let slice = text.slice(0, 6);
console.log(slice); //this

let subs = text.substring(5, 12);
console.log(subs); // is samp

let subs2 = text.substr(5, 12);
console.log(subs2); //this is samp

//replace

let text2 = "This is a Company text Company"; //replace only first word only and case -sensitive
let newtext = text2.replace("company", "Dog");
console.log(newtext);

//so we can use /i and /g for global match

let newstext = text2.replace(/company/i, "Dog");
console.log("Insensitive:", newstext);

let new2 = text2.replace(/Company/g, "Dog");
console.log("global:", new2);

// upper case and lower case

let toup = text.toUpperCase();
console.log(toup);

let tolow = text.toLocaleLowerCase();
console.log(tolow);

//trim  use to remove wide space in text

let samptext = "           hello           ";
let t1 = samptext.trim();
console.log(t1);

//trimStart() remove wide space from start.

//trimEnd() remove wide space from end.

//padding string
let pad1 = "5";
console.log("Padding start:", pad1.padStart(4, "0"));
console.log("Padding end:", pad1.padEnd(4, "0"));

//charCodeAt() use to display unicode of character at a specified index in a string

console.log(text.charCodeAt(0));

//charAt() return the character at a specified index in a string.

console.log(text.charAt(1));

//split() use convert string to array

let a = "1,2,3,4";
let b = a.split(",");
console.log(b);
console.log(typeof b);
