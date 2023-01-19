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
        wrongAlert;
        return;
    }

    var date = new Date(year, month, day);
    const dayWeek = date.getDay();
    alert(date);

    switch(dayWeek) {
        case 0:
            alert("Sunday");
            break;
        case 1:
            alert("Monday");
            break;
        case 2:
            alert("Tuesday");
            break;
        case 3:
            alert("Wednesday");
            break;
        case 4:
            alert("Thursday");
            break;
        case 5:
            alert("Friday");
            break;
        case 6:
            alert("Saturday");
            break;
    }

    date = addDays(date, 1);
    date = addDays(date, 30);
    alert(date);

    if(date.getDay() == 6) {
        date = addDays(date,2)
    } else
        if (date.getDay() == 0) {
            date = addDays(date,1);
    } else {
        date = addDays(date,1);
    }



    alert(date);

}

function wrongAlert() {
    alert("You've typed wrond day/month/year");
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }