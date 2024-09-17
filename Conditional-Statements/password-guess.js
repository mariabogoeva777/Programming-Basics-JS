function passwordGuess(input){

    let password = "s3cr3t!P@ssw0rd";
    let correct = "Welcome";
    let inCorrect = "Wrong password!";
    if ((input[0]) == password){
        console.log(correct);
    }else{ 
        console.log(inCorrect);
    }

}
passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);