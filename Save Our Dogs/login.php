<?php
include 'includes/login.php';
?>
<!DOCTYPE html>
<html>

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/login_signup.css">
    <title>Welcome</title>
</head>

<body>
    <div id="wrapper">
        <form action="#" method="post" autocomplete="on" id="login_form"></form>
        <header>
            <a href="#" id="logo"></a>
        </header>

        <main class="login-signup">
            <label>Username:</label>
            <input form="login_form" class="form-control" type="text" name="username">

            <label>Password:</label>
            <input form="login_form" class="form-control" type="password" name="pass">

            <?php
            if (isset($_GET["error"])) {
                switch ($_GET["error"]) {
                    case 'wronglogin':
                        echo '<p class="alert alert-danger" role="alert">User does not exists!</p>';
                        break;
                }
            }
            ?>

            <div class="form-action-buttons">
                <a href="sign_up.php">Sign Up</a>
                <input form="login_form" class="btn btn-primary" type="submit" value="Sign In" name="submit">
            </div>

            <div id="background"></div>
        </main>
        </form>
    </div>

    <?php
    include 'includes/footer.php';
    ?>