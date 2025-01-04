<?php

$sever ="localhost";
$username ="root";
$password ="";
$dbname ="create-fb";


$con = mysqli_connect($sever,$username,$password,$dbname);

if(!$con)
{
    echo "not connected"
}

else
{
 echo "connected"
}
?>