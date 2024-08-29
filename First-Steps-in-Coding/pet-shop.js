function petShop(input) {

    let dogFood = 2.50;
    let catFood = 4;
    let result = (dogFood*(input[0])) + (catFood*(input[1]));

    console.log(`${result} lv.`)
}

petShop(["5", "4"])
petShop(["13", "9"])
//"{крайната сума} lv."