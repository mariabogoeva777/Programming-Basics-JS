function time15Minutes (input){

    let inputHours = Number(input[0]);
    let inputMinutes = Number(input[1]);
    let totalTime = (inputHours * 60) + inputMinutes + 15;
    let hours = Math.floor(totalTime/60);
    let minutes = totalTime % 60;

    if(hours > 23){
        hours = 0;
    }
    if(minutes < 10){
        console.log(`${hours}:0${minutes}`);
    }else{ 
        console.log(`${hours}:${minutes}`);
    }
    


}
time15Minutes(["1","46"]);
time15Minutes(["0","01"]);
time15Minutes(["23","59"]);
time15Minutes(["11","08"]);
time15Minutes(["12","49"]);