<?php
    include 'includes/header.php';
?>

<?php
include 'includes/data_helpers.php';
include 'includes/DB.php';

$query = "SELECT address, dog_img, dog_name, severity, rep_num FROM tbl_reports_205 WHERE status='close' order by end_hour desc, date desc LIMIT 3";
$result = mysqli_query($connection, $query);   
// $row = mysqli_fetch_array($result);
mysqli_close($connection);
?>

            <main class="home-main">
                <article class="article-margin">
                <h3 class="home-title">Dogs rescued</h3>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block w-100" src="images/dog4.jpg" alt="First slide">
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="images/dog7.jpg" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="images/dog11.jpg" alt="Third slide">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>    
                <h2 class="page-title">3 Reports handled</h2>
                    <?php while($row = mysqli_fetch_array($result)) { ?>
                    <div class="report-line">
                        <img src=<?php if($row["severity"]==1) echo "images/warning.png";if($row["severity"]==2) echo "images/moderate.png";if($row["severity"]==3) echo "images/minor.png";?> alt='critical' title='critical'>
                        <div class="report-line-text">
                            <p>#<?php echo $row["rep_num"]?></p>
                            <?php echo db_format_to_display_format($row["address"])?>
                        </div>
                    </div>
                    <?php } ?>

                    <?php
                        include 'includes/report_warning_types.php';
                    ?>

                    
                </article>
            </main>

    

<?php
    include 'includes/footer.php';
?>
