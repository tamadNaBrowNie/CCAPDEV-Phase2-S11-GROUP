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
     
        
}) 
*/
$(function () {
    $("#login").click();
    $(".form-Reg").submit(function () {
            
        var User = {
            Name:String, Password:String
        }
    
        User.Name = $("#tName").val();
        User.Password = $("#pPassword").val();
        var sUser = JSON.stringify(User);
    
        console.log(sUser);
            
    })

});