//1. Переменные
// variable
// var name = 'Elena'// не используется, устарело
// const lastName = 'Veliar' //не изменяется, не переназначить
// let age = 30

// const firstName = 'Elena'
// const lastName = 'Veliar' //string
// const age = 30
// const isProgrammer = true //boolean

// const _private = 'private'
// const $ = 'some value'

//const if = 'mkef' //err
// const withNum5 = '5'
//const 5withNum = 5 //err

//2 Мутирование
// console.log('Имя человека: ' + firstName + ', a возраст человека: ' + age) //конкатенация
// alert('Имя человека: ' + firstName + ', a возраст человека: ' + age)

// сonst lastName prompt('Введите фамилию')
// alert(firstName + '' + lastName)

//3. Операторы
// let currentYear = 2022
// const birthYear = 1992

// const age = currentYear - birthYear
// console.log(age)

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a

// console.log (a + b)
// console.log (a - b)
// console.log (a * b)
// console.log (a / b)
// console.log(++currentYear)
// console.log(currentYear--)
// console.log(c)

//4 Типы данных примитивные
// const isProgrammer = true
// const name = 'Elena'
// const age = 30
// let x
// console.log(typeof isProgrammer) //boolean
// console.log(typeof name) //string
// console.log(typeof age) //number
// console.log (typeof x) //underfined не был передан в функцию
// console.log (null) //null нет значения

//5. Приоретет операций
// const fullAge = 30
// const birthYear = 1992
// const currentYear = 2022

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 30 >= 30
// console.log(isFullAge)

// 6. Условные операторы
// const courseStatus = 'pending' //ready, fail, panding

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//     console.log('Все готово!')
// } else {
//     console.log ('Все не готово!')
// }

//тернарное выражение
// isReady ? console.log('Все готово!'): console.log('Все не готово!')

// const num1 = 42 //number
// const num2 = '42' //string
// console.log(num1 == num2) //true
// console.log(num1 === num2) //false

// 7. Булевая логика

// 8. Функции
// function calculateAge(year) {
//   return 2022 - year;
// }

// const myAge = calculateAge(1992)
// console.log(myAge)

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);

//   if (age > 0) {
//     console.log("Человек по имени " + name + " сейчас имеет возраст " + age);
//   } else {
//     console.log('Вообще-то это уже будущее!')
//   }
// }

// logInfoAbout("Elena", 1992);
// logInfoAbout("Elena", 2023);

// 9. Массивы
//  const cars = ['Мазда', 'Мерседес', 'Форд'] //- правильнее и проще
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
// console.log(cars.length) //длина массива

// cars[0] = 'Porsche'
// console.log(cars)
// cars[3] = 'Mazda'
// cars[cars.length] = 'Mmazda' //последний элемент
// console.log(cars)

//10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд'] 

// for(let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
    
// }

// for(let car of cars) {
//     console.log(car)
// }

//11. Объекты
function foo() {}
foo.x = 10;
console.log(foo.x);