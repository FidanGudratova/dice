 function rollDice () {
   
    const oneResult = document.querySelector('.dot');
    const resultOne = Math.floor(Math.random() * 6) + 1;
    oneResult.innerText = resultOne;

    const twoResult = document.querySelector('.dot-two');
    const resultTwo = Math.floor(Math.random() * 6 + 1);
    twoResult.innerText = resultTwo;

    const sumResult = document.querySelector('.diceResult');
    sumResult.innerText = resultTwo + resultOne;
}


  