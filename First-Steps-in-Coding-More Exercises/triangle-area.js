function triangleArea(input){

    let area = Number(input[0]) * Number(input[1]) / 2;
    let areas = area.toFixed(2);
    console.log(areas);

}
triangleArea(["20","30"]);
triangleArea(["15","35"]);
triangleArea(["7.75","8.45"]);
triangleArea(["1.23456","4.56789"]);