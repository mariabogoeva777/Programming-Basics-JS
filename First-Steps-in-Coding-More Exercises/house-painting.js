function housePainting(input){

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    let window = 1.5*1.5;
    let side =  x * y;
    let twoSide = 2*side - 2*window;
    let backWall = x * x;
    let entrance = 1.2*2;
    let sumFrontBack = 2 * backWall - entrance;
    let total = twoSide + sumFrontBack;
    let greenPaint = total / 3.4;
    let greenTotal = greenPaint.toFixed(2)

    console.log(greenTotal);

    let rectangleRoof = 2 * (x*y);
    let triangle = 2 * (x*h/2);
    let sumTotal = rectangleRoof + triangle;
    let redPaint = sumTotal / 4.3;
    let red = redPaint.toFixed(2);

    console.log(red);

}
housePainting(["6","10","5.2"]);
housePainting(["10.25","15.45","8.88"]);