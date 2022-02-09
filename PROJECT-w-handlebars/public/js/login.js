
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
        /*TODO render home.hbs with response from POSTing sUser*/
        $.post('ttp://localhost:3000', sUser, res.render(smth), 'json'

        )

    });
})