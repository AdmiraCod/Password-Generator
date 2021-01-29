function makePassword(){
    
    var chars = "0123456789abcdefghijklmnopqrstuwvyxzABCDEFGHIJKLMNOPQRSTUWVYXZ!@#%^&*()_-+><?";
    var passwordLenghth = 12;
    var password = "";

    for (var i=0; i<passwordLenghth; i++){
        var randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum,randomNum+1);
    }
    document.getElementById("output").value = password
}