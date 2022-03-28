<?php
    include 'includes/header.php';
    include 'includes/data_helpers.php'
?>
<?php
    include 'includes/DB.php';
    $query = "SELECT * FROM tbl_reports_205";
    $result = mysqli_query($connection, $query);
    $rows = mysqli_fetch_array($result);
     mysqli_close($connection);
?>
            <main class="reports-list">                    
                <article class="article-margin">
                    <div>
                        <div class="reports-header">
                            <div class="mobile-add-report-container">
                                <!-- container for mobile add new report icon -->
                                <h2 class="page-title">Reports List</h3>
                                <a class="mobile-add-report" href="reportform.php">
                                    <span class="add-report-button"></span>
                                </a>
                            </div>
                            <input type="text" id="myInput" class="search-input myInput" placeholder="Search" title="Search">
                        </div>

                        <div class="desktop-warning-types">
                            <?php
                                include 'includes/report_warning_types.php';
                            ?>
                        </div>

                        <a class="desktop-add-report add-report-container" href="reportform.php">
                            <span class="add-report-text">Add New Report</span>
                            <span class="add-report-button"></span>
                        </a>
                    </div>

                        <table class="gray-table reports-table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" class="table-active">Report</th>
                                    <th scope="col" class="table-active">Date</th>
                                    <th scope="col" class="table-active">Address</th>
                                    <th scope="col" class="table-active">Severity</th>
                                    <th scope="col" class="table-active"><?php if($user_role=="Patrolman") {echo "View/Edit/Delete/Close";} else {echo "View";} ?></th>
                                </tr>
                            </thead>

                            <tbody id="myTable">
                                <?php while($row = mysqli_fetch_array($result)) { ?>
                                    <tr class="desktop-table-row">
                                        <td><?php echo $row["rep_num"] ?> </td>
                                        <td><?php echo $row["date"] ?> </td>
                                        <td class="address"><?php echo db_format_to_display_format($row["address"]) ?></td>
                                        <td>
                                            <div class= <?php if($row["severity"]==3){ echo '"warning"';} if($row["severity"]==2){ echo '"moderate"';} if($row["severity"]==1){echo '"minor"'; }?> ></div></a>
                                        </td>
                                        <td>
                                            <div class="report-line-actions">
                                                <a href="current_report.php?report_id=<?php echo $row["rep_num"] ?>">
                                                    <div class="view"></div>
                                                </a>
                                                
                                                <?php if($user_role=="Patrolman"){ echo
                                                "<a href='reportform.php?report_id=". $row["rep_num"] ."'>
                                                    <div class='edit'></div>
                                                </a>
                                                </a>
                                                <a href='includes/delete_report.php?report_id=". $row["rep_num"] ."'>
                                                    <div class='delete'></div>
                                                </a>"; } ?> <?php if($user_role=="Patrolman" && $row["end_hour"]=="00:00:00"){ echo
                                                "<a href='includes/close_report.php?report_id=". $row["rep_num"] ."'>
                                                    <div class='close'></div>
                                                </a>"; } ?>

                                            </div>
                                        </td>
                                    </tr>
                                
                                    <tr class="mobile-table-row">
                                        <td class="mobile-table-cell">
                                            <div>
                                                <div class= <?php if($row["severity"]==3){ echo '"warning"';} if($row["severity"]==2){ echo '"moderate"';} if($row["severity"]==1){echo '"minor"'; }?> ></div></a>
    
                                                <div class="text-container">
                                                    <span>
                                                        #<?php echo $row["rep_num"] ?>
                                                        <span> <?php echo $row["date"] ?> </span>
                                                    </span>

                                                    <span class="address"><?php echo db_format_to_display_format($row["address"]) ?></span>
                                                </div>
                                            </div>

                                            <div class="report-line-actions">
                                                <a href="current_report.php?report_id=<?php echo $row["rep_num"] ?>">
                                                    <div class="view"></div>
                                                </a>
                                                
                                                <?php if($user_role=="Patrolman"){ echo
                                                "<a href='reportform.php?report_id=". $row["rep_num"] ."'>
                                                    <div class='edit'></div>
                                                </a>
                                                </a>
                                                <a href='includes/delete_report.php?report_id=". $row["rep_num"] ."'>
                                                    <div class='delete'></div>
                                                </a>"; } ?> <?php if($user_role=="Patrolman" && $row["end_hour"]=="00:00:00"){ echo
                                                "<a href='includes/close_report.php?report_id=". $row["rep_num"] ."'>
                                                    <div class='close'></div>
                                                </a>"; } ?>
                                            </div>
                                        </td>
                                    </tr>
                                <?php } ?>
                            </tbody>

                        </table>

                        <div class="mobile-warning-types">
                            <?php
                                include 'includes/report_warning_types.php';
                            ?>
                        </div>
                    </div>
                </article>
            </main>

<?php
        include 'includes/footer.php';
?>