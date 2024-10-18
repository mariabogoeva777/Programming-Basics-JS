function invalidNumber(input){

    let number = Number(input[0]);
    let isValidNumber = number >= 100 && number <= 200 || number === 0;

    if(!isValidNumber){
        console.log('invalid');
    }

}
(["75"]);
(["150"]);
(["220"]);
(["199"]);
(["-1"]);
(["100"]);
(["200"]);
(["0"]);