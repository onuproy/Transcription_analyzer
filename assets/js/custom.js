jQuery(document).ready(function(){ 

	// Brand logo Carousel 
	jQuery('.slider_item_first').owlCarousel({
		loop:true,
		autoplayTimeout:4000,
		autoplay:false,
		smartSpeed:4000,
		responsive :{
			0:{
				items:1.1,
				stagePadding:70,
			},
			414:{
				items:1.1,
				stagePadding:90,
			},
			576:{
				items:1.1,
				stagePadding:120,
			},
			768:{
				items:1.1,
				stagePadding:200,
			},
			992:{
				items:1.1,
				stagePadding:280,
			},
			1199:{
				items:1.1,
				stagePadding:330,
			}
		}
	});
	jQuery('.slider_item_first_2').owlCarousel({
		loop:true,
		autoplayTimeout:4000,
		autoplay:false,
		smartSpeed:4000,
		responsive :{
			0:{
				items:1.4,
				stagePadding:40,
			},
			414:{
				items:1.4,
				stagePadding:60,
			},
			576:{
				items:1.4,
				stagePadding:75,
			},
			768:{
				items:1.4,
				stagePadding:150,
			},
			992:{
				items:1.4,
				stagePadding:210,
			},
			1199:{
				items:1.4,
				stagePadding:230,
			}
		}
	});
	

	jQuery('#pre_btn').click(function(){
        jQuery('.slider_item_first').trigger('prev.owl.carousel');
            return false ;
     });     
    jQuery('#next_btn').click(function(){       
        jQuery('.slider_item_first_2').trigger('next.owl.carousel');
        return false ;          
    });

});