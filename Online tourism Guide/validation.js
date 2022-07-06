// JavaScript Document
function showalert()
{
 var uid=document.getElementById("userid").value;
 var upasswd=document.getElementById("passwd").value;
 if(uid=="")
 {
   alert("Fill user id");
   document.getElementById("userid").focus();
   return false;
  }
 if(upasswd=="")
 {
  alert("Fill password");
   document.getElementById("passwd").focus();
   return false;
 }
 
}

//registration validatoin
function registration_validation()
{
 var name=document.getElementById("name").value;
 var fname=document.getElementById("fname").value;
  var dob=document.getElementById("dob").value;
   var address=document.getElementById("address").value;
 var phone=document.getElementById("phone").value;
 var status=document.getElementById("status").value;
			
 if(name=="")
 {
   alert("Fill name");
   document.getElementById("name").focus();
   return false;
  }
 if(fname=="")
 {
  alert("Fill fname");
   document.getElementById("fname").focus();
   return false;
 }
 
 if(dob=="")
 {
  alert("Fill Date of Birth");
   document.getElementById("dob").focus();
   return false;
 }
 
 if(address=="")
 {
  alert("Fill address");
   document.getElementById("address").focus();
   return false;
 }
 if(phone=="")
 {
  alert("Fill phone no");
   document.getElementById("phone").focus();
   return false;
 }
 
}