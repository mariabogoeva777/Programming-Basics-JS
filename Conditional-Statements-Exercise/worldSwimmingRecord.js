function wordSwimmingRecord(input){

    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeToswim1m = Number(input[2]);
    
    let timeWithoutDelay = distance * timeToswim1m;
    let delay = Math.floor(distance / 15) * 12.5;

    let newTime = delay +  timeWithoutDelay;

    if(newTime < currentRecord){
        console.log(`Yes, he succeeded! The new world record is ${newTime.toFixed(2)} seconds.`);
    }else{
        console.log(`No, he failed! He was ${(newTime - currentRecord).toFixed(2)} seconds slower.`);
    }

}
wordSwimmingRecord(["10464","1500","20"]);
wordSwimmingRecord(["55555.67","3017","5.03"]);