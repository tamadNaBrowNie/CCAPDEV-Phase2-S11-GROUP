
$(function () {
    
    $(".reg-Form").submit(() => {

            var User = {
                Name: String, Password: String
            };

            User.Name = $("#tName").val();
            User.Password = $("#pPassword").val();
            var sUser = JSON.stringify(User);
/*TODO
            instead of alert, gotta find a way to send sUser as http request.
*/
            alert(sUser);

        })

});