/*global $*/
$(document).ready(function () {
"use strict";

//adjust dlider hieght
var winH=$(window).height(),
upperH = $('.upper-bar').innerHeight(),
navH = $('.navbar').innerHeight();
$('.slider,.carousel-item').height(winH - (upperH + navH));

//featured work shuffle
$('.featured-work ul li').on('click',function (){
$(this).addClass('active').siblings().removeClass('active');

if ($(this).data('class')==='all') {
	$('.shuffle-imgs .col-md').css('opacity',1);
}else
{
	$('.shuffle-imgs .col-md').css('opacity','.08');
	$($(this).data('class')).parent().css('opacity',1);
}

});

//scroll to top button
var scrollToTop =$('.scroll-up');
if ($(window).scrollTop() >= 1000)
{if(scrollToTop.is(':hidden')){
	scrollToTop.fadeIn(400);
}
	
	
}else{
	scrollToTop.fadeOut(400);
}

//click on scroll to top to go up
$('.scroll-up').click(function(event){
event.preventDefault();
$('html,body').animate({
	//scrollTop=0;
},1000);
});


//text area

var maxText = $('textarea').attr('maxlenght');
$('.message').html('<span>'+ maxText + '</span> characters remaining');
$('textarea').keyup(function(){
var textLenght=$(this).val().lenght,
remChars=maxText-textLenght;
$('.message').html('<span>'+ remChars + '</span> characters remaining');
});

//loading screen
//$(window).load(function()

//loading elements
   // $(".loading-overlay .spinner").fadeOut(2000,
        //function()
        // $("body").css("overflow","auto");
        //{$(this).parent().fadeOut(2000,
        //  function()
            //{ //show the scroll

            //  $(this).remove();
            //});
           
        //});
    //or loading element 
   // $(".loading-overlay, .loading-overlay .spinner").fadeOut(2000);
//});



//scroll to top button
var scrollToTop =$('.scroll-up');
if ($(window).scrollTop() >= 10)
{if(scrollToTop.is(':hidden')){
	scrollToTop.fadeIn(400);
}
	
	
}else{
	scrollToTop.fadeOut(400);
}

//click on scroll to top to go up
$('.scroll-up').click(function(event){
event.preventDefault();
$('html,body').animate({
	//scrollTop=0
},1000);
});
//text area

var maxText = $('textarea').attr('maxlenght');
$('.message').html('<span>'+ maxText + '</span> characters remaining');
$('textarea').keyup(function(){
var textLenght=$(this).val().lenght,
remChars=maxText-textLenght;
$('.message').html('<span>'+ remChars + '</span> characters remaining');
});
//countdown
var ourCountdown =setInterval(function(){
var counter =parseInt($('.countdown').html());
if (counter !==0) {
	$('.countdown').html(counter-1);
}else{
	clearInterval(ourCountdown);
	$('.countdown').html('Done');
}
},1000);


//caching the main element
var scrollButton=$('#scroll-up');
//on window scrolling

$(window).scroll(function(){
	
	
	$(this).scrollTop() >= 500 ? scrollButton.show():scrollButton.hide();
	
});
scrollButton.click(function(){
	$("html,body").animate({
		scrollTop:0
	},20);
});

//animation not end
$(function animateImage(){
$('.offer img').animate({
top:'-180px'
},1000,function(){
	$(this).animate({
		top:'-132px'
	},1000, function (){
		animateImage();
		});
});

})();

//select box number auto
for(var i=1960;i<=2015;i++){
	$("<option>",{value:i,text:i}).appendTo($("#years"));
	
}
//show first info
$('.info').first().show().animate({width:'40%'});
//show info on click
$(".item").click(function(){
$(this).next().show().animate({width:'40%'})
.siblings('.info').animate({width:0},function(){$(this).hide()});
});
//click on the button to switch style
$("button").click(function(){
	$("link[href*='theme']").attr("href","css/"+$(this).val()+".css");

});
});

