function toyShop(input){
//vhodni danni
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlePrice = 2.60;
    let dollsPrice = 3;
    let teddyBearPrice = 4.10; 
    let minionPrice = 8.20;
    let truckPrice = 2;

    let totalToysCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;

    let totalSum = (teddyBearPrice * teddyBearsCount) + (puzzlePrice * puzzlesCount) + (dollsPrice * dollsCount) + (minionPrice * minionsCount) + (truckPrice * trucksCount);

    if (totalToysCount >= 50){
        let discount = 0.25
        totalSum = totalSum - totalSum * discount;
    }
    totalSum = totalSum - totalSum * 0.10; //10% naem
    
    if(totalSum >= tripPrice){
        console.log(`Yes! ${(totalSum - tripPrice).toFixed(2)} lv left.`);
    }else{
    console.log(`Not enough money! ${(totalSum = tripPrice - totalSum ).toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8","20","25","30","50","10"])
toyShop(["320","8","2","5","5","1"])