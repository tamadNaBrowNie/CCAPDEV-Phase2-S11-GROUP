/*$(document).ready(function () {
  
    $("#login").click(function() {
            
        var User = {
            Name:String, Password:String
        }
    
        User.Name = $("#tName").val();
        User.Password = $("#pPassword").val();
        var sUser = JSON.stringify(User);
    
        console.log(sUser);
        
    });
     
        //code by Shawn Aberin
}) 
*/
$(function () {
    
    $(".reg-Form").submit(() => {

            var User = {
                Name: String, Password: String
            };

            User.Name = $("#tName").val();
            User.Password = $("#pPassword").val();
            var sUser = JSON.stringify(User);

            alert(sUser);

        })

});