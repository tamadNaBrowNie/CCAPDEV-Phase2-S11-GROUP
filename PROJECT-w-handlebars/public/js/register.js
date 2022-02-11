$(() => {//this is short-shorthand for $(document).ready(function() {})
    
    var User = {
        Name: String, Password: String
    };
    $('#getRegistered').click(()=>{ $('#regDiv').show();})
    $('.cancel, .close').click(() => { $('#regDiv').hide(); });
    $('.modal').click((modal) => {
        if ($(modal.target).is('.modal')) {
            $('.modal').hide();
        }
    });
    $('[name = "submit"]').click(() => {
        User.Name = $('#userName').val();
        User.Password = $('#passWord').val();
        $.post('localhost:3000', User).done((res) => {"you are now registered" + res})
    })
/*TODO
    if we need extra logic for none http things, this is where we put it.
*/
});