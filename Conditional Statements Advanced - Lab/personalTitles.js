function personalTitles(input){

    let age = Number(input.shift());
    let gender = input.shift();

    if(gender == 'f'){
        if(age>=16){
            console.log("Ms.");
        }
        else{
        console.log("Miss");
        }
        
    }else{
            if(age >= 16){
                console.log("Mr.");
            }
            else{
                console.log("Master");
            }
        }
}

(["12","f"]);
(["17","m"]);
(["25","f"]);
(["13.5","m"]);