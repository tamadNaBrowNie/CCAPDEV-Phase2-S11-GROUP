
$(() => {
    $('#login').attr('method', 'post');
    $('#login').attr('action', 'foo');
    $(".reg-Form").submit(() => {
        var url = 'http://localhost:3000';
        var User = {
            Name: String, Password: String
        };

        User.Name = $("#tName").val();
        User.Password = $("#pPassword").val();
        var sUser = JSON.stringify(User);
        /*TODO render home.hbs with response from POSTing sUser*/
        $.get(url, sUser,
            function (data, textStatus, jqXHR) {
                
            },
            "json"
        );('http://localhost:3000', sUser, $('window').attr('location',url),'json'

        )

    });
})