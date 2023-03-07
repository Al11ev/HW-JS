//task 1
alert ('Welcome!');
 let WorkDaysPerWeek = 5; //Стандартное кол-во рабочих дней
 let WorkHoursPerDay = 8; //Минимальное кол-во часов, затраченных на рабочий процесс
 let TotalRequiredTimePerMonth = WorkDaysPerWeek * WorkHoursPerDay * 4 //Суммарное уделенное время за месяц
 console.log (TotalRequiredTimePerMonth);//Вывод результата

//task 2
document.getElementById ('check').onclick = function () {
    let login = document.getElementById ('login') .value;
    let password = document.getElementById ('password') .value;

    if (login == 'admin' && password == 'qwerty')
     alert ('Welcome'); 
    else alert ('incorrect login or password');
}