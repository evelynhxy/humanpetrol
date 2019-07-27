



	//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
// $(".close").on("click", function() {
// 	  $(".kirin30pop, .kirin30content").removeClass("active");
// 	});

$(document).ready(function(){
  
    // $("div.hs.full").prepend(
    // 	$('<div>').addClass("card").append(
    // 		$('<div>').addClass('popup-overlay kirin30pop').append(
    // 			$('<div>').addClass('popup-content kirin30content').append(
    // 				$('<h2>').append('Pop-Up')).append(
    // 				$('<button>').addClass('close').append('Close')))).append(
    // 	$('<div>').addClass('simpleCart_shelfItem').append(
    // 		$('<img>').attr({src:"imgs/kirin.jpg", class: "item_thumb card-img-top kirin30"})).append(
    // 		$('<div>').addClass('card-body').append(
    // 			$('<div>').addClass('kirin30').append(
    // 				$('<p>').addClass('item_name').append('Kirin Ichiban Draught Beer 30L')).append(
    // 				$('<p>').addClass('item_volume').append('30-liter keg')).append(
    // 				$('<span>').addClass('item_price').append('$200'))).append(
    // 			$('<a>').attr({class:"item_add btn btn-outline-success btn-sm", href:"javascript:;", id:"kirin30add"}).text('Add to Cart')).append(
    // 			$('<a>').attr({class:"browse_list btn btn-outline-info btn-sm", id:"kirin30browse", href:"cart.html"}).text('Browse Request')).append(
    // 			$('<p>').attr({class:"prompt", id:"kirin30added"}).append('product added!')))
    // 	));

    var products = [];

    $.getJSON('products.json', function(data){
            $.each(data.product, function(i,f){
                products.push([f.name, f.price, f.volume, f.image, f.popupOverlay, f.popupContent, f.detailClass, f.add, f.browse, f.added]);
                $("div.hs.full").prepend(
                    $('<div>').addClass("card")
                    // .append(
                    //     $('<div>').addClass('popup-overlay ' + f.popupOverlay).append(
                    //         $('<div>').addClass('popup-content ' + f.popupContent).append(
                    //             $('<h2>').append('Pop-Up')).append(
                    //             $('<button>').addClass('close').append('Close'))))
                    .append(
                        $('<div>').addClass('simpleCart_shelfItem').append(
                            $('<img>').attr({src:"imgs/"+f.image, class: "item_thumb card-img-top "+f.detailClass})).append(
                            $('<div>').addClass('card-body').append(
                                $('<div>').addClass(f.detailClass).append(
                                    $('<p>').addClass('item_name').append(f.name)).append(
                                    $('<p>').addClass('item_volume').append(f.volume)).append(
                                    $('<span>').addClass('item_price').append(f.price))).append(
                                $('<button>').attr({type:"button", class:"btn btn-outline-secondary btn-sm", "data-toggle":"modal", "data-target":"#exampleModal", "data-sku": f.name, "data-img":"imgs/"+f.image, "data-volume": f.volume, "data-price": f.price, "data-add": f.add, "data-added": f.added}).text("Details")).append(
                                $('<a>').attr({class:"item_add btn btn-success btn-sm "+f.add, href:"javascript:;"}).text('Add to Cart')).append(
                                $('<a>').attr({class:"browse_list btn btn-outline-info btn-sm "+f.browse, href:"cart.html"}).text('Go to Cartk')).append(
                                $('<p>').attr({class:"prompt "+f.added}).append('product added!')))
                        )); 
            });
            
            $('#exampleModal').on('show.bs.modal', function (event) {

                var button = $(event.relatedTarget) 
                var sku = button.data('sku') 
                var img = button.data('img')
                var volume = button.data('volume')
                var price = button.data('price')

                var add = button.data('add')
                var added = button.data('added')

                
                console.log(add)
                console.log(added)

                var modal = $(this)
                modal.find('.information .item_name').text(sku)
                modal.find('.information img').attr("src", img)
                modal.find('.information .item_volume').text(volume)
                modal.find('.information .item_price').text(price)
                modal.find('.information .item_add').attr("class", "item_add btn btn-success btn-sm " + add)
                modal.find('.information .prompt').attr("class", "prompt " + added)
            }); 
            $(".item_add").on("click", function() {
                var $this = $(this)
                var div = $(this).parent().closest('div')
                var browse = $(this).parent().closest('div').find(".browse_list")
                var prompt = $(this).parent().closest('div').find('.prompt')
                var button = $(this).parent().closest('div').find('button')

                var add = $this.addClass("added")
                browse.addClass("active")
                prompt.addClass("active")
                
                button.attr({'data-add': add.attr('class'), 'data-added': prompt.attr('class')})
                

                    // $('#exampleModal').on('show.bs.modal', function (event) {
                    //   // div
                    //   // var button = div.find('button')
                    //   var button = $(event.relatedTarget)
                    //   var sku = button.data('sku') 
                    //   var img = button.data('img')
                    //   var volume = button.data('volume')
                    //   var price = button.data('price')
                    //   var add = button.data('add')
                    //   var added = button.data('added')

                    //   var modal = $(this)
                    //   modal.find('.information .item_name').text(sku)
                    //   modal.find('.information img').attr("src", img)
                    //   modal.find('.information .item_volume').text(volume)
                    //   modal.find('.information .item_price').text(price)
                    //   modal.find('.information .item_add').attr("class", "item_add btn btn-success btn-sm " + add)
                    //   modal.find('.information .prompt').attr("class", "prompt " + added)
                    // });
                }); 
    });

});

