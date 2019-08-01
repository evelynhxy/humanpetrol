



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
                products.push([f.name, f.price, f.volume, f.image]);
                $("div.hs.full").prepend(
                    $('<div>').addClass("card").append(
                        $('<div>').addClass('simpleCart_shelfItem').append(
                            $('<img>').attr({src:"imgs/"+f.image, class: "item_thumb card-img-top "})).append(
                            $('<div>').addClass('card-body').append(
                                $('<div>').append(
                                    $('<p>').addClass('item_name').append(f.name)).append(
                                    $('<p>').addClass('item_volume').append(f.volume)).append(
                                    $('<span>').addClass('item_price').append(f.price))).append(
                                $('<button>').attr({type:"button", class:"btn btn-outline-secondary btn-sm", "data-toggle":"modal", "data-target":"#exampleModal", "data-sku": f.name, "data-img":"imgs/"+f.image, "data-volume": f.volume, "data-price": f.price, "data-addcart": "item_add btn btn-success btn-sm", "data-prompt": "prompt"}).text("Details")).append(
                                $('<a>').attr({class:"item_add btn btn-success btn-sm", href:"javascript:;"}).text('Add to Cart')).append(
                                $('<a>').attr({class:"browse_list btn btn-outline-info btn-sm ", href:"cart.html"}).text('Go to Cart')).append(
                                $('<p>').attr({class:"prompt "}).append('product added!')))
                        )); 
            });
            
            $('#exampleModal').on('show.bs.modal', function (event) {

                var button = $(event.relatedTarget) 
                var sku = button.data('sku') 
                var img = button.data('img')
                var volume = button.data('volume')
                var price = button.data('price')

                var addcart = button.data('addcart')
                var prompt = button.data('prompt')

                
                console.log(addcart)
                console.log(prompt)

                var modal = $(this)
                modal.find('.information .item_name').text(sku)
                modal.find('.information img').attr("src", img)
                modal.find('.information .item_volume').text(volume)
                modal.find('.information .item_price').text(price)
                modal.find('.information .item_add').attr("class", addcart)
                modal.find('.information .prompt').attr("class", prompt)
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

                console.log(add)
                console.log(prompt)
                
                button.attr({'data-addcart': add.attr('class'), 'data-prompt': prompt.attr('class')})
                

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
var beerOrderButton = $("#beerOrderButton")
        var mailchimpButton = $("#mc-embedded-subscribe")
        beerOrderButton.on("click", function(){

                // var ids = [], names = [], prices = [], qtys = [], subtotals = []
                var itemDescriptionArray = []
                var subtotals = []
                var grandtotal = 0

                  simpleCart.each(function( item , x ){
                    var itemDescription = item.get('id')+" ["+ item.get('name')+"] - $"+  item.get('price') + " x " + item.get('quantity') + " = (SUBTOTAL) $" +item.get('total')
                    itemDescriptionArray.push(itemDescription)
                    var subtotal = item.get('total')
                    subtotals.push(subtotal)
                  })

                  grandtotal = "$ "+subtotals.reduce(function(a,b){return a + b;}, 0)

                  var request = itemDescriptionArray.join("           ⠀        ⠀    \n\n")
                  var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
                  var string = '';
                  for(var ii=0; ii<15; ii++){
                    string += chars[Math.floor(Math.random() * chars.length)];
                  }
                  $('input[name=EMAIL]').val(string + '@domain.com');
                  $('input[name=RQST]').val(request)
                // $('input[name=PRODUCTID]').val(ids.join(","));
                // $('input[name=PRDTNAME]').val(names.join(","));
                // $('input[name=PRDTPRICE]').val(prices.join(","));
                // $('input[name=PRDTQTY]').val(qtys.join(","));
                // $('input[name=PRDTSUBT]').val(subtotals.join(","));
                $('input[name=TOTAL]').val(grandtotal);
            
            mailchimpButton.click()
            mailchimpButton.on('click', function(){
                $('#beerOrderButton').addClass('remove');
            })          
        })

});

