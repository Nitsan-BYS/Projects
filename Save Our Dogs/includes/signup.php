<?php

if(!isset($_POST['submit'])){
    header('Location: ../sign_up.php'); //in case the user did not submit the form properly - redirect to signup page
    exit();
}

$username = $_POST["username"];
$email = $_POST["mail"];
$phone = $_POST["phone"];
$pass = $_POST["pass"];
$role = $_POST["roles"];
$image = $role === "Volunteer"? "images/user-klahan.png" : "images/user2.png"; 

include_once 'DB.php';
include_once 'signup_helpers.php';

session_start();


if(empty_input($username,$email,$phone,$pass,$role,$image)){
    header('Location: ../sign_up.php?error=emptyinput');
    exit();
}

if(user_exists($connection,$email)){
    header('Location: ../sign_up.php?error=userexists');
    exit();
}

create_user($connection,$username,$email,$phone,$pass,$role,$image);

    
    
