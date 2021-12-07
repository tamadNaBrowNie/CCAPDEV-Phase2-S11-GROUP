$(() => {
    
    $('body').on('click', '#getRegistered',function () {
        $('#regDiv').css('display', 'block');        
    });
    $('.cancel, #regDiv,.close').click(()=>{ $('#regDiv').hide(); });
});