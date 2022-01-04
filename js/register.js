$(() => {//this is short-shorthand for $(document).ready(function() {})
    $('#getRegistered').click(()=>{ $('#regDiv').show();})
    $('.cancel, .close').click(() => { $('#regDiv').hide(); });
    $('.modal').click((modal) => {
        if ($(modal.target).is('.modal')) {
            $('.modal').hide();
        }
    });
/*TODO
    once we know how to do the server, we need to add the info here to server.
*/
});