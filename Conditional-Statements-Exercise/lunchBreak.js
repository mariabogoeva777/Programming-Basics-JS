function lunchBreak(input){

    let serriesName = input[0];
    let episodeDiration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let restTime = breakDuration / 4;

    let totalTime = lunchTime + restTime + episodeDiration;
    
    if(totalTime <= breakDuration){
        console.log(`You have enough time to watch ${serriesName} and left with ${Math.ceil(breakDuration - totalTime)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${serriesName}, you need ${Math.ceil(totalTime - breakDuration)} more minutes.`);
    }

}
lunchBreak(["Game of Thrones","60","96"]);
lunchBreak(["Teen Wolf","48","60"]);