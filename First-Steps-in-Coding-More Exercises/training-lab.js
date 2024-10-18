function trainingLab(input){

    let w = Number(input[0]);
    let h = Number(input[1]);
    
    let lenght = w * 100;
    let width = h * 100;

    let corridor = width - 100;
    let desksInLenght = Math.floor(corridor/70);
    let deskInWidht = Math.floor(lenght/120);
    let seats = desksInLenght * deskInWidht - 3;
    
    console.log(seats);

}
trainingLab(["15","8.9"]);
trainingLab(["8.4","5.2"]);