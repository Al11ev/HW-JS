// task 1 - Number: odd

{
    let rNum = Number(prompt('Write a number'));
    if (isNaN(rNum)) {
      alert('Щось не так, потрібно написати лише число');
    } else {
        if (rNum % 2 === 0) {
      alert('Число парне');
        }
        if (rNum % 2 > 0) {
      alert('Число не парне');
        }
    }
}

// task 2 - String: lexics

{
    let chot = prompt("Write something here");
    console.log(chot.indexOf("Nword"));
}

// task 3 - Boolean

{
    let choto = confirm("Ви Миколай?");
    let choto2 = confirm("Ви знаєте Миколайя?");
    let choto3 = confirm("Так?");
    console.log(choto, choto2, choto3);
}

// task 4 - Boolean: if

{
    let choto = confirm("Олєг, ти що плачеш?");
    if(choto) {
        alert("Не розстраюйся");
    } else {
        alert("Правильно");
    }
    let chotoTam = confirm(" А румуни бігають?");
    if(chotoTam) {
        alert("О, а спіймай одного");
    } else {
        alert("Добре, ну відпочивай тоді");
    }
}

// task 5 - Comparison: sizes

{
    let ask = prompt("Write here the size you are interested in to see it in the British sizing system"); //Scandinavian as native
    if (ask == 34) {
        alert("In the UK this would be a size 8");
    }
    if (ask == 36) {
        alert("In the UK this would be a size 10");
    }
    if (ask == 40) {
        alert("In the UK this would be a size 14");
    }
    if (ask == 44) {
        alert("In the UK this would be a size 18");
    }
    if (ask == 48) {
        alert("In the UK this would be a size 22");
    }
}

// task 6 - Ternary

{
    let a = confirm("Ви чоловік?") ? alert("Ви чоловік") : confirm("Ви жінка?") ? alert("Ви жінка") : prompt("Хто ви?!") ? alert("Оукей" ) : alert( "Ладно...");   
}

// task 7 - Prompt: or

{
    let age = prompt("Скільки вам років?") || alert("bruh");
}

// task 8 - Confirm: or this days

{
    confirm("шопінг?") || alert("ти - бяка");
}

// task 9 - Confirm: if this days

{ 
    let ask = confirm("шопінг?");
    if(ask) {
        alert("Eeeeyyy");
    } else {
        alert("ти - бяка");
    }
}

// task 10 - Default: or

{
    let surname = prompt("Write your surname") || console.log("Ivanov");
    let name = prompt("Write your name") || console.log("Ivan");
    let patronymic = prompt("Write your patronymic") || console.log("Ivanovich");
}

// task 11 - Default: if

{
    let surname = prompt("Write your surname");
    if (surname) {
        console.log(surname);
    } else {
        if (" ") {
            console.log("Ivanov");
        }
    }
    let name = prompt("Write your name");
    if (name) {
        console.log(name);
    } else {
        if (" ") {
            console.log("Ivan");
        }
    }
    let patronymic = prompt("Write your patronimic");
    if (patronymic) {
        console.log(patronymic);
    } else {
        if (" ") {
            console.log("Ivanovich");
        }
    }
}

// task 12 - Login and password

{
    const login = prompt("Login");
    const password = prompt("passworld");
    if ( login === "admin" && password === "qwerty") {
        alert("Welcome back!");
    } else {
        alert("Wrong login or password");
    }
}

// task 13 - Currency exchange

{
    //This calculator shows how much you can get from your available funds in hryvnias
    let currency = prompt(("Specify the currency - USD/EUR"));
    if (currency.toUpperCase = "USD" || "EUR") {
        let ask = confirm("Do you want to buy or sell?");
        if (currency = "USD" && ask == true) {
            let bUsd = prompt("write your amount");
            let rate = bUsd / 36.93;
            alert("You can get " + rate.toFixed(2));
        }
        else if (currency = "USD" && ask == false) {
            let sUsd = prompt("write your amount");
            let rate = sUsd * 36.57;
            alert("You can get " + rate.toFixed(2));
        }
         else if (currency = "EUR" && ask == true) {
            let bEur = prompt("write your amount");
            let rate = bEur / 39.95;
            alert("You can get " + rate.toFixed(2));
         }
         else if (currency = "EUR" && ask == false) {
            let sEur = prompt("write your amount");
            let rate = sEur * 40.34;
            alert("You can get " + rate.toFixed(2));
         }
    }
    alert("Have a nice day!");
}

// task 14 - Scissors

{
    // Number 1 - stone
    // Number 2 - scissors
    // Number 3 - paper
    let userValue = Number(prompt("Use the number from 1 to 3 to play. 1- is stone, 2 - scissors, 3 - paper"));
    let compValue = Math.ceil(Math.random() * 3);
    alert(`The computer number is ${compValue}`);
     if (userValue === 1 && compValue > 1 || userValue === 2 && compValue === 3) {
          alert("User won!");
     }
    else if (userValue === 3 && compValue < 3 || userValue === 2 && compValue === 1) {
        alert("Computer won!");
    } else {
        alert("Draw!")
    }
}
