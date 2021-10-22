$(function() {
   $('.works__list').slick({
               autoplay: true,
               autoplaySpeed: 2000,
               slidesToShow: 3,
               dots: false,
               arrows: false,
               centerMode: true,
               variableWidth: true,
      responsive: [
   {
     breakpoint: 1024,
     settings: {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows: false,
      centerMode: true,
      variableWidth: true,
     },
   },
 ],
 });


$(".contact__input-name").on('change', function(e) {
   let mail = $('input[name="mail"]').val()
   let detail = $('textarea[name="detail"]').val()
   let agree = $(".input__agree").prop("checked")
   if(agree && mail && detail){
      $(".contact__submit").prop("disabled",false).addClass("submit_active")
   }
});

$(".contact__input-detail").on('change', function(e) {
   let mail = $('input[name="mail"]').val()
   let name = $('textarea[name="name"]').val()
   let agree = $(".input__agree").prop("checked")
   if(agree && mail && name){
      $(".contact__submit").prop("disabled",false).addClass("submit_active")
   }
});

$(".contact__input-mail").on('change', function(e) {
   let name = $('input[name="name"]').val()
   let detail = $('textarea[name="detail"]').val()
   let agree = $(".input__agree").prop("checked")
   if(agree && name && detail){
      $(".contact__submit").prop("disabled",false).addClass("submit_active")
   }
});

$(".input__agree").on('change', function(e) {
   let mail = $('input[name="mail"]').val()
   let detail = $('textarea[name="detail"]').val()
   let name = $('input[name="name"]').val()
   if(name && mail && detail){
      $(".contact__submit").prop("disabled",false).addClass("submit_active")
   }
});

$(".header__sp-menu-item").on("click",function(){
   $("body").removeClass("menu_active_body_fix")
   let text = $(this).text()
   let position = $("." + text).offset().top + -70
   $(".header__sp-menu ").css("display","none")
   $('html, body').animate({scrollTop:position});
   $(".header__menu-line:nth-child(2)").fadeIn();
       $(".header__menu-line:nth-child(1)").removeClass("header__line-active01")
       $(".header__menu-line:nth-child(3)").removeClass("header__line-active03");
})   

$(".move_js").on("click",function(){
   let text = $(this).text()
   let position = $("." + text).offset().top
   $('html, body').animate({scrollTop:position});
})

    $(".header__menu").on('click', function(e) {
       if($(this).hasClass("menu_active")){
          $("body").removeClass("menu_active_body_fix")
         $(".header__sp-menu").fadeOut()
         $(".header__menu").removeClass("menu_active")
         $(".header__menu-line:nth-child(2)").fadeIn();
          $(".header__menu-line:nth-child(1)").removeClass("header__line-active01")
          $(".header__menu-line:nth-child(3)").removeClass("header__line-active03");
          return;
       }
       $("body").addClass("menu_active_body_fix")
       $(".header__menu").addClass("menu_active")
      $(".header__sp-menu").fadeIn()
      $(".header__menu-line:nth-child(2)").fadeToggle();
       $(".header__menu-line:nth-child(1)").toggleClass("header__line-active01")
       $(".header__menu-line:nth-child(3)").toggleClass("header__line-active03");
   });
   


    AOS.init();

    $(".inquire__title").on("click",function(){
       $(this).toggleClass("inquire_active");
       $(this).next().stop().slideToggle();
    });


});


