let resultObj="hello" ; // input for function

function calculateFinalScore(obj){
    if (typeof obj === "object"){
        let parentpoint = 0;  
        if (obj.isFFamily === true ){
         parentpoint = 20;
        }
       let finalScore = obj.testScore + obj.schoolGrade + parentpoint;
       if (finalScore >=80){
        return true;
       }
       return false;
    }
    else{
        return "Invalid Input";
    }
}


let result = calculateFinalScore(resultObj); //call function 
console.log(result);