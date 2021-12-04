$(document).onload = function () {
    var User = {
        Name, Password
    }
    function getUser() {
 
        User.Name = $("#tName").val();
        User.Password = $("#tPassword").val();
        alert("Processing");
    $("#display").html(User.Name + " " + User.Password);
        }
        
    $("#submit").click(getUser());
}


