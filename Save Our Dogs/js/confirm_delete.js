function question_delete_user() {
    if (confirm('Are you sure you want to delete this user?')) {
        // Delete user
        document.getElementById("confirm").value = "yes";
    }
    else {
        document.getElementById("confirm").value = "no";
    }
}

document.getElementById("delete").onclick = question_delete_user();