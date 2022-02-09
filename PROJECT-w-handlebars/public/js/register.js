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
/*TODO
    if we need extra logic for none http things, this is where we put it.
*/
});