<?php
    include 'includes/header.php';
?>

<?php
include 'includes/data_helpers.php';
include 'includes/DB.php';

$query = "SELECT * FROM tbl_reports_205 WHERE (rep_num=\"".$_GET['report_id']."\")";
$result = mysqli_query($connection, $query);   
$row = mysqli_fetch_array($result);
mysqli_close($connection);
?>

            <main class="current-report">
                <div id="arrange">
                    <article>
                        <div class="current-report-header">
                            <h2 class="page-title">Report #<?php echo $row["rep_num"]?></h2>
                            <p><span><?php echo $row["date"]?></span></p>
                        </div>
                        <p><?php echo db_format_to_display_format($row["address"])?></p>
                        <div class="hours-container">
                            <p><span class="hours-text">Start hour: </span><?php echo $row["start_hour"]?></p>
                            <p><span class="hours-text">End hour: </span> <?php echo $row["end_hour"]?></p>
                        </div>
                        <p class="details"><?php echo $row["details"]?></p>
                    </article>
                    <article>
                    <img class="dog" src=<?php echo $row["dog_img"]; ?> title="dog" alt="dog">
                    <p class="name_dog"><?php if($row["dog_name"]){echo $row["dog_name"];}else{echo "street dog";}?> &#10084;</p>
                    </article>
                </div>
            </main>
    
<?php
    include 'includes/footer.php';
?>
