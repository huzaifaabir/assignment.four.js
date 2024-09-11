function checkDigitsInName(name){
    if(typeof name === "string"){

        if (/\d/.test(name) ){
            return true;
        }
        return false;
    }
    else{
        return "Invalid Input";
    }
}

let result = checkDigitsInName(["Raj"]); //call function 
console.log(result);