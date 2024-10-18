function celsiusToFahrenheit(input){

    let fahrenheit = Number(input[0]) * 1.8 + 32;
    let fahrenheit2 = fahrenheit.toFixed(2);
    console.log(fahrenheit2);

}

celsiusToFahrenheit(["25"]);
celsiusToFahrenheit(["0"]);
celsiusToFahrenheit(["-5.5"]);
celsiusToFahrenheit(["32.3"]);