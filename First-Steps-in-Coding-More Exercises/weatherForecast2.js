function weatherForecast2(input){

    let degrees = Number(input[0]);

    if (degrees<5 || degrees>35){
        console.log("unknown");
    }else if (degrees>=26.00){
        console.log("Hot");
    }else if (degrees>=20.1){
        console.log("Warm");
    }else if (degrees>=15.00){
        console.log("Mild");
    }else if (degrees>=12.00){
        console.log("Cool");
    }else if (degrees>=5){
        console.log("Cold");
    }
    
    
}

weatherForecast2(["16.5"]);
weatherForecast2(["8"]);
weatherForecast2(["22.4"]);
weatherForecast2(["26"]);
weatherForecast2(["0"]);