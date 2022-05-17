//allows the function of the registed info and button to work
function submitForum(){

    var x = document.getElementById("before");
   if (x.style.display ==="none") {
     x.style.display = "block";
   } else{
    x.style.display = "none";
  }
  
  let userName=document.userform.input_username.value;
  let userEmail=document.userform.input_email.value;
  let userPhone=document.userform.input_phoneNum.value;
//allows info to be submitted from the "before" box
  let userNameResult=document.getElementById("nameResult");
  let userEmailResult=document.getElementById("emailResult");
  let userPhoneResult=document.getElementById("phoneNumResult");
   // results of the info are recorded to the "after" box
    userNameResult.innerHTML=userName;
    userEmailResult.innerHTML=userEmail;
    userPhoneResult.innerHTML=userPhone;
  console.log(userEmail,userPhone,userName);

   var x = document.getElementById("before");
   var y = document.getElementById("after");
   if (x.style.display ==="none") {
     x.style.display = "block";
     x.style.opacity="1";
     y.style.display = "none";
     y.style.opacity = "0"
       } else {
      x.style.display = "none";
      y.style.display = "block";
      y.style.opacity = "0";
       }
}