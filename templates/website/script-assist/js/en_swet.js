/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
$('[id = deleteOrderFromCart]').click(function(){
    var selector = $(this);
    var id = $(this).attr('rel');
    var token = $(this).attr('data-token');
    var form = $(this).attr('data-form');
    var data = 'id='+id+'&token='+token+'&delete='+form;
    swal({
        title: 'Remove item from cart',
        text: "Are you sure to delete this item..?!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete!',
        cancelButtonText: 'Cancellation !',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger m-l-10',
        buttonsStyling: false
    }).then(function () {
        $.ajax({
           type: 'POST',
           data: data,
           url: baseUrl+'Shop_cart/delete-cart-item',
           success: function(e){
               var json = $.parseJSON(e);
               set_swal(
                    json.title,
                    json.desc,
                    json.type
                );
                selector.parent().parent().remove();
           }
        });
        
    }, function (dismiss) {
        if (dismiss === 'cancel') {
            swal(
                'cancel',
                'The deletion process has not been canceled',
                'error'
            );
        }
    });
});


function set_swal(title , desc , type){
    return swal(
            title,
            desc,
            type
    );
}