$(window).resize(function() {
  var more = document.getElementById("js-navigation-more");
  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-right");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $("#js-navigation-more .submenu .submenu").removeClass("fly-out-left");
      $("#js-navigation-more .submenu .submenu").addClass("fly-out-right");
    }
  }
});
$(document).ready(function() {
  $('p.podrik').click(function(){
    var butattr = $(this).attr('id');
    $('ul#' + butattr).slideDown('slow');
  });
  var bittersMap = (function () {
  var myLatlng = new google.maps.LatLng(51.089709, 71.447923),
  mapCenter = new google.maps.LatLng(51.089709, 71.447923),
  mapCanvas = document.getElementById('map_canvas'),
  mapOptions = {
  center: mapCenter,
  zoom: 13,
  scrollwheel: false,
  draggable: true,
  disableDefaultUI: true,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  },
  map = new google.maps.Map(mapCanvas, mapOptions),
  contentString =
  '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">thoughtbot</h1>'+
  '<div id="bodyContent"'+
  '<p>Sveavägen 98</p>'+
  '</div>'+
  '</div>',
  infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 300
  }),
  marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  title: 'thoughtbot (Sweden)'
  });
  return {
  init: function () {
  map.set('styles', [{
  featureType: 'landscape',
  elementType: 'geometry',
  stylers: [
  { hue: '#ffff00' },
  { saturation: 30 },
  { lightness: 10}
  ]}
  ]);
  google.maps.event.addListener(marker, 'click', function () {
  infowindow.open(map,marker);
  });
  }
  };
  }());
  bittersMap.init();
  var menuToggle = $("#js-mobile-menu").unbind();
  $("#js-navigation-menu").removeClass("show");

  menuToggle.on("click", function(e) {
    e.preventDefault();
    $("#js-navigation-menu").slideToggle(function(){
      if($("#js-navigation-menu").is(":hidden")) {
        $("#js-navigation-menu").removeAttr("style");
      }
    });
  });
  jQuery('.go_to').click( function(){
   var scroll_el = jQuery(this).attr('href');
   if (jQuery(scroll_el).length != 0) {
     jQuery('html, body').animate({ scrollTop: jQuery(scroll_el).offset().top - 60 }, 500);
   }
   return false;
  });
});
