
$(() => {
    $('#login').attr('method', 'post');
    $('#login').attr('action', 'foo');
    $(".reg-Form").submit(() => {

            var User = {
                Name: String, Password: String
            };

            User.Name = $("#tName").val();
            User.Password = $("#pPassword").val();
            var sUser = JSON.stringify(User);
/*TODO once we use an http in html, might remove the .submit  portion*/
            alert(sUser);

        })

});