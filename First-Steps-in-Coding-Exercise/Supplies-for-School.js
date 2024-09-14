function suppliesforSchool(input) {

    let packetPencils = Number(input[0]) * 5.80;
    let packetMarker = Number(input[1]) * 7.20;
    let preparation = Number(input[2]) * 1.20;
    let priceAllMaterials = packetPencils + packetMarker + preparation;
    let procent = Number(input[3])/100;
    let price = priceAllMaterials - (priceAllMaterials* procent);

    console.log(price)
}
suppliesforSchool(["2","3","4","25"])
suppliesforSchool(["4","2 ","5","13"])

//Брой пакети химикали - цяло число в интервала [0...100]
//Брой пакети маркери - цяло число в интервала [0...100]
//Литри препарат за почистване на дъска - цяло число в интервала [0…50]
//Процент намаление - цяло число в интервала [0...100]

//Цена на пакетите химикали => 2 * 5.80 = 11.60 лв. Цена на пакетите маркери => 3 * 7.20 = 21.60 лв. 
//Цена на препарата => 4 * 1.20 = 4.80 лв. 
//Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв. 
//25% = 0.25 
//Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 лв.