// Code your solutions in this file
function writeCards(array, surprise) {
    let arr8 = [];
    for (let i = 0; i < array.length; i++) {
      arr8.push(`Thank you, ${array[i]}, for the wonderful ${surprise} gift!`);
    }
    return arr8;
  }
  console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "birthday"));
  
  function countDown(x) {
    while (X >= 0) {
      console.log(X--);
    }
  }
  countDown(6);