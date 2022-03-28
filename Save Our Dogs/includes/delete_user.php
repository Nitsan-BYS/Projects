 <?php 
        include 'includes/DB.php';

        if(isset($_POST['delete'])){
                    if($_POST["confirm"] == "yes"){
                        $query = "DELETE FROM `tbl_users_205` WHERE user_id =$userID";
                        $result = mysqli_query($connection, $query);
                        if($result){
                            header('Location:login.php');
                        }
                    }
                }