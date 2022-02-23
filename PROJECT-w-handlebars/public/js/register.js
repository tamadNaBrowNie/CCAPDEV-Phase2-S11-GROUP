
$(() => {//this is short-shorthand for $(document).ready(function() {})
    var form = '.reg-Form';



    $('#getRegistered').click(() => { $('#regDiv').show(); })
    $('.cancel, .close').click(() => { $('#regDiv').hide(); });
    $('.modal').click((modal) => {
        if ($(modal.target).is('.modal')) {
            $('.modal').hide();
        }
    });
    $('#bSub').click((e) => {
        
        pw = $('#passWord').val();
        cpw = $('#confirmPW').val();
        if (pw !== cpw) {
            e.preventDefault();
            alert("Passwords do not match");
            $(form).trigger("reset");
        }
        else { 
            $(form).trigger('submit');
        } 


        /*TODO
            if we need extra logic for none http things, this is where we put it.
        */
    });

})
