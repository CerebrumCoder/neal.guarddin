$(document).ready(function () {

  // fungsi tentang active nav-link
  $(".navbar .nav-link").on("click", function () {
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
  });

  // fungsi tentang turn on bg di navbar dan adanya tombol back-to-top
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar").css({ "background-color": "#1C1E1E" });
      $(".back-to-top").addClass("active");
    }
    else {
      $(".navbar").css({ "background-color": "transparent" });
      $(".back-to-top").removeClass("active");
    }
  });

  // fungsi tentang menutup navbar setelah klik a link
  $("#offcanvasDarkNavbar a").click(function () {
    $('.offcanvas').offcanvas('hide');
  });

  // fungsi tentang navbar hide onscroll
  if ($(".smart-scroll").length > 0) {
    var last_scroll_top = 0;
    $(window).on("scroll", function () {
      var scroll_top = $(this).scrollTop();
      if (scroll_top < last_scroll_top) {
        $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
      }
      else {
        $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
  }

});