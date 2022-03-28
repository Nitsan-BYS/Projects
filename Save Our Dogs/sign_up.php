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
    <title>sign-in</title>
</head>

<body>
    <div id="wrapper">
        <form action="includes/signup.php" method="post" autocomplete="on" id="signup_form"></form>
        <header>
            <a href="#" id="logo"></a>
        </header>

        <main class="login-signup">
            <label>Username:</label>
            <input form="signup_form" class="form-control" type="text" name="username" required>

            <label>Email:</label>
            <input form="signup_form" class="form-control" type="email" name="mail" required>

            <label>Phone:</label>
            <input form="signup_form" class="form-control" type="tel" name="phone" required>

            <label>Password:</label>
            <input form="signup_form" class="form-control" type="password" name="pass" required>

            <label>Choose Role:</label>

            <select form="signup_form" name="roles" class="form-control">
                <option value="Volunteer">Volunteer</option>
                <option value="Patrolman">Patrolman</option>
            </select>

            <?php
                if(isset($_GET["error"])){
                    switch($_GET["error"]){
                        case 'emptyinput':
                            echo '<p class="alert alert-danger" role="alert">Please fill all fields!</p>';
                            break;
                        case 'userexists':
                            echo '<p class="alert alert-danger" role="alert">User already exists!</p>';
                            break;
                        case 'none':
                            echo '<p class="alert alert-success" role="alert">You have signed up!</p>';
                            break;
                    }
                }
            ?>

            <div class="form-action-buttons">
                <a href="login.php">Sign In</a>
                <input form="signup_form" class="btn btn-primary" type="submit" value="Sign Up" name="submit">
            </div>

            <div id="background"></div>
        </main>
        
        </form>
    </div>

<?php
        include 'includes/footer.php';
?>

