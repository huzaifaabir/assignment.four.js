function calculateTax(income, expenses) {
if (income >=0 && expenses>= 0 && income >= expenses){
    const benefit = income - expenses  ;
    const tex = benefit / 100 * 20;
    return tex ;
}
else{
    return "Invalid Input"
}
}
let result = calculateTax(6000, 1500); //call function 
console.log(result);
