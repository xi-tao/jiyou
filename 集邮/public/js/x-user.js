$('li').mouseenter(function(){
	$(this).find('.news-list-card').css({left:'0px'})
	$(this).children('.news-list-card').find('.h3').css({left:'-10px'})
	$(this).children('.news-list-card').find('.p').css({left:'-10px'})
	$(this).children('.news-list-card').find('.more').css({transform:'scale(1.1)'})
	// $(this).children('.news-list-card').find('.p7').css({bottom:'25px'})
})
$('li').mouseleave(function(){
	$(this).find('.news-list-card').css({left:'-750px'})
	$(this).children('.news-list-card').find('.h3').css({left:'-750px'})
	$(this).children('.news-list-card').find('.p').css({left:'-750px'})
	$(this).children('.news-list-card').find('.more').css({transform:'scale(1.3)'})
	// $(this).children('.news-list-card').find('.p7').css({bottom:'-50px'})
})
//换一换
var $newsLists = $('.news-sub').find('.news-list-v');

function changeNews() {
	var $currentNews = $newsLists.filter('.show');
	var $nextNews = $currentNews.next();

	if($nextNews.length === 0) {
		$nextNews = $newsLists.eq(0);
	}

	$newsLists.removeClass('show');
	$nextNews.addClass('show');
}


$('.news-change').on('click', function() {
	changeNews();
});

function initparticles() {
	confetti();
	lines();
 }
 
 
 function bubbles() {
	$.each($(".particletext.bubbles"), function(){
	   var bubblecount = ($(this).width()/50)*10;
	   for(var i = 0; i <= bubblecount; i++) {
		  var size = ($.rnd(40,80)/10);
		  $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
	   }
	});
 }
 
 function hearts() {
	$.each($(".particletext.hearts"), function(){
	   var heartcount = ($(this).width()/50)*5;
	   for(var i = 0; i <= heartcount; i++) {
		  var size = ($.rnd(60,120)/10);
		  $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
	   }
	});
 }
 
 function lines() {
	$.each($(".particletext.lines"), function(){
	   var linecount = ($(this).width()/50)*10;
	   for(var i = 0; i <= linecount; i++) {
		  $(this).append('<span class="particle" style="top:' + $.rnd(-30,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(20,80) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
	   }
	});
 }
 
 function confetti() {
	$.each($(".particletext.confetti"), function(){
	   var confetticount = ($(this).width()/50)*10;
	   for(var i = 0; i <= confetticount; i++) {
		  $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
	   }
	});
 }
 
 function fire() {
	$.each($(".particletext.fire"), function(){
	   var firecount = ($(this).width()/50)*20;
	   for(var i = 0; i <= firecount; i++) {
		  var size = $.rnd(8,12);
		  $(this).append('<span class="particle" style="top:' + $.rnd(40,70) + '%; left:' + $.rnd(-10,100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,20)/10) + 's;"></span>');
	   }
	});
 }
 
 function sunbeams() {
	$.each($(".particletext.sunbeams"), function(){
	   var linecount = ($(this).width()/50)*10;
	   for(var i = 0; i <= linecount; i++) {
		  $(this).append('<span class="particle" style="top:' + $.rnd(-50,00) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(80,160) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
	   }
	});
 }
 
 jQuery.rnd = function(m,n) {
	   m = parseInt(m);
	   n = parseInt(n);
	   return Math.floor( Math.random() * (n - m + 1) ) + m;
 }
 
 initparticles();