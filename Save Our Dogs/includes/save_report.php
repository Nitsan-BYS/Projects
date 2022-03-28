<?php
include 'DB.php';
include 'data_helpers.php';

$datetime = $_POST['datetime'];
$datetime_array = datetime_to_date_and_time($datetime);
$date = $datetime_array[0];
$start_hour = $datetime_array[1];

$address = mysqli_real_escape_string($connection, db_format_address($_POST['city'],$_POST['street'],$_POST['streetnum'],$_POST['apartment'])) ;
$details = mysqli_real_escape_string($connection,$_POST['details']);
$dog_img = mysqli_real_escape_string($connection,$_POST['more_info']);
$dog_name = mysqli_real_escape_string($connection,$_POST['dog_name']);
$severity = mysqli_real_escape_string($connection,(int)$_POST['severity']);
$report_id = $_GET['report_id'];

if (isset($report_id)) {
    $query = "UPDATE `tbl_reports_205` SET date='$date', address='$address',start_hour='$start_hour',details='$details',dog_img='$dog_img',dog_name='$dog_name',severity='$severity' WHERE rep_num='$report_id'";
} else {
    $query = "INSERT INTO `tbl_reports_205` (`date`, `address`,`start_hour`,`details`,`dog_img`,`dog_name`,`severity`) VALUES ('".$date."','".$address."','".$start_hour."','".$details."','".$dog_img."','".$dog_name."',".$severity.")";
}
$result = mysqli_query($connection, $query);
if(!$result){
    die('db query failed!');
}

mysqli_close($connection);

header('Location: ../index.php');
