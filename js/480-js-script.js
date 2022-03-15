(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      autoplay:true,
      
    autoplayHoverPause:true,
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();




(function ($) {
  'use strict';


  // test

  
  


  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(700);
  });

  //   navfixed
  $(window).on('scroll', function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 10) {
      $('.naviagtion').addClass('nav-bg');
    } else {
      $('.naviagtion').removeClass('nav-bg');
    }
  });

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  // venobox popup 
  $('.venobox').venobox();

  //  Count Up
  function counter() {
    var oTop;
    if ($('.counter').length !== 0) {
      oTop = $('.counter').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });


  // testimonial
  $('.testimonial-slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    nextArrow: '<buttton class="nextarrow"></buttton>',
    prevArrow: '<buttton class="prevarrow"></buttton>'
  });


  // blog slider
  $('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    nextArrow: '<buttton class="nextarrow"></buttton>',
    prevArrow: '<buttton class="prevarrow"></buttton>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });

  $('.category-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    nextArrow: '<buttton class="nextarrow"></buttton>',
    prevArrow: '<buttton class="prevarrow"></buttton>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dot: false,
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });






  
  // Aos js
  AOS.init({
   
    once: true, 
    mirror: true,
    offset: 250,
    easing: 'ease',
    duration: 800,
    anchorPlacement: 'top-bottom',
  });

  
$(document).ready(function(){
	// Add minus icon for collapse element which is open by default
	$(".collapse.show").each(function(){
		$(this).siblings(".card-header").find(".btn i").html("remove");
		$(this).prev(".card-header").addClass("highlight");
	});


   // nav clicked
  
   $(".dropdown-menu a").on("click",function(){
    document.getElementById("navigation").classList.remove("show");
    
    //or simply $("#navbar").addClass("makeDisappear")
    })
   $(".btn-outline-primary").on("click",function(){
    document.getElementById("navigation").classList.remove("show");
    
    //or simply $("#navbar").addClass("makeDisappear")
    })
	
	// Toggle plus minus icon on show hide of collapse element
	$(".collapse").on('show.bs.collapse', function(){
		$(this).parent().find(".card-header .btn i").html("remove");
	}).on('hide.bs.collapse', function(){
		$(this).parent().find(".card-header .btn i").html("add");
	});
	
	// Highlight open collapsed element 
	$(".card-header .btn").click(function(){
		$(".card-header").not($(this).parents()).removeClass("highlight");
		$(this).parents(".card-header").toggleClass("highlight");
	});
});



const container=document.getElementById("containerh2")
$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 $('#search').keyup(function(){
  $('#result').html('');
  $('#state').val('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('data.json', function(data) {
   $.each(data, function(key, value){
    if (value.item.search(expression) != -1 || value.class.search(expression) != -1)
    {
     $('#result').append('<li class="list-group-item link-class"> '+value.item+' : <span class="text-muted">'+value.class+'</span></li>');
    }
   });   
  });
 });
 
 $('#result').on('click', 'li', function() {
  var click_text = $(this).text();
  $('#search').val($.trim(click_text[0]));
 
  $("#result").html('');
  container.textContent=click_text;
 });
});

$('#today').click(function(event){
  $('#today').data("DateTimePicker").show();
});




    
// whatsapp
$(document).on("click", "#send-it", function() {
  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://web.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=+201270764032" + e + f;
    window.open(g, "_blank");
  }
}),
  $(document).on("click", ".informasi", function() {
    (document.getElementById("get-number").innerHTML = $(this)
      .children(".my-number")
      .text()),
      $(".start-chat,.get-new")
        .addClass("show")
        .removeClass("hide"),
      $(".home-chat,.head-home")
        .addClass("hide")
        .removeClass("show"),
      (document.getElementById("get-nama").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-nama")
        .text()),
      (document.getElementById("get-label").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-label")
        .text());
  }),
  $(document).on("click", ".close-chat", function() {
    $("#whatsapp-chat")
      .addClass("hide")
      .removeClass("show");
  }),
  $(document).on("click", ".blantershow-chat", function() {
    $("#whatsapp-chat")
      .addClass("show")
      .removeClass("hide");
  });
  
   

		




})(jQuery);


		//  multiSelect 
		const multi = new MultiSelect({
			
			pleaseSelectOptionValue: 'nothingHere' 
		});

		
		async function sendData() {
			const myDataJson = multi.getJson(true);
			
			const selectsAreValid = multi.simpleValidate();

			console.log(myDataJson, selectsAreValid)

		
			if(selectsAreValid){
				let call = await fetch('/myapi/send', {
					'method': 'POST',
					'body': JSON.stringify(myDataJson),
					'headers': {
						'Content-Type': 'application/json'
					}
				});
				let responseJson = await call.json();
			
				console.log(responseJson);
			}

		}

 

    let today = new Date().toISOString().substr(0, 10);
    document.querySelector("#today").value = today;

 

