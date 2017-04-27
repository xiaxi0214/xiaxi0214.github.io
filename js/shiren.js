$(function () {
  $(window).scroll(function () {
    if ($("body").scrollTop()>270) {
      $(".bs-docs-sidebar").addClass("affix");
      $(".bs-docs-sidebar").removeClass("affix-top");
    }else {
      $(".bs-docs-sidebar").removeClass("affix");
      $(".bs-docs-sidebar").addClass("affix-top");
    }
  })
  $("#csz").click(function () {
    $(".csz-nav").show();
  })
})
