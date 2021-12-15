jQuery(document).ready(function(){ 

	// Brand logo Carousel 
	jQuery('.slider_item_first').owlCarousel({
		loop:true,
		autoplayTimeout:4000,
		autoplay:false,
		smartSpeed:4000,
		stagePadding:330,
		responsive :{
			0:{
				items:1,
			},
			425:{
				items:1,
			},
			575:{
				items:1.4,
			},
			767:{
				items:1.4,
			},
			992:{
				items:1.1,
			}
		}
	});
	jQuery('.slider_item_first_2').owlCarousel({
		loop:true,
		autoplayTimeout:4000,
		autoplay:false,
		smartSpeed:4000,
		stagePadding:230,
		responsive :{
			0:{
				items:1,
			},
			425:{
				items:1,
			},
			575:{
				items:1.4,
			},
			767:{
				items:1.4,
			},
			992:{
				items:1.4,
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

	
	// Home owlCarousel
	// jQuery('.blog_slider').owlCarousel({
	// 	loop:true,
	// 	margin:25,
	// 	nav:true,
	// 	autoplay:false,
	// 	navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	// 	dots:false,
	// 	responsive:{
	// 		0:{
	// 			items:1,
	// 		},
	// 		576:{
	// 			items:2,
			
	// 		},
	// 		768:{
	// 			items:2,
	// 		},
	// 		1200:{
	// 			items:1.5,
	// 		}
	// 	}
	// });



});