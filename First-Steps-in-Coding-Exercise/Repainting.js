function repainting(input){

    let nylon = (Number(input[0])+2) * 1.50;
    let paint = ((Number(input[1]))+ (Number(input[1])*10/100)) * 14.50;
    let thinner = Number(input[2]) * 5.00;
    let bags = 0.40;
    let sumMaterials = nylon + paint + thinner + bags;
    let sumMasters = (sumMaterials * (30/100)) * Number(input[3]);
    let sumTotal = sumMaterials + sumMasters

    console.log(sumTotal)
}

repainting(["10","11","4","8"]);
repainting(["5","10","10","1"]);

//Сума за найлон: (10 + 2) * 1.50 = 18 лв. 
//Сума за боя: (11 + 10%) * 14.50 = 175.45 лв. 
//Сума за разредител: 4 * 5.00 = 20.00 лв. 
//Сума за торбички: 0.40 лв. 
//Обща сума за материали: 18 + 175.45 + 20.00 + 0.40 = 213.85 лв. 
//Сума за майстори: (213.85 * 30%) * 8 = 513.24 лв
//Крайна сума: 213.85 + 513.24 = 727.09 лв.