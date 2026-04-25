/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // FitVids init
  $("#main").fitVids();

  var wideSidebar = window.matchMedia ? window.matchMedia("(min-width: 926px)") : null;
  var stickyIsActive = false;

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? (wideSidebar ? wideSidebar.matches : $(window).width() > 925) : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      if (!stickyIsActive) {
        $(".sticky").Stickyfill();
        Stickyfill.init();
        stickyIsActive = true;
      } else {
        Stickyfill.rebuild();
      }
      $(".author__urls").show();
    } else {
      if (stickyIsActive) {
        Stickyfill.stop();
        stickyIsActive = false;
      }
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  if (wideSidebar) {
    if (wideSidebar.addEventListener) {
      wideSidebar.addEventListener("change", stickySideBar);
    } else if (wideSidebar.addListener) {
      wideSidebar.addListener(stickySideBar);
    }
  }

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
