function vegetableMarket(input){

    let vegetables = Number(input[0]);
    let fruits = Number(input[1]);
    let totalVegetables = Number(input[2]);
    let totalFruits = Number(input[3]);
    let sum1 = vegetables * totalVegetables;
    let sum2 = fruits * totalFruits;
    let sumTotal = (sum1 + sum2) / 1.94;
    let total = sumTotal.toFixed(2);

    console.log(total);

}
vegetableMarket(["0.194","19.4","10","10"]);
vegetableMarket(["1.5","2.5","10","10"]);