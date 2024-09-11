function sendNotification(email){
    const mail = email.split("");
    if (mail.includes("@")){
     let select = email.split("@");
     const userName = select[0];
     const domainName = select[1];
     const notification = `${userName} sent you an email from ${domainName}`;
     return notification
            
    }
    else{
        return "Invalid Email";
    }
}

let result = sendNotification("sadia8@icloud.com"); //call function 
console.log(result);