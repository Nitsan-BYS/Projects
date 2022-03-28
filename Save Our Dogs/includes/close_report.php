<?php

include 'DB.php';
$report_id = $_GET['report_id'];
$query = "UPDATE tbl_reports_205 SET end_hour= current_time, status='close' WHERE rep_num='$report_id';";

$result = mysqli_query($connection, $query);
if(!$result){
    die('db query failed!');
}
mysqli_close($connection);
header('Location: ../reportlist.php');