$('ul li a').bind('click', function () {
<<<<<<< HEAD
  $('ul li a').removeClass('active');
  $(this).addClass('active');
});

$(document).ready(function () {
  $.fn.waypoint.offset = 200;
  $('article').waypoint(function (event, direction) {
    var id = $(this).attr('id');
    $('ul li a').removeClass('active');
    $('ul li a[href="#' + id + '"]').addClass('active');
  });
=======
    $('ul li a').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function () {
    $.fn.waypoint.offset = 200;
    $('article').waypoint(function (event, direction) {
        var id = $(this).attr('id');
        $('ul li a').removeClass('active');
        $('ul li a[href="#' + id + '"]').addClass('active');
    });
>>>>>>> 65c20ca7f49855a8140174519342a2219d701b05
});
