function calculateTax(income, expenses) {
    if (income >=0 && expenses>= 0 && income >= expenses){
        let extra = income - expenses  ;
        let texMoney = (extra / 100) * 20;
        
        return texMoney ;
    }
    else{
        return "Invalid Input"
    }
    }





function sendNotification(email){
        let userEmail = email.split("");
        if (userEmail.includes("@")){
         let emailDevide = email.split("@");
         let beforeitem = emailDevide[0];
         let afteritem = emailDevide[1];
         const notification = beforeitem + " sent you an email from " +afteritem;


         
         return notification
        }
        else{
            return "Invalid Email";
        }
    }


    
    function checkDigitsInName(name){
        if(typeof name === "string"){
    
            if (/\d/.test(name) ){
                let result = true
                return result;
            }
            else{
                let result = false
                return result;
            }

        }
        else{
            return "Invalid Input";
        }
    }



    function calculateFinalScore(obj){
        if (typeof obj === "object"){
            let farmer = 0;  
            if (obj.isFFamily === true ){
             farmer = 20;
            }
           let totalnumber = obj.testScore + obj.schoolGrade + farmer;
           if (totalnumber >=80){
           const result = true;


           return result;
        }
        else{
               const result = false;
            return result;
        }
           
        }
        else{
            return "Invalid Input";
        }
    }


    function waitingTime(waitingTimes, serialNumber) {
        if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
            let interviewtimeLength = waitingTimes.length;
            let interviewTime = 0;
            for (let avarage of waitingTimes) {
                interviewTime = interviewTime + avarage;
            }
            let totaltime = interviewTime / interviewtimeLength ;
            let round = Math.round(totaltime)
            let serial = serialNumber -  (interviewtimeLength+1) ;
            const totalWaitingtime = serial * round;
           const result = totalWaitingtime ;
            return result;
    
        }
        else {
            return " Invalid Input";
        }
    }
    let result = waitingTime(7 , 10); //call function 
    console.log(result);
    