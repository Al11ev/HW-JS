//task 1 - assign: evaluation
// {
//  var a = 5;
//  var b, c;
    
//  //Изначальный вид
    
//  b = (a * 5);
//  b = (c = b/2);
//  console.log(b); // Работает
//  console.log(c); // Работает
    
//  //Полностью убрал скобки 
    
//  b = a * 5;
//  console.log(b); //Работает
//  b = c = b/2;
//  console.log(b); //Работает
//  console.log(c); //Работает
    
//  //Обернул маленько скобочками
    
//  b = ((a) * (5));
//  console.log(b); // Работает
//  b = ((c) = (b/2));
//  console.log(b); //Работает
//  console.log(c); // Работает
    
//  //Ещё больше скобочек
    
//  (b = ((a) * (5)));
//  console.log(b); // Работает
//  (b = ((c) = (b/2)));
//  console.log(b); //Работает
//  console.log(c); //Работает
// }

//task 2 - Number: age
// {
//  let age = prompt("Сколько вам лет?", '');
//  let year = 2023;
//  let GuestAge = year - age;
//  alert(`${GuestAge}, эх хороший был год`);
// }

//task 3 - Number: temperature
// {
//  let temp = prompt("Сколько у вас сейчас градусов по шкале Фаренгейта?", '');
//  let far = ((temp - 32) * 5/9);
//  console.log(far.toFixed(1));
// }

//task 4 - Number: divide
// {
//  let a = 139;
//  let b = 6;
//  let c = Math.ceil(a/b);
//  console.log(c);
// }

//task 5 - Number: currency
// {
//  const rate = 36.75;
//  let check = prompt("Введите сумму в usd, которую хотите обменять", '');
//  let result = rate * check;
// console.log(result.toFixed(2));
//  alert(`${result.toFixed(2)} грн вы сможете получить при обмене`);
// }

//task 6 - Number: RGB
// {
//     let str = "#";
//     str += Number(prompt("Введите R значение от 16 до 255")).toString(16);
//     str += Number(prompt("Введите G значение от 16 до 255")).toString(16);
//     str += Number(prompt("Введите B значение от 16 до 255")).toString(16);
//     alert(`Вот ваш цвет - ${str}`);
//     console.log(str);
// }

//task 7 - Number: flats
// {
//     var floors = 9;
//     var porches = 3;
//     var apartmentsPerFloor = 3; 
//     var apartment = parseInt(prompt("Номер квартиры", ``), 10);
//     var floor = Math.ceil(apartment / apartmentsPerFloor);
//     var porch = Math.ceil(floor / floors);
//     floor -= (porch - 1) * floors;
//     alert("Хата номер " + apartment + " находится в " + porch + " подьезде на " + floor + " этаже");
// }