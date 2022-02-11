
$(() => {
    $('#login').attr('method', 'post');
    $('#login').attr('action', 'foo');
    $(".reg-Form").submit(() => {
        var url = 'http://localhost:3000/main';
        var User = {
            Name: String, Password: String
        };

        User.Name = $("#tName").val();
        User.Password = $("#pPassword").val();
        var sUser = JSON.stringify(User);
        /*TODO render home.hbs with response from POSTing sUser*/
        $.post('http://localhost:3000', sUser, $('window').attr('location',url),'json'

        )

    });
})
