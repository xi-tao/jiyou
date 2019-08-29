$(".tile").click(function(){
  setTimeout(function(){
    slice01("html/spxq.html")
  },100);
})

var slice01=function(src){
  var str='http://127.0.0.1:3000/'
  str+=src;
  return window.location.href=str;
}