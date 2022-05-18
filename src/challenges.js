// Desafio 1
function compareTrue(x, y) {
  if (x && y) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  let calculo = base * (altura / 2);
  return calculo;
}

// Desafio 3
function splitSentence(str) {
  let arr = str.split(' ');

  return arr;
}

// Desafio 4
function concatName(strArray) {
  let lastName = `${strArray.slice(-1)}, ${strArray[0]}`;

  return lastName;
}
// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  return wins + ties;
}

// Desafio 6
function highestCount(tamanhoArr) {
  let maiorNumero = 0;

  for (let index in tamanhoArr) {
    if (tamanhoArr[index] > maiorNumero) {
      maiorNumero = tamanhoArr[index];
    }
  }

  let indexMaiorNumero = maiorNumero;

  let vezesAparece = 0;

  for (let index2 = 0; index2 < tamanhoArr.length; index2 += 1) {
    if (indexMaiorNumero === tamanhoArr[index2]) {
      vezesAparece += 1;
    } else if (tamanhoArr[index2] < 0) {
      return 1;
    }
  }
  return vezesAparece;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat2 > distanceCat1) {
    return 'cat1';
  } if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numberArr) {
  let strArr = [];

  for (let index = 0; index < numberArr.length; index += 1) {
    if (numberArr[index] % 5 === 0 && numberArr[index] % 3 === 0) {
      strArr.push('fizzBuzz');
    } else if (numberArr[index] % 5 === 0) {
      strArr.push('buzz');
    } else if (numberArr[index] % 3 === 0) {
      strArr.push('fizz');
    } else {
      strArr.push('bug!');
    }
  }
  return strArr;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
