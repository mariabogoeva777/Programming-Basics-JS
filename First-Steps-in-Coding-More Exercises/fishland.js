function fishLand(input){

    let mackerel = Number(input[0]);
    let sprinkle = Number(input[1]);
    let bonito = Number(input[0]) + Number(input[0])*60/100;
    let safrid = Number(input[1]) + Number(input[1])*80/100;
    let mussels = 7.50;
    let sumBonito =  Number(input[2]) * bonito;
    let sumSafrid = Number(input[3]) * safrid;
    let sumMussels = mussels * Number(input[4]);
    let total = sumBonito + sumSafrid + sumMussels;
    let sumTotal = total.toFixed(2);

    console.log(sumTotal)


}

fishLand(["6.90","4.20","1.5","2.5","1"]);
fishLand(["5.55","3.57","4.3","3.6","7"]);
fishLand(["7.79","5.35","9.3","0","0"]);