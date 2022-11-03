// Ejercicio 1
const arrNames = [
  { id: 1, name: 'Pepe' },
  { id: 2, name: 'Juan' },
  { id: 3, name: 'Alba' },
  { id: 4, name: 'Toby' },
  { id: 5, name: 'Lala' }
];

const found = arrNames.find(name => name.id === 3)
console.log(found);

//Ejercicio 2

const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test']

const arrClean = arrDirty.filter(value => !!Boolean(value) && typeof (value) === 'number')

console.log(arrClean)

// Ejercicio 3
const arrCities = [
  { city: 'Logroño', country: 'Spain', capital: false },
  { city: 'Paris', country: 'France', capital: true },
  { city: 'Madrid', country: 'Spain', capital: true },
  { city: 'Rome', country: 'Italy', capital: true },
  { city: 'Oslo', country: 'Norway', capital: true },
  { city: 'Jaén', country: 'Spain', capital: false }
]

const arrCitiesSpain = arrCities.filter(({ capital, country }) => !capital && country === 'Spain')

console.log(arrCitiesSpain)

// Ejercicio 4

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

const arrNew = arrNumber1.filter(value => arrNumber2.includes(value) && arrNumber3.includes(value))
console.log(arrNew)


//Ejercicio 5*****
const arrCities2 = [
  { city: 'Logroño', country: 'Spain', capital: false },
  { city: 'Bordeaux', country: 'France', capital: false },
  { city: 'Madrid', country: 'Spain', capital: true },
  { city: 'Florence', country: 'Italy', capital: true },
  { city: 'Oslo', country: 'Norway', capital: true },
  { city: 'Jaén', country: 'Spain', capital: false }
]

let arrCities3 = arrCities2.filter(({ capital }) => !capital).map(({ city, country }) => ({ city, isSpain: country === "Spain" }));

console.log(arrCities3);

//Ejercicio 6


const roundtTo = (number, numDecimal) => {
  // const num = Math.round(number * Math.pow(10, numDecimal)) / Math.pow(10, numDecimal)
  const num = Math.round(number * (10 ** numDecimal)) / (10 ** numDecimal)
  console.log(num)
}


const num1 = 2222.5555556567567567
const decimal = 2
roundtTo(num1, decimal)


//Ejercicio 7

const returnFalsyValues = (ob, type) => {
  const arr = Object.values(ob)
  const arr3 = arr.filter(value => typeof value !== typeof type)
  console.log(arr3)
}

const ob1 = { a: 1.22, b: '2', c: 3.22 }
const type = 'x'

returnFalsyValues(ob1, type);

//Ejercicio 8

const fromBytesToFormattedSizeUnits = (num, parameter = 3) => {
  const arr = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const sign = Math.sign(num)
  if (sign === -1) {
    num *= -1
  }
  let i = 0
  while (1000 <= num) {
    num /= 1000
    i++
  }

  if (sign === -1) {
    return (num.toPrecision(parameter) * (-1)) + arr[i]
  } else {
    return num.toPrecision(parameter) + arr[i]
  }

}

//console.log(fromBytesToFormattedSizeUnits(123456789));

console.log(fromBytesToFormattedSizeUnits(-12145489451.5932, 5));


//Ejercicio 9
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };

const toLowercaseKeys = (object) => {
  let arr = Object.entries(object)
  const obj = arr.reduce((acc, elem) => {
    acc[elem[0].toLowerCase()] = elem[1]
    return acc
  }, {})
  console.log(obj)
}


toLowercaseKeys(myObject);


//Ejercicio 10

const removeHTMLTags = (string) => {
  // let arr = string.split('>')
  // let arr1 = []
  // for (let i in arr) {
  //   let r = arr[i].search('<')
  //   let word = arr[i].slice(0, r)
  //   if (0 < word.length) arr1.push(word)
  // }
  // return arr1.join('');

  const redox = /(&nbsp;|<([^>]+)>)/ig

  let arr = string.replace(redox, "")
  console.log(arr)

}


removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');

// Ejercicio 11
const splitArrayIntoChunks = (array, number) => {
  let numberArray = Math.ceil((array.length / number))
  let arr = []
  for (let i = 0; i < number; i++) {
    arr.push(array.slice(numberArray * i, (i * numberArray) + numberArray))
  }
  return arr
}

const result3 = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result3);
