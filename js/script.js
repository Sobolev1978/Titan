$('.btn_3').click(function() {
  $('#modal_3').arcticmodal()
});

$('.btn_4').click(function() {
  $('#modal_4').arcticmodal()
});

$('.btn_5').on('click', function() {
  $('#modal_5').arcticmodal();
  $('#prod_title i').remove();
  $(this).next().clone().appendTo('#prod_title');
  var text = $(this).next().text();
  $('#z_title').val(text);
});

$('.btn_6').click(function() {
  $('#modal_6').arcticmodal()
});

$('.btn_7').click(function() {
  $('#modal_7').arcticmodal()
});

$('.btn_8').click(function() {
  $('#modal_8').arcticmodal()
});

$('.btn_9').click(function() {
  $('#modal_9').arcticmodal()
});

$('.btn_10').click(function() {
  $('#modal_10').arcticmodal()
});

$('.btn_11').click(function() {
  $('#modal_11').arcticmodal()
});

$('.burger').click(function() {
  $(this).toggleClass('open');
  // $('body').toggleClass('rL hid');
  $('#header .header_bot').slideToggle();
});

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100)
		{
			$('#header .header_bot').addClass('fixed');
		}
		else
		{
			$('#header .header_bot').removeClass('fixed');
		}
	});
});


$('.slider_1').owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  nav: true,
  navText: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: true,
});

$('.slider_2').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  navText: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: true
    },

    900: {
      items: 3,
      nav: true
    },
    1200: {
      items: 4,
      nav: true
    }
  }
});

$('.slider_5').owlCarousel({
    loop:true,
    margin:0,
	nav:true,
	navText:false,
	dots:true,
	responsive:{
		0:{
            items:1,
            nav:true
        },
		500:{
            items:1,
            nav:true
        },

		800:{
            items:2,
            nav:true
        },
		1200:{
            items:4,
            nav:true
        }
    }
});

$('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
 slidesToShow:3,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 centerMode: false,
 focusOnSelect: true
});

var sync1 = $(".sync1");
var sync2 = $(".sync2");
var flag = false;
var slides = sync1.owlCarousel({
  loop: false,
  margin: 0,
  items: 1,
  nav: true
}).on('change.owl.carousel', function(e) {
  if (e.namespace && e.property.name === 'position' && !flag) {
    flag = true;
    thumbs.to(e.relatedTarget.relative(e.property.value), 300, true);
    flag = false;
  }
}).data('owl.carousel');
var thumbs = sync2.owlCarousel({
    loop: false,
    items: 2,
    nav: false,
  })

  .on('click', '.slide', function(e) {
    $('.slide').removeClass('synced')
    $(this).toggleClass('synced')
    e.preventDefault();
    sync1.trigger('to.owl.carousel', [$(e.target).parents('.owl-item').index(), 1300, true]);
  }).on('change.owl.carousel', function(e) {
    if (e.namespace && e.property.name === 'position' && !flag) {
      //nsole.log('...');
    }
  }).data('owl.carousel');

$(".sync2 .owl-item:first-child .slide").toggleClass('synced');

