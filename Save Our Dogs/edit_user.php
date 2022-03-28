<?php
include 'includes/header.php';

?>
<?php
include 'includes/DB.php';
$query = "SELECT * FROM tbl_users_205 WHERE user_id=" . $user_id;
$result = mysqli_query($connection, $query);
$row = mysqli_fetch_array($result);
$userID = $row["user_id"];
$username = $row["user_name"];
$password = $row["password"];
$email = $row["email"];
$phone = $row["phone"];
mysqli_close($connection);

?>

<script>
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$('#submit').click(function(){
    console.log()
    $('#edit-user-form').submit();
});
</script>

    <main class="edit-user">
        <?php echo '<form id="edit-user-form" action="includes/update_user.php?user_id='.$user_id.'" method="POST" autocomplete="on">' ?>
        <section>
                <section id="arrange1">
                    <h2 class="page-title">Edit User <?php echo $user_name?></h2>
                    <label class="optional">User Name:</label>
                    <input type="text" class="form-control" name="username" value="<?php echo $username;?>" required>
                    <label class="optional">Password:</label>
                    <input  class="form-control" name="password" value="<?php echo $password;?>" required>
                    <label class="optional">Email:</label>
                    <input type="email" class="form-control" name="mail" value="<?php echo $email;?>" required>
                    <label class="optional">Phone:</label>
                    <input type="tel" class="form-control" name="phone" value="<?php echo $phone;?>" required>
                    <label class="optional">Change Profile Image:</label>
                    <textarea class="form-control" name="changepic" rows="2" cols="5"></textarea>

                    <div class="form-actions-container">
                        <input class="btn btn-primary no-margin" type="submit" name="submit" value="save">

                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                            Delete
                        </button>
                    </div>
                </section>
            </section> 

            <!-- Delete User Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h5 class="modal-title">Are you sure you want to delete this user?</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button id="submit" class="btn btn-danger" type="submit">Delete</button>
                        </div>
                    </div>
                </div>
            </div>  
        </form> 


    </main>
    
<?php
    include 'includes/footer.php';
    ?>