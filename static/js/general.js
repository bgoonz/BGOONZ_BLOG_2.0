//Copy-2-clip.js


function hideLoader() {
      $('#loading').hide();
}
$(window).ready(hideLoader);
// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 10 * 1000);
$(window).on('beforeunload', function () {
      $(window).scrollTop(0);
});
  </script >

      <script>
            $( window ).scroll( function () {
                  $("#back").stop().animate({
                        "marginTop": ($(window).scrollTop()) + "px",
                        "marginLeft": ($(window).scrollLeft()) + "px"
                  }, "slow");
    } );