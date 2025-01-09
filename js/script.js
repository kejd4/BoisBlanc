//sub menu
$(".menu>.room").mouseover(function(){
 $(".sub").stop().slideDown()
})
$(".menu>.room").mouseleave(function(){
 $(".sub").stop().slideUp()
})


//slide
$(".s2,.s3,.s4").hide()
setInterval(slide)
function slide(){
 $(".slide").delay(2000)
 $(".s1").fadeOut(2000)
 $(".s2").fadeIn(2000)
 $(".slide").delay(2000)
 $(".s2").fadeOut(2000)
 $(".s3").fadeIn(2000)
 $(".slide").delay(2000)
 $(".s3").fadeOut(2000)
 $(".s4").fadeIn(2000)
 $(".slide").delay(2000)
 $(".s4").fadeOut(2000)
 $(".s1").fadeIn(2000)
}

//btn
$(".side_btn").hide()
$(".ch").click(function(){
 $(".message_wrap").show()
})
$(".close").click(function(){
 $(".message_wrap").hide()
 $(".side_btn").show()
})
$(".side_btn").click(function(){
 $(".message_wrap").show()
})