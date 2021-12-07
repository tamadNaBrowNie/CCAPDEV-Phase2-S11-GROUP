$(() => {//this is short-shorthand for $(document).ready(function() {})
    $('#getRegistered').click(()=>{ $('#regDiv').show();})
    $('.cancel, .close').click(() => { $('#regDiv').hide(); });
    
    $('body').on('click', '.modal', () => {$('#regDiv').hide();});
    $('.modal').click((modal) => {
        if (modal.target !== this) {
            $('#regDiv').hide();
        }
    })
});