$(function () {
  $(".submenu-containerBox1").hide();
  $(".submenu__background").hide();

  $(".top-menu__team-hover").hover(function(){
    $(".submenu__background").show();
    $(".team-submenu__01").show();
  },function(){
    $(".submenu-containerBox1").hide();
    $(".submenu__background").hide();
  })

  $(".top-menu__commu-hover").hover(function(){
    $('.submenu__background').css('z-index', 100);
    $(".submenu-containerBox1").show();
    $(".submenu__background").show();
    $(".commu-submenu__01").show();
  },function(){
    $(".submenu-containerBox1").hide();
    $(".submenu__background").hide();
  })

   $(".top-menu__reservation-hover").hover(function(){
    $(".submenu__background").show();
    $(".reserve-submenu__01").show();
  },function(){
    $(".submenu-containerBox1").hide();
    $(".submenu__background").hide();
  })
});
