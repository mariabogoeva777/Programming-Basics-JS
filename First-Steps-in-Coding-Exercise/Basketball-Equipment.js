function basketballEquipment(input){

    let priceBasketShoes = Number(input[0]) - (Number(input[0])*40)/100;
    let priceBasketTeam = priceBasketShoes - (priceBasketShoes*20)/100;
    let priceBasketBall = priceBasketTeam/4;
    let priceBasketAcc = priceBasketBall/5;
    let totalPrice = Number(input[0]) + priceBasketShoes + priceBasketTeam + priceBasketBall + priceBasketAcc

    console.log(totalPrice)

}
basketballEquipment(["365"]);
basketballEquipment(["550"]);

//Цена на тренировките за година: 365 
//Цена на баскетболните кецове: 365 – 40% = 219 
//Цена на баскетболен екип: 219 – 20% = 175.20 
//Цена на баскетболна топка: 1 / 4 от 175.20 = 43.80 
//Цена на баскетболни аксесоари: 1 / 5 от 43.80 = 8.76 
//Обща цена за екипировката: 365 + 219 + 175.20 + 43.80 + 8.76 = 811.76