<?php
    include 'includes/header.php';
?>
<?php
        //get data from DB
        $state  = "insert";
        if(isset($_GET["report_id"])){
        $report_id = $_GET["report_id"];
        $query  = "SELECT * FROM tbl_reports_205 where rep_num=" . $report_id;
        $result = mysqli_query($connection, $query);

        if($result) {
            $row    = mysqli_fetch_assoc($result); 
            $address_array = explode('+',$row['address']);
            $city = $address_array[0];
            $street_name = $address_array[1];
            $street_num = $address_array[2];
            $apartment = $address_array[3];
    
            $state  = "edit";
        }
    }
        $title = $state == 'insert' ? 'Add a New Report' : 'Edit a Report';

?>
        <form action="includes/save_report.php" method="POST" autocomplete="on">
            <main>
                <div id="arrange">
                    <br>
                    <article>
                        <h4><?php echo $title ?></h4>
                        <br>
                        <br>
                        <select name="severity" class="form-control">
                            <option <?php  if(isset($row['severity'])){if($row['severity'] == 1) echo 'selected';} ?> value="1">minor</option>
                            <option <?php  if(isset($row['severity'])){if($row['severity'] == 2) echo 'selected';} ?> value="2">moderate</option>
                            <option <?php  if(isset($row['severity'])){if($row['severity'] == 3) echo 'selected';}?> value="3">critical</option>
                        </select>
                        <br>
                        <label for="date">Date (DD.MM.YY), Start Hour (HH:MM): </label>
                        <input id="size_date" value="<?php  if(isset($row["date"])){echo $row['date'].'T'.$row['start_hour'];} ?>" class="form-control" type="datetime-local" name="datetime" required></textarea>
                        <br>
                        <label for="street">Street Name: </label>
                        <input id="size_name" value="<?php  if(isset($street_name)){echo $street_name;}?>" class="form-control" type="text" name="street" pattern="[A-Za-z]{2,}" title="Street name must contain only letters and minimum 2 letters" required>
                        <br>
                        <label for="streetnum">Street Number: </label>
                        <input id="size_st" value="<?php if(isset($street_num)){echo $street_num;} ?>" class="form-control" type="tel" name="streetnum" pattern="[0-9]{1,3}" title="Street Number must be between 1-3 digits" required>
                        <br>
                        <label for="apartment">Apt. Number: </label>
                        <input id="size_apt" value="<?php if(isset($apartment)){echo $apartment;}  ?>" class="form-control" type="text" name="apartment" pattern="[0-9]{1,2}" title="Apartment must contain only digits and at least 1 digit and maximum 2 digits" required>
                        <label for="city">City: </label>
                        <input id="size_city" value="<?php  if(isset($apartment)){echo $city;}     ?>" class="form-control" type="text" name="city" pattern="[A-Za-z]{2,}" title="City must contain only letters and minimum 2 letters" required>
                        <br>
                    </article>
                    <article>
                        <label for="details">Details: </label>
                        <textarea class="form-control" value="<?php if(isset($row['details'])){echo $row['details'];}?>" name="details" rows="4" columns="60" required><?php if(isset($row['details'])){echo trim($row['details']);}    ?></textarea>
                        <br>
                        <label for="dog_name">Dog Name: </label>
                        <input id="size_name" class="form-control" value="<?php if(isset($row['dog_name'])){ echo $row['dog_name'];}?>" type="text" name="dog_name" pattern="[A-Za-z]{2,}" title="Dog name must contain only letters and minimum 2 letters" required>
                        <br>
                        <label id="none" for="more_info">Add Documents- Images, Recordings, Videos: </label>
                        <textarea class="form-control" name="more_info" rows="3" columns="60"><?php if(isset($row['dog_img'])) {echo $row['dog_img'];}?></textarea>
                        <br>
                        <input class="btn btn-primary" type="submit" value="Add Report">
                    </article>   
                </div>
            </main>
        </form>
    
<?php
        include 'includes/footer.php';
?>