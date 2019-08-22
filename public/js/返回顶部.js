$(".w_return").click(function(e){
  e.preventDefault();
  window.scrollTo(0,0);
});

window.onscroll=function(){
  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;

  if(scrollTop>=600){
    $(".w_return").css("right","0px");
  }else{
    $(".w_return").css("right","-40px");
  }
}