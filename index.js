// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
 //   console.log(`I'm ${age} years old. Happy birthday to me!`);
//}
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts); 

*/

const newArray = [];

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        //let x = console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        //debugger;
    }
    return newArray;
}

function countDown(posInt) {
    while (posInt > -1) {
      console.log(posInt);
      posInt--;
    }
    return posInt;
  }