function dateCounter() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value - 1;
    var year = document.getElementById("year").value;
    
    if ((day < 0) || (day > 31)) {
        wrongAlert();
        return;
    }
    if ((month < 0) || (month > 12)) {
        wrongAlert();
        return;
    }
    if((year < 2000) || (year > 2300)) {
        wrongAlert();
        return;
    }

    var date = new Date(year, month, day);
    const dayWeek = date.getDay();
    var dayName;

    switch(dayWeek) {
        case 0:
            dayName = "Неділя";
            break;
        case 1:
            dayName = "Понеділок";
            break;
        case 2:
            dayName = "Вівторок";
            break;
        case 3:
            dayName = "Середа"; 
            break;
        case 4:
            dayName = "Четвер";
            break;
        case 5:
            dayName = "П'ятниця";  
            break;
        case 6:
            dayName = "Субота";
            break;
    } 
    date = addDays(date, 1);
    date = addDays(date, 30);

    if(date.getDay() == 6) {
        date = addDays(date,2)
    } else
        if (date.getDay() == 0) {
            date = addDays(date,1);
    } else {
        date = addDays(date,1);
    }

    show(date, dayName);
}

function wrongAlert() {
    alert("Неправильно введено день, місяць чи рік");
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

function show(date, dayName) {
    var month = parseInt(date.getMonth()) + 1;
    document.getElementById("res").innerHTML = "(" + dayName + ") " + date.getDate()+ " . " + month + " . " + date.getFullYear() ;
}