
// gallery
function gallerySetup() {
    $('.gallery .gallery__link').removeAttr('style');

    if($(window).width() > 768) {
        var imgWidth = $('.gallery .gallery__link').width();
        var imgHeight = $('.gallery .gallery__link').height();

        $('.gallery .gallery__link').css('width', imgWidth);
        $('.gallery .gallery__link').css('height', imgHeight);
    }

    console.log('Gallery initialized.');
};


function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 59.893, lng: 10.645},
      zoom: 12,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}

function scrollTo(elementId) {
	if($('#' + elementId).offset() !== undefined) {
	    $('html, body').animate({
	        scrollTop: $('#' + elementId).offset().top - 140
	    }, 1000);
	}
}

$('.js-scroll-to').click(function(e) {
    e.preventDefault();

    var elementId = $(this).data('target');
    scrollTo(elementId);
});

// init
$(document).on('ready', function() {
    $('.hero .carousel').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $('.gallery__link').fancybox();
});

$(window).load(function(){
    // init galeries
    gallerySetup();

});


// on window resize
$(window).on('resize', function() {
    gallerySetup();
});

$(window).scroll(function (event) {
    if($(window).width() > 768) {
        var scroll = $(window).scrollTop();
        if(scroll > 50) {
            $('.navbar-fixed-top').addClass('navbar-small');
        } else {
            $('.navbar-fixed-top').removeClass('navbar-small');
        }
    }
});
