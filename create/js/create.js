 
 function dt (){

 var a =document.getElementById("name").value
 var b =document.getElementById("surname").value
 var c =document.getElementById("phn").value
 var d =document.getElementById("pass").value
 



 if(a==""){
    alert("Please fill the from");
    return false;
 }
 else if(b==""){
    alert("What is Your SurName");
    return false;
 }
 else if(c ==""){
    alert("Please Enter Your Number or Phone no");
    return false;
 }
 else if(d.length<12 || d.length>12)
{
  alert("Please Enter 12 digits Password");
  return false;
}
 
 else{
     true;
 }




 }
 