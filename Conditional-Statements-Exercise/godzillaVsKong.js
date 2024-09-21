function GodzillaVsKong(input){

    let movieBudget = Number(input[0]);
    let externalsCount = Number(input[1]);
    let externalOutfitPrice = Number(input[2]);

    let totalOutfitPrice = externalsCount * externalOutfitPrice;

    let decor = movieBudget * 0.10;

    if(externalsCount > 150){
        totalOutfitPrice = totalOutfitPrice - totalOutfitPrice * 0.10;
    }
    let totalSum = decor + totalOutfitPrice;

    if(totalSum > movieBudget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum - movieBudget).toFixed(2)} leva more.`);

    }else{ 
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - totalSum).toFixed(2)} leva left.`)

    }
    }


GodzillaVsKong(["20000","120","55.5"]);
GodzillaVsKong(["15437.62","186","57.99"]);