<?php 
        include 'DB.php';
        $user_id = $_GET['user_id'];

        if( $_POST['submit'] == 'save'){
            $username = $_POST['username'];
            $password = $_POST['password'];
            $email = $_POST['mail'];
            $phone = $_POST['phone'];
            $query = "UPDATE `tbl_users_205` SET user_name='$username', password='$password',email='$email',phone='$phone' WHERE user_id='$user_id'";
            $result = mysqli_query($connection, $query);
            

            if(!$result){
                die('db query failed!');
            }

            mysqli_close($connection);
            header('Location: ../index.php');
        }

        // delete method === empty
        if($_POST['submit']==''){
                $query = "DELETE FROM `tbl_users_205` WHERE user_id =$user_id";
                $result = mysqli_query($connection, $query);
                header('Location: ../login.php');

                // if($result){
                    // session_start();
                    // session_unset();
                    // session_destroy();
                // }
        }
?>