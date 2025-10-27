let fruits = ["mango", "banana", "apple", "coconut"];

//print the array
console.log(fruits);

//print a specific element in the array
console.log(fruits[1]);

//print number of element in the array
console.log(fruits.length);

//print all elements inside the array
for(let i= 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//print all elements inside the array in reverse
for(let i= fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

//print all element inside the array with for each loop
for(let fruit of fruits){
    console.log(fruit);
}

//print index of an element in array
console.log(fruits.indexOf("coconut"));

//print the array in alphabetically
console.log(fruits.sort());

//print the array in reverse
console.log(fruits.sort().reverse());

//add an element into the array
console.log(fruits.push("lemon"));
console.log(fruits);

//remove the last element of the array
console.log(fruits.pop());
console.log(fruits);

//add an element from beginning of the array
console.log(fruits.unshift("papaya"));
console.log(fruits);

//remove the element from beginning of the array
console.log(fruits.shift());
console.log(fruits);