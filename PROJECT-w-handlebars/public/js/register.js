
$(() => {//this is short-shorthand for $(document).ready(function() {})

    var User = {
        Name: String, Password: String, Email: String
    };

  
    $('#getRegistered').click(()=>{ $('#regDiv').show();})
    $('.cancel, .close').click(() => { $('#regDiv').hide(); });
    $('.modal').click((modal) => {
        if ($(modal.target).is('.modal')) {
            $('.modal').hide();
        }
    });
    $('.reg-Form').submit(() => {
        User.Name = $('#userName').val();
        User.Password = $('#passWord').val();
        User.Email = $('#eMail').val();
$.post('localhost:3000/submit-user', User, 'json');
    })

/*TODO
    if we need extra logic for none http things, this is where we put it.
*/
});