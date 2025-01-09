// header submenu
$(".submenu").hide()

$(".menu>ul>li").mouseover(function(){
 $(this).find(".submenu").stop().slideDown()
})

$(".menu>ul>li").mouseleave(function(){
 $(this).find(".submenu").stop().slideUp()
})

//header language
$(".lang").hide()
$(".language>ul>li").click(function(){
 $(this).find(".lang").slideToggle()
})

//side_menu
/* $(".full_wrap").hide()

$(".side_menu").click(function(){
 $(".full_wrap").stop().slideDown()
 $("body,html").css({height:"100vh",overflow:"hidden"})
})

$(".full_close").click(function(){
 $(".full_wrap").stop().slideUp()
 $("body,html").css({height:"auto",overflow:"auto"})
}) */


// main slide
let swiper = new Swiper("#main .mySwiper", {
 pagination: {
   el: "#main .ctrl_box>.swiper-pagination",
   type: "progressbar",
 },
 navigation: {
   nextEl: ".next",
   prevEl: ".prev",
 },
 loop : "true",
//  autoplay:{
//    delay : 2500,
//  },
});

let swiperNum = new Swiper("#main .mySwiper", {
 pagination: {
   el: "#main .arrow>.swiper-pagination",
   type: "fraction",
 },
 loop : "true",
});
swiper.controller.control = swiperNum //스와이퍼 연동

// footer fsite
$(".fsite_link").hide()
$(".service").click(function(){
  $(".1").slideToggle()
  $(".fsite i").toggleClass("flip")
})
$(".network").click(function(){
  $(".2").slideToggle()
  $(".fsite i").toggleClass("flip")
})

if($(window).width <=1280){
  $(".full_wrap .full_menu>ul>li:nth-child(n+2)").hide()
  
}




// aos.js (제일 하단에 작성하기!! -> 충돌방지)
AOS.init()