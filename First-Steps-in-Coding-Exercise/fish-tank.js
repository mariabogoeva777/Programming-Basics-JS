function fishTank(input){

    let volume = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let volumeLiter = volume / 1000;
    let occupiedSpace = Number(input[3]) / 100;
    let litersNeeded = volumeLiter * (1 - occupiedSpace);

    console.log(litersNeeded)

}
fishTank(["85","75","47","17"])
fishTank(["105","77","89","18.5"])

//обем на аквариумa: 85 * 75 * 47 = 299625 см3 
//обем в литри: 299625 * 0.001 или 299625 / 1000 => 299.625 литра 
//заето пространство: 17% = 0.17 
//нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра