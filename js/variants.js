$( document ).ready(function() {
    $('#variants').change( function(e){
        $('.product-item').hide();
        $('#'+this.value).show();
    });
});
