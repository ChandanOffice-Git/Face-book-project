function data()
{
var a =document.getElementById("user").value
var b =document.getElementById("pass").value

if(a=="")
{
  alert("The email or mobile number you entered is not associated with an account. Find your account and log in.");
  return false;
}
else if(b=="")
{
  alert("Please Enter the password");
  return false;
}
else if(b.length<10)
{
  alert("Please Enter 12 digits Password");
  return false;
}
else{
true;
}



}