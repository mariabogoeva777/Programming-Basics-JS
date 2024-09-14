function vacationBooksList(input) {

    let totalRead = Number(input[0])/ Number(input[1]);
    let hoursDay = totalRead / Number(input[2]);

    console.log(hoursDay)
}

vacationBooksList(["212","20", "2"])
vacationBooksList(["432", "15", "4"])

//Общо време за четене на книгата: 212 страници / 20 страници за час = 10.6 часа общо 
//Необходимите часове на ден: 10.6 часа / 2 дни = 5.3 часа на ден