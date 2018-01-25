jQuery(function($) {

        $( document ).on( 'click', '.mini_cart_item a.remove,.product-remove a.remove', function() {
                var productdata = $( this );

                var qty = 0;
                var qty_element = $( this ).closest( '.cart_item' ).find( '.product-quantity input.qty' );
                if ( 0 == qty_element.length ) {
                        qty_element = $( this ).closest( '.mini_cart_item' ).find( '.quantity' );
                        if ( qty_element.length > 0 ) {
                                qty = parseInt( qty_element.text() );

                                if ( isNaN( qty ) ) {
                                        qty = 0;
                                }
                        }
                } else {
                        qty = qty_element.val();
                }

                if ( 0 == qty ) {
                        return true;
                }

                dataLayer.push({
                        'event': 'gtm4wp.removeFromCartEEC',
                        'ecommerce': {
                                'remove': {
                                        'products': [{
                                                'name':     productdata.data( 'gtm4wp_product_name' ),
                                                'id':       productdata.data( 'gtm4wp_product_id' ),
                                                'price':    productdata.data( 'gtm4wp_product_price' ),
                                                'category': productdata.data( 'gtm4wp_product_cat' ),
                                                'variant':  productdata.data( 'gtm4wp_product_variant' ),
                                                'quantity': qty
                                        }]
                                }
                        }
                });
        });



                $( '.add_to_cart_button:not(.product_type_variable, .product_type_grouped)' ).click(function() {
                        var productdata = $( this ).closest( '.product' ).find( '.gtm4wp_productdata' );

                        dataLayer.push({
                                'event': 'gtm4wp.addProductToCart',
                                'productName': productdata.data( 'gtm4wp_product_name' ),
                                'productSKU': $( this ).data( 'product_sku' ),
                                'productID': $( this ).data( 'product_id' ),
                        });
                });



                $( '.add_to_cart_button:not(.product_type_variable, .product_type_grouped)' ).click(function() {
                        var productdata = $( this ).closest( '.product' ).find( '.gtm4wp_productdata' );

                        dataLayer.push({
                                'event': 'gtm4wp.addProductToCartEEC',
                                'ecommerce': {
                                        'currencyCode': 'USD',
                                        'add': {
                                                'products': [{
                                                        'name':     productdata.data( 'gtm4wp_product_name' ),
                                                        'id':       productdata.data( 'gtm4wp_product_id' ),
                                                        'price':    productdata.data( 'gtm4wp_product_price' ),
                                                        'category': productdata.data( 'gtm4wp_product_cat' ),
                                                        'quantity': 1
                                                }]
                                        }
                                }
                        });
                });



                $( '.products li:not(.product-category) a:not(.add_to_cart_button),.widget-product-item' ).click(function( event ) {
                        if ( 'undefined' == typeof google_tag_manager ) {
                                return true;
                        }

                        var _productdata = $( this ).closest( '.product' );

                        if ( _productdata.length > 0 ) {
                                var productdata = _productdata.find( '.gtm4wp_productdata' );

                        } else {
                                var _productdata = $( this ).closest( 'ul.products li' );

                                if ( _productdata.length > 0 ) {
                                        var productdata = _productdata.find( '.gtm4wp_productdata' );

                                } else {
                                        var productdata = jQuery( this );

                                }
                        }

                        if ( ( 'undefined' == typeof productdata.data( 'gtm4wp_product_id' ) ) || ( '' == productdata.data( 'gtm4wp_product_id' ) ) ) {
                                return true;
                        }

                        // only act on links pointing to the product detail page
                        if ( productdata.data( 'gtm4wp_product_url' ) != $( this ).attr( 'href' ) ) {
                                return true;
                        }

                        var ctrl_key_pressed = event.ctrlKey;

                        event.preventDefault();
                        if ( ctrl_key_pressed ) {
                                // we need to open the new tab/page here so that popup blocker of the browser doesn't block our code
                                var _productpage = window.open( 'about:blank', '_blank' );
                        }

                        dataLayer.push({
                                'event': 'gtm4wp.productClickEEC',
                                'ecommerce': {
                                        'currencyCode': 'USD',
                                        'click': {
                                          'actionField': {'list': productdata.data( 'gtm4wp_productlist_name' )},
                                                'products': [{
                                                        'id':       productdata.data( 'gtm4wp_product_id' ),
                                                        'name':     productdata.data( 'gtm4wp_product_name' ),
                                                        'price':    productdata.data( 'gtm4wp_product_price' ),
                                                        'category': productdata.data( 'gtm4wp_product_cat' ),
                                                        'position': productdata.data( 'gtm4wp_product_listposition' )
                                                }]
                                        }
                                },
                                'eventCallback': function() {
                                        if ( ctrl_key_pressed && _productpage ) {
                                                _productpage.location.href= productdata.data( 'gtm4wp_product_url' );
                                        } else {
                                                document.location.href = productdata.data( 'gtm4wp_product_url' )
                                        }
                                },
                                'eventTimeout': 2000
                        });
                });

 });