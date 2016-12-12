var repassword=document.getElementById("repassword");
var repasswordtips=document.getElementById("repasswordtips");
var passreg=/^[a-zA-Z]\w{5,17}$/;
repassword.onblur= function () {
    var repassValue = repassword.value;
    var passflag = passreg.test(repassValue);
    if(passflag) {
            repasswordtips.innerHTML="正确";
        }else {
            repasswordtips.innerHTML="两次密码输入不一样";
        }
};