"use strict";

$('[id = addToCart]').click(function(){
    var selectId = $(this);
    var token = $(this).attr('data-token');
    var from  = $(this).attr('data-to');
    var id    = $(this).attr('rel');
    var hunt = $(this).attr('ti');
    var data = 'id='+id+'&product='+from+'&token='+token;
    $.ajax({
       url:  baseUrl+'shop-cart/add-cart-shop',
       data: data,
       type: 'POST',
       beforeSend: function(){
           selectId.html('<i class="la la-spinner fa-spin"></i>');
       },success: function(e){
           var json = $.parseJSON(e);
           showSwal(json.title , json.desc , json.type);
           update_cart_count(token);
           selectId.html('<i class="mdi mdi-shopping"></i> '+hunt);
       }
    });
});

$('[id = changeQuantity]').change(function(){
    var id    = $(this).attr('rel');
    var token = $(this).attr('data-token');
    var from  = $(this).attr('data-to');
    var val   = $(this).val();
    if(val == 0){
        return false;
    }
    $.ajax({
       url:  baseUrl+'Shop_cart/change-product-quantity',
       data: 'id='+id+'&val='+val+'&cart='+from+'&token='+token,
       type: 'POST'
       ,success: function(r){
           console.log(r);
       }
    });
    return false;
});

function update_cart_count(token){
    var cart = $('#cart-count');
    $.ajax({
       url:  baseUrl+'shop-cart/cart-shop-count',
       data: 'token='+token,
       type: 'POST'
       ,success: function(e){
            if($('#MyCart').hasClass('active')){
                cart.html(e);
            }else{
                cart.html(e);
                $('#MyCart').fadeIn(300);
            }
       }
    });
}


function showSwal(title , desc , type){
    swal({
        title: title,
        text: desc,
        timer: 1500,
        type: type,
        showConfirmButton: false,
    }).then(
        function () {
        },
        function (dismiss) {
            if (dismiss === 'timer') {

            }
        }
    );
}

$('.sp-wrap').smoothproducts();
