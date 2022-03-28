<?php

include 'DB.php';
// if($user_role=="Patrolman"){
    $report_id = $_GET['report_id'];
    //todo - check if user have delete permissions
    $query = "DELETE FROM tbl_reports_205 WHERE rep_num='$report_id';";

    $result = mysqli_query($connection, $query);
    if(!$result){
        die('db query failed!');
    }
// }

mysqli_close($connection);

header('Location: ../reportlist.php');