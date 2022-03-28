<?php
include 'DB.php';
include 'login_helpers.php';

if (isset($_POST["submit"])) {
    $username = $_POST["username"];
    $password = $_POST["pass"];
    login_user($connection,$username,$password);
}