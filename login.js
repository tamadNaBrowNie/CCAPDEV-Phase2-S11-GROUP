$("document").ready = function () {
    
$("#submit").click(function() {
        
    var User = {
        Name:String, Password:String
    }

    User.Name = $("#tName").val();
    User.Password = $("#tPassword").val();
    alert("Processing");

    console.log(User.Name + " " + User.Password);
    
});
 
    
}
    

function getUser() {
        
        var User = {
            Name:String, Password:String
        }
    
        User.Name = $("#tName").val();
        User.Password = $("#tPassword").val();
        alert("Processing");
    
        console.log(User.Name + " " + User.Password);
        }