        $(document).ready(function() {
    
    /* ======= CSS Animated Hamburger Icon for Bootstrap ======= */
    /* Ref: http://codepen.io/impondesk/pen/EaKoXY */
    
    $(".navbar-toggle").on("click", function () {
         $(this).toggleClass("active");
    });  
    
    
    /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -62, 'axis':'y'});
		
	});
	
	$('.scrollto-no-offset').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
		
	});
	
	/* ======= Fixed page nav when scrolled =======    
    $(window).on('scroll', function() {
        
        $('#page-nav-wrapper').removeClass('fixed');
         
         var scrollTop = $(this).scrollTop();
         var topDistance = $('#page-nav-wrapper').offset().top;
         
         if ( (topDistance) > scrollTop) {
            $('#page-nav-wrapper').removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
         }
         else {
            $('#page-nav-wrapper').addClass('fixed');
            $('body').addClass('sticky-page-nav');
         }

    });*/
	
	/* ======= Stop Video Playing When Close the Modal Window ====== */
    $("#modal-video .close").on("click", function() {
        $("#modal-video iframe").attr("src", $("#modal-video iframe").attr("src"));        
    });
    
    /* ======= FAQ accordion ======= */
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find('.panel-title a')
        .toggleClass('active')
        .find("i.fa")
        .toggleClass('fa-plus-square fa-minus-square');
    }
    $('.panel').on('hidden.bs.collapse', toggleIcon);
    $('.panel').on('shown.bs.collapse', toggleIcon); 
    
    /* ======= Toggle between Signup & Login & ResetPass Modals ======= */ 
    $('#signup-link').on('click', function(e) {
        $('#login-modal').modal('toggle');
        $('#signup-modal').modal();
        
        e.preventDefault();
    });
    
    $('#login-link').on('click', function(e) {
        $('#signup-modal').modal('toggle');
        $('#login-modal').modal();
        
        e.preventDefault();
    });
    
    $('#back-to-login-link').on('click', function(e) {
        $('#resetpass-modal').modal('toggle');
        $('#login-modal').modal();
        
        e.preventDefault();
    });
    
    $('#resetpass-link').on('click', function(e) {
        $('#login-modal').modal('hide');
        e.preventDefault();
    });
     
    
     /* ======= Testimonial Bootstrap Carousel ======= */
     /* Ref: http://getbootstrap.com/javascript/#carousel */
    $('#testimonials-carousel').carousel({
      interval: 8000 
    });
    
    
     /*
  **********************************************************
  * OPAQUE NAVBAR SCRIPT
  **********************************************************
  */

  // Toggle tranparent navbar when the user scrolls the page

  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});


/****************************************************************
 BUY TOKENS CHECK
 ****************************************************************/
    var check = 0;
    $(".accept").click(function (event) {
      var counter = 0;
      $(".accept").each(function(key, checkbox) {
        if(checkbox.checked == false) {
          $("#token-purchase-agreement-continue").attr("disabled", "disabled");
          return false;
        } else {
          counter++;
          if(counter == $(".accept").length) {
            $("#token-purchase-agreement-continue").attr("disabled", false);
            check=1;
            }
        }
      });
    });

    $('#signup-modal').on("#modal.close", function(event, modal) {
    $(".accept").prop('checked', false);
    $("#token-purchase-agreement-continue").attr("disabled", "disabled");
    });

    $("#token-purchase-agreement-continue").click(function() {

        switch($(this).attr("data-source")) {
            case "more-information":
                top.location.href = "information.html";
                break;

            case "buy-ema-tokens":
 
                top.location.href = "private-distribution-instruction-id=1521674580TYTHdhh.html";
                break;
        }
    });
    
});


/**function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}**/
