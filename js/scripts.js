$(document).ready(function () {

    /***************** Waypoints ******************/
    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    // $(function () {
    //     $(window).scroll(function () {
    //         var scroll = $(window).scrollTop();

    //         if (scroll >= 20) {
    //             $('section.navigation').addClass('fixed');
    //             $('header').css({
    //                 "border-bottom": "none",
    //                 "padding": "35px 0"
    //             });
    //             $('header .member-actions').css({
    //                 "top": "26px",
    //             });
    //             $('header .navicon').css({
    //                 "top": "34px",
    //             });
    //         } else {
    //             $('section.navigation').removeClass('fixed');
    //             $('header').css({
    //                 "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
    //                 "padding": "50px 0"
    //             });
    //             $('header .member-actions').css({
    //                 "top": "41px",
    //             });
    //             $('header .navicon').css({
    //                 "top": "48px",
    //             });
    //         }
    //     });
    // });
    /***************** Smooth Scrolling ******************/

    // $(function () {

    //     $('a[href*=#]:not([href=#])').click(function () {
    //         if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 $('html,body').animate({
    //                     scrollTop: target.offset().top - 90
    //                 }, 2000);
    //                 return false;
    //             }
    //         }
    //     });

    // });

    /********************** Social Share buttons ***********************/


    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Megan and Ryan's Wedding",

            // Event start date
            start: new Date('May 11, 2019 17:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('May 12, 2019 00:00'),

            // Event Address
            address: '700 Elliotsville Rd, Farmington, PA 15437',

            // Event Description
            description: "We can't wait to see you on our big day. For any queries or issues contact Ryan @ 412-508-4728"
        }
    });

    $('#add-to-cal').html(myCalendar);

    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
	   e.preventDefault();
        var data = $('form#rsvp-form').serialize();
	   var url = 'https://script.google.com/macros/s/AKfycbxuR3bQLmJuoX0LeuWK6ArFMrHcac8gOMGaU_RsadjzVBolsNSL/exec';

        $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

		var xhr = new XMLHttpRequest();
		xhr.open('POST', url);
		// xhr.withCredentials = true;
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			$('#alert-wrapper').html('');
			$('#rsvp-modal').modal('show');
			return;
		};
		// url encode form data for sending as post data
		var encoded = encodeURIComponent(data);
		console.log(encoded);
		xhr.send(data);

    });

});

/********************** Extras **********************/

// Google map
function initMap() {
    var itc_kol = {lat: 40.209839, lng: -79.766107};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: itc_kol,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: itc_kol,
        map: map
    });
}

function initBBSRMap() {
    var la_fiesta = {lat: 39.7744912, lng: -79.5957492};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: la_fiesta,
        map: map
    });
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}
