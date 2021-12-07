$(() => {//this is short-shorthand for $(document).ready(function() {})
    
    $('body').on('click', '#getRegistered',function () {
        $('#regDiv').css('display', 'block');        
    });
    $('.cancel, #regDiv,.close').click(()=>{ $('#regDiv').hide(); });
});