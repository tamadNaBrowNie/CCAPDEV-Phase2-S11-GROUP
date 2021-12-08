$(() => {//this is short-shorthand for $(document).ready(function() {})
    $('#getRegistered').click(()=>{ $('#regDiv').show();})
    $('.cancel, .close').click(() => { $('#regDiv').hide(); });
    $('.modal').click((modal) => {
        if ($(modal.target).is('.modal')) {
            $('.modal').hide();
        }
    });

});