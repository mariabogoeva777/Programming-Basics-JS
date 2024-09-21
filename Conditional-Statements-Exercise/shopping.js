function shopping(input){

    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardPrice = 250;
    let totalVideoCardPrice = videoCardsCount * videoCardPrice;

    let processorPrice = totalVideoCardPrice * 0.35;
    let ramPrice = totalVideoCardPrice * 0.10;

    let totalSum = totalVideoCardPrice + (processorsCount*processorPrice)+(ramCount*ramPrice);

    if(videoCardsCount > processorsCount){
        totalSum = totalSum - totalSum * 0.15;
    }
    let difference = Math.abs(budget - totalSum);
    if(budget >= totalSum){
        console.log(`You have ${difference.toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);
    }
    

}
shopping(["900","2","1","3"]);
shopping(["920.45","3","1","1"]);