<?php

function empty_input($username,$email,$phone,$pass,$role){
    return false;
}

function user_exists($connection, $email){
    $email = $_POST["mail"];
    $query = "SELECT * FROM tbl_users_205 WHERE (email = '".$email."')";
    $result = mysqli_query($connection, $query);
    if(mysqli_num_rows($result) > 0){
        return true;
    }
    return false;
}

function create_user($connection,$username,$email,$phone,$pass,$role,$image){

    // if no image inserted by user, make sure to send null value to DB, so it will assign a default image
    $img = $image ? $image : null;

    //Create user
    $query = "INSERT INTO tbl_users_205 (user_name, email, phone, password, user_role, image) VALUES ('$username', '$email', '$phone', '$pass', '$role', '$img')";
    $result = mysqli_query($connection, $query);
    mysqli_close($connection);

    header('Location: ../sign_up.php?error=none');
    exit();

}