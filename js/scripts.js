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


$(function () {

    $('a[href*=#]:not([href=#])').click(function () {
        app.changePage(this)
    });

});


class AppController{

    constructor(){
        this.prevTarget = $('video-bg');
        $('.player').YTPlayer();
        $('[data-toggle="tooltip"]').tooltip();
        this.coverPage();
        $('.options').hide();
    }


    changePage(target){
        var target = $(target.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        this.prevTarget.css('visibility','hidden');
        target.css('visibility', 'visible');
        this.prevTarget = target;
        
    }

    coverPage(){
        setTimeout(function(e){
            $('#cover').fadeOut(1000);
        }, 1000);
    }
    
}


let app = new AppController();

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