$(document).ready(function() {
  $(".scroll").click(function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 60;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});


$(document).ready(function(){

	function falidator(item) {
		check = true;
		$(item).find('input').each(function() {
			if($(this).hasClass('required') && $(this).val() == '') {
				check = false;
				$(this).css('border', '1px red solid');
			} else {
				$(this).css('border', '1px transparent solid');
			}
		});
		if(check) {
			return true;
		} else {
			return false;
		}
	}

	/**************************/
	$("#form_1").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({
			type: "POST",
			url: "php/form_1.php",
			data: $("#form_1").serialize(),
			success: function(html) {

			}
		});

		$('#modal_1').arcticmodal('close');
		$('#spasibo').arcticmodal();
		/*$('.action_block .inputbox').removeClass("not-empty");*/
		$('#form_1').trigger("reset");
		return false;
	});
	/**************************/

	/**************************/
	$("#form_2").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({
			type: "POST",
			url: "php/form_2.php",
			data: $("#form_2").serialize(),
			success: function(html) {

			}
		});

    $('#modal_2').arcticmodal('close');
		$('#spasibo').arcticmodal();
		/*$('.action_block .inputbox').removeClass("not-empty");*/
		$('#form_2').trigger("reset");
		return false;
	});
	/**************************/
  /**************************/
	$("#form_3").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({
			type: "POST",
			url: "php/form_3.php",
			data: $("#form_3").serialize(),
			success: function(html) {

			}
		});

		$('#modal_3').arcticmodal('close');
		$('#spasibo').arcticmodal();
		/*$('.action_block .inputbox').removeClass("not-empty");*/
		$('#form_3').trigger("reset");
		return false;
	});
	/**************************/
  /**************************/
	$("#form_4").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({
			type: "POST",
			url: "php/form_4.php",
			data: $("#form_4").serialize(),
			success: function(html) {

			}
		});

    $('#modal_4').arcticmodal('close');
		$('#spasibo').arcticmodal();
		/*$('.action_block .inputbox').removeClass("not-empty");*/
		$('#form_4').trigger("reset");
		return false;
	});
	/**************************/
  /**************************/
	$("#form_5").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({
			type: "POST",
			url: "php/form_5.php",
			data: $("#form_5").serialize(),
			success: function(html) {

			}
		});

    $('#modal_5').arcticmodal('close');
		$('#spasibo').arcticmodal();
		/*$('.action_block .inputbox').removeClass("not-empty");*/
		$('#form_5').trigger("reset");
		return false;
	});
	/**************************/
  /**************************/
	$("#form_6").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({
			type: "POST",
			url: "php/form_6.php",
			data: $("#form_6").serialize(),
			success: function(html) {

			}
		});

    $('#modal_6').arcticmodal('close');
		$('#spasibo').arcticmodal();
		/*$('.action_block .inputbox').removeClass("not-empty");*/
		$('#form_6').trigger("reset");
		return false;
	});
	/**************************/
  /**************************/
	$("#form_7").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({
			type: "POST",
			url: "php/form_7.php",
			data: $("#form_7").serialize(),
			success: function(html) {

			}
		});

    $('#modal_7').arcticmodal('close');
		$('#spasibo').arcticmodal();
		/*$('.action_block .inputbox').removeClass("not-empty");*/
		$('#form_7').trigger("reset");
		return false;
	});
	/**************************/
  /**************************/
	$("#form_8").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({
			type: "POST",
			url: "php/form_8.php",
			data: $("#form_8").serialize(),
			success: function(html) {

			}
		});

    $('#modal_8').arcticmodal('close');
		$('#spasibo').arcticmodal();
		/*$('.action_block .inputbox').removeClass("not-empty");*/
		$('#form_8').trigger("reset");
		return false;
	});
	/**************************/
  /**************************/
	$("#form_9").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({
			type: "POST",
			url: "php/form_9.php",
			data: $("#form_9").serialize(),
			success: function(html) {

			}
		});

    $('#modal_9').arcticmodal('close');
		$('#spasibo').arcticmodal();
		/*$('.action_block .inputbox').removeClass("not-empty");*/
		$('#form_9').trigger("reset");
		return false;
	});
	/**************************/
  /**************************/
	$("#form_11").submit(function(){
		if(!falidator(this)) return false;
		$.ajax({
			type: "POST",
			url: "php/form_11.php",
			data: $("#form_11").serialize(),
			success: function(html) {

			}
		});

    $('#modal_11').arcticmodal('close');
		$('#spasibo').arcticmodal();
		/*$('.action_block .inputbox').removeClass("not-empty");*/
		$('#form_11').trigger("reset");
		return false;
	});
	/**************************/

});


$(document).ready(function() {

    if($.browser.msie) {
        $("form").find("input[type='text']").each(function() {
            var tp = $(this).attr("placeholder");
            $(this).attr('value',tp).css('color','#373533');
        }).focusin(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == val) {
                $(this).attr('value','').css('color','#373533');
            }
        }).focusout(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == "") {
                $(this).attr('value', val).css('color','#373533');
            }
        });

        /* Protected send form */
        $("form").submit(function() {
            $(this).find("input[type='text']").each(function() {
                var val = $(this).attr('placeholder');
                if($(this).val() == val) {
                    $(this).attr('value','');
                }
            })
        });
    }
});



$(".numbox").mask("+7 (999) 999-99-99");
