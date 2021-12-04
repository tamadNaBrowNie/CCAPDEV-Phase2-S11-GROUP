function getUser() {
 
var User = {
    Name, Password
}

User.Name = $("#tName").val();
User.Password = $("#tPassword").val();
    alert("Processing");
}

$("#login").submit(getUser());