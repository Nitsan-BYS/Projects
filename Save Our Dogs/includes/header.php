<?php 
    include_once 'DB.php';
    session_start();

	$id=$_SESSION["id"];
    //if it is the user entered to the system
	if(!isset($id)){
        header('Location:login.php');
    }
		$query= "SELECT * FROM tbl_users_205 WHERE user_id=$id";
		$result = mysqli_query($connection , $query);
		$row = mysqli_fetch_array($result);
		$user_id=$row["user_id"];
		$user_pass = $row["password"];
        $user_image = $row["image"];
        $user_name=$row["user_name"];
		$user_role = $row["user_role"];
		mysqli_free_result($result);

    $path = strtok($_SERVER["REQUEST_URI"], '?');
    $breadcrumb_name = '';
    switch ($path) {
        case '/index.php':
            $breadcrumb_name = 'Home';
            break;
        case '/reportlist.php':
            $breadcrumb_name = 'Reports';
            break;
        case '/shifts.php':
            $breadcrumb_name = 'Shifts';
            break;
    }
?>


<!DOCTYPE html>
<html>

<head>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='preconnect' href='https://fonts.gstatic.com'>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap' rel='stylesheet'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel='stylesheet' href='css/style.css'>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

    <script src="js/header.js" async></script>
    <script src="js/filter.js" async></script>
    <title></title>
</head>

<body>

    <div id='wrapper'>
    <header>
            <div class="spacer"></div>
            <a href='index.php' id='logo'></a>
            <div id='profile'>

                    <!--We will extract image according to the user who signed in -->
                    <img id='profile-image' class="dropbtn" src=<?php echo $user_image ?>>
                    <div id="myDropdown" class="dropdown-content">
                        <a id="bottomb" href="edit_user.php">Edit Profile</a>
                        <a href="includes/logout.php">Logout</a>
                    </div>
                    <h6>
                        Hi, <?php echo $user_name ?>
                    </h6>
            </div>
    </header>
    <aside>
            <div class='breadcrumb1'>
                <ul class='breadcrumb'>
                <?php
                   $path = strtok($_SERVER["REQUEST_URI"], '?');
                //    echo $path;
                   if (strpos($path,'/index.php') !== false) {
                       echo '<li>Home</li>';
                   }
                   
                   if (strpos($path,'/reportlist.php') !== false) {
                       echo '<li><a href="index.php">Home</a></li><li>Report List</li>';
                   }
                   
                   if (strpos($path,'/current_report.php') !== false) {
                       echo '<li><a href="index.php">Home</a></li><li><a href="reportlist.php">Report List</a></li><li>Current Report</li>';
                   }
                   if (strpos($path,'/shifts.php') !== false) {
                       echo '<li><a href="index.php">Home</a></li><li>Shifts</li>';
                   }
                   if (strpos($path,'/reportform.php') !== false) {
                       echo '<li><a href="index.php">Home</a></li><li><a href="reportlist.php">Report List</a></li><li>Report Form</li>';
                   }
                   if (strpos($path,'/edit_user.php') !== false){
                       echo '<li><a href="index.php">Home</a></li><li>Edit User</li>';
                   }
                ?>
                </ul>
            </div>
        </aside>
        <div class='responsive'>
        <?php
    $path = strtok($_SERVER["REQUEST_URI"], '?');
?>

<nav>
    <ul>
    
        <li id="<?php if (strpos($path,'/index.php') !== false) echo "selected2"; ?>">
            <a href="index.php"><img src='images/homelight.png'>
                <p>Home</p>
            </a>
        </li>
        <li id="<?php if (strpos($path,'/reportlist.php') !== false || strpos($path,'/current_report.php') !== false) echo "selected2"; ?>">
            <a href="reportlist.php">
                <img src='images/d.png'>
                <p>Reports List</p>
            </a></li>
        <li><a href="#"><img src='images/blacklistlight.png'>
                <p>Black List</p>
            </a></li>
            
            <li id="<?php if (strpos($path,'/shifts.php') !== false) echo "selected2"; ?>">
            <a href="shifts.php"><img src='images/shifts.png'>
                <p>Shifts</p>
            </a></li>
    </ul>
</nav>