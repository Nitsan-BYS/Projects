<?php

function login_user($connection,$username,$password){
    $query = "SELECT * FROM tbl_users_205 WHERE (user_name=\"".$username."\" AND password=\"".$password."\")";
    $result = mysqli_query($connection, $query);
    $row = mysqli_fetch_array($result);
    if (is_array($row)) {
        session_start();
        $_SESSION["id"] = $row["user_id"];
        $_SESSION["pass"] = $row["password"];
        $_SESSION["image"] = $row["image"];
        mysqli_close($connection);
        header("Location: index.php");
        exit();
    } else {
        header('Location: ../login.php?error=wronglogin');
        exit();
    }
}