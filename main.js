// Ejercicio 1
const arrNames = [
  { id: 1, name: 'Pepe' },
  { id: 2, name: 'Juan' },
  { id: 3, name: 'Alba' },
  { id: 4, name: 'Toby' },
  { id: 5, name: 'Lala' }
];

for (let i = 0; i < arrNames.length; i++) {

  if (arrNames[i].id === 3) {
    console.log(arrNames[i])
  }

}

//Ejercicio 2

const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test']

for (let i = 0; i < arrDirty.length; i++) {

  if (typeof arrDirty[i] === "number" && !isNaN(arrDirty[i])) {
    console.log(arrDirty[i])
  }
  // if (!isNaN(arrDirty[i]) && arrDirty[i] !== null && arrDirty[i].length !== 0 && arrDirty[i] !== false) {
  //   console.log(arrDirty[i])
  // }

}

// Ejercicio 3
const arrCities = [
  { city: 'Logroño', country: 'Spain', capital: false },
  { city: 'Paris', country: 'France', capital: true },
  { city: 'Madrid', country: 'Spain', capital: true },
  { city: 'Rome', country: 'Italy', capital: true },
  { city: 'Oslo', country: 'Norway', capital: true },
  { city: 'Jaén', country: 'Spain', capital: false }
]

for (let index = 0; index < arrCities.length; index++) {

  if (arrCities[index].capital === false) {
    console.log(arrCities[index])
  }

}

// Ejercicio 4

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

const arrNew = arrNumber1.concat(arrNumber2).concat(arrNumber3);
console.log(arrNew);

//Ejercicio 5
const arrCities2 = [
  { city: 'Logroño', country: 'Spain', capital: false },
  { city: 'Bordeaux', country: 'France', capital: false },
  { city: 'Madrid', country: 'Spain', capital: true },
  { city: 'Florence', country: 'Italy', capital: true },
  { city: 'Oslo', country: 'Norway', capital: true },
  { city: 'Jaén', country: 'Spain', capital: false }
]

let arrCities3 = [];

arrCities2.forEach((city) => {
  if (city.country === 'Spain') {
    let cities = { city: city.city, isSpain: 'true' }
    arrCities3.push(cities)
  } else {
    let cities = ({ city: city.city, isSpain: 'false' })
    arrCities3.push(cities)
  }
})


console.log(arrCities3)

//Ejercicio 6


const roundtTo = (number, numDecimal) => {
  const num = Math.ceil(number * Math.pow(10, numDecimal)) / Math.pow(10, numDecimal)
  console.log(num)
}

const num1 = 2222.5555556567567567
const decimal = 2
roundtTo(num1, decimal)

//Ejercicio 7

const returnFalsyValues = (ob, type) => {
  let ob2 = {}
  for (let i in ob) {
    if (typeof type !== typeof ob[i]) {
      ob2[i] = ob[i]
    }
  }

  return ob2
}

const ob1 = { a: 1.22, b: '2', c: 3.22 }
const type = 'x'

console.log(returnFalsyValues(ob1, type));

//Ejercicio 8
// 1 bytes-
// 1.024 bytes = 1 kilobyte(abreviado KB)-
// 1.024 KB/1048576 bytes = 1 Megabyte-
// 1.024 MB = 1 Gigabyte(GB, giga)-
// 1.024 GB = 1 Terabyte(TB, tera)-
// 1.024 TB = 1 Petabyte(PB, peta)
// 1.014 PB = 1 Exabyte(EB)
// 1.014 EB = 1 Zettabyte(ZB)
// 1.014 ZB = 1 Yottabyte(YB)

const fromBytesToFormattedSizeUnits = (num, parameter = 3) => {

  const sign = Math.sign(num)
  if (sign === -1) {
    num *= -1
  }

  if (num < Math.pow(10, 3)) {
    if (sign === -1) {
      return (num.toPrecision(parameter) * -1) + ' bytes'
    } else {
      return num.toPrecision(parameter) + ' bytes'
    }
  } else if (num >= Math.pow(10, 3) && num < Math.pow(10, 6)) {
    num /= Math.pow(10, 3)
    if (sign === -1) {
      return (num.toPrecision(parameter) * -1) + ' KB'
    } else {
      return num.toPrecision(parameter) + ' KB'
    }
  } else if (num >= Math.pow(10, 6) && num < Math.pow(10, 9)) {
    num /= Math.pow(10, 6)
    if (sign === -1) {
      return (num.toPrecision(parameter) * -1) + ' MB'
    } else {
      return num.toPrecision(parameter) + ' MB'
    }
  } else if (num >= Math.pow(10, 9) && num < Math.pow(10, 12)) {
    num /= Math.pow(10, 9)
    if (sign === -1) {
      return (num.toPrecision(parameter) * -1) + ' GB'
    } else {
      return num.toPrecision(parameter) + ' GB'
    }
  } else if (num >= Math.pow(10, 12) && num < Math.pow(10, 15)) {
    num /= Math.pow(10, 12)
    if (sign === -1) {
      return (num.toPrecision(parameter) * -1) + ' TB'
    } else {
      return num.toPrecision(parameter) + ' TB'
    }
  } else if (num >= Math.pow(10, 15) && num < Math.pow(10, 18)) {
    num /= Math.pow(10, 15)
    if (sign === -1) {
      return (num.toPrecision(parameter) * -1) + ' PB'
    } else {
      return num.toPrecision(parameter) + ' PB'
    }
  } else if (num >= Math.pow(10, 18) && num < Math.pow(10, 21)) {
    num /= Math.pow(10, 18)
    if (sign === -1) {
      return (num.toPrecision(parameter) * -1) + ' EB'
    } else {
      return num.toPrecision(parameter) + ' EB'
    }
  } else if (num >= Math.pow(10, 21) && num < Math.pow(10, 24)) {
    num /= Math.pow(10, 21)
    if (sign === -1) {
      return (num.toPrecision(parameter) * -1) + ' ZB'
    } else {
      return num.toPrecision(parameter) + ' ZB'
    }
  } else if (num >= Math.pow(10, 24) && num < Math.pow(10, 27)) {
    num /= Math.pow(10, 24)
    if (sign === -1) {
      return (num.toPrecision(parameter) * -1) + ' YB'
    } else {
      return num.toPrecision(parameter) + ' YB'
    }
  }

}


const result = fromBytesToFormattedSizeUnits(123456789);
console.log(result);


const result1 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result1);


//Ejercicio 9
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };

const toLowercaseKeys = (object) => {
  const ob = {}
  for (let i in object) {
    let y = i.toLowerCase();
    ob[y] = object[i]
  }
  return ob
}


const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase);

//Ejercicio 10

const removeHTMLTags = (string) => {
  let arr = string.split('>')
  let arr1 = []
  for (let i in arr) {
    let r = arr[i].search('<')
    let word = arr[i].slice(0, r)
    if (0 < word.length) arr1.push(word)
  }
  return arr1.join('');
}


const result2 = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');

console.log(result2);

// Ejercicio 11
const splitArrayIntoChunks = (array, number) => {
  let numberArray = Math.ceil((array.length / number))
  console.log(numberArray)
  let arr = []
  let i = 0
  while (0 < numberArray) {
    let arr1 = array.slice(number * i, (i * number) + number)
    arr.push(arr1)
    i++
    numberArray--
  }
  return arr
}

const result3 = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]
