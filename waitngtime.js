function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
        const len = waitingTimes.length;
        let totalinterviewTime = 0;
        for (let avg of waitingTimes) {
            totalinterviewTime = totalinterviewTime + avg;
        }
        let avgInterviewTime =Math.round(totalinterviewTime / len) ;
        const serial = serialNumber -  (len +1) ;
        const waitForSerial = serial * avgInterviewTime;
        return waitForSerial;

    }
    else {
        return " Invalid Input";
    }
}
let result = waitingTime("[6,2]", 9); //call function 
console.log(result);
