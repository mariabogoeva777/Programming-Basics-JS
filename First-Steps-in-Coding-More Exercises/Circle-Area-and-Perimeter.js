function circleAreAndPerimeter(input){

    let r = Number(input[0]);
    let circle = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;

    console.log(circle.toFixed(2));
    console.log(perimeter.toFixed(2));


}
circleAreAndPerimeter(["3"]);
circleAreAndPerimeter(["4.5"])