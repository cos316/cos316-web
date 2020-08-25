$(window).load(function () {

  // scroll handler
  var scrollToAnchor = function (id) {

    // grab the element to scroll to based on the name
    var elem = $("a[name='" + id + "']");

    // if that didn't work, look for an element with our ID
    if (typeof (elem.offset()) === "undefined") {
      elem = $("#" + id);
    }

    // if the destination element exists
    if (typeof (elem.offset()) !== "undefined") {

      var nav = $("#nav");

      var offset = 80;

      if (nav && nav.css("position") === "fixed") {
        offset = nav.innerHeight() + 20;
      }

      // do the scroll
      $('html, body').animate({
        scrollTop: elem.offset().top - offset
      }, 100);

    }

  };


  // bind to click event
  $("a[href^='#']").click(function (event) {

    // only do this if it's an anchor link
    if ($(this).attr("href").match(/^#/)) {

      // prevent default propagation
      event.preventDefault();

      // scroll to the location
      var href = $(this).attr('href').replace('#', '');
      scrollToAnchor(href);

      // if we have pushState
      if (history.pushState) {
        history.pushState(null, null, '#' + href);
      }

      // fallback to prevent jitter
      return false;

    }

  });

  if (window.location.hash) {
    window.scrollTo(0, 0);
    scrollToAnchor(window.location.hash.substr(1));
  }

});