//slide
setInterval(slide)
function slide(){
 $(".s1").delay(3000).animate({marginLeft:"-500px"},3000)
 $(".s1").delay(3000).animate({marginLeft:"-1000px"},3000)
 $(".s1").delay(3000).animate({marginLeft:"-1500px"},3000)
 $(".s1").delay(3000).animate({marginLeft:"-2000px"},3000)
}

//sub menu
$(".menu>.room").mouseover(function(){
 $(".sub").stop().slideDown()
})
$(".menu>.room").mouseleave(function(){
 $(".sub").stop().slideUp()
})