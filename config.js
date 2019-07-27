// $(function() {
	simpleCart({

	    // array representing the format and columns of the cart, see
	    // the cart columns documentation
	    cartColumns: [
	        { attr: "name" , label: "Name" },
	        { attr: "price" , label: "Price", view: 'currency' },
	        { view: "decrement" , label: false },
	        { attr: "quantity" , label: "Qty" },
	        { view: "increment" , label: false },
	        { attr: "total" , label: "SubTotal", view: 'currency' },
	        { view: "remove" , text: "Remove" , label: false }
	    ],

	    // "div" or "table" - builds the cart as a table or collection of divs
	    cartStyle: "div",

	    // how simpleCart should checkout, see the checkout reference for more info
	    checkout: {
	        type: "SendForm",
	        url: "mail.php",
	        method: "POST",
	        success: "thankyou.html",
	        cancel: "cancel.php"
	        // extra_data:{
	        // 	fullname: document.getElementById("fullname").value,
        	// 	email: document.getElementById("email").value,
        	// 	phone: document.getElementById("phone").value,
        	// 	usage: document.getElementById("usage").value,
        	// 	message: document.getElementById("message").value
	        // }
	    }

	});

// simpleCart.bind( 'beforeCheckout' , function( data ){
// data.fullname = document.getElementById("fullname").value;
// data.email = document.getElementById("email").value;
// data.phone = document.getElementById("phone").value;
// data.usage = document.getElementById("usage").value;
// data.message = document.getElementById("message").value;
// console.log(data)
// });



// });

// simpleCart.bind( 'beforeCheckout' , function( data ){
// 	data.full_name = document.getElementById("fullname").value;
// 	data.email = document.getElementById("email").value;
// 	data.phone = document.getElementById("phone").value;
// 	data.usage = document.getElementById("usage").value;
// 	data.message = document.getElementById("message").value;
// });



// (function ($) {
//     'use strict';
//     var form = $('.request__form'),
//         message = $('.contact__msg'),
//         form_data;
//     // Success function
//     function done_func(response) {
//         message.fadeIn().removeClass('alert-danger').addClass('alert-success');
//         message.text(response);
//         setTimeout(function () {
//             message.fadeOut();
//         }, 2000);
//         form.find('input:not([type="submit"]), textarea').val('');
//     }
//     // fail function
//     function fail_func(data) {
//         message.fadeIn().removeClass('alert-success').addClass('alert-success');
//         message.text(data.responseText);
//         setTimeout(function () {
//             message.fadeOut();
//         }, 2000);
//     }
    
//     form.submit(function (e) {
//         e.preventDefault();
//         form_data = $(this).serialize();
//         $.ajax({
//             type: 'POST',
//             url: form.attr('action'),
//             data: form_data
//         })
//         .done(done_func)
//         .fail(fail_func);
//     });
    
// })(jQuery);


// $(".myBtn").on("click", function() {
//   var modal = $(this).data("modal");
//   $(modal).show();
// });

// $(".modal").on("click", function(e) {
//   var className = e.target.className;
//   if(className === "modal" || className === "close"){
//     $(this).closest(".modal").hide();
//   }
// });




