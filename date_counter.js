function dateCounter() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value - 1;
    var year = document.getElementById("year").value;
    
    checkDate(day, month, year);

    var date = new Date(year, month, day);
    var dayName;

    date = addDays(date, 1);
    date = addDays(date, 31);
    alert(date.getDay());
    
    if (date.getDay() == 6) {
        date = addDays(date, 2);
    }
    if (date.getDay() == 0) {
        date = addDays(date, 2);
    }

    switch(date.getDay()) {
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
    
    show(date, dayName);
}

function checkDate(day, month, year) {
    if ((day < 0) || (day > 31)) {
    }
    if ((month < 0) || (month > 12)) {
        alert("Неправильно введено день, місяць чи рік");
        return;
    }
    if((year < 2000) || (year > 2300)) {
        alert("Неправильно введено день, місяць чи рік");
        return;
    }
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

function show(date, dayName) {
    document.getElementById("res").innerHTML = "";
    var month = parseInt(date.getMonth()) + 1;
    var message = "(" + dayName + ") " + date.getDate()+ "." + month + "." + date.getFullYear();
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-light alert" role="alert">`,
        `   <div>${message}</div>`,
        '</div>'
      ].join('');

      document.getElementById("res").append(wrapper);
}