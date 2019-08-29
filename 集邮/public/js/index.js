$(function(){
  $.ajax({
  url:"/index_img ",
  type:"get",
  dataType:"json",
  success:function(result){
    var [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13]=result;
    $("#carousel>img:nth-child(1)").attr("src",`${p1.pic}`);
    $("#carousel>img:nth-child(2)").attr("src",`${p2.pic}`);
    $("#carousel>img:nth-child(3)").attr("src",`${p3.pic}`);
    $("#carousel>img:nth-child(4)").attr("src",`${p4.pic}`);
    $("#carousel>img:nth-child(5)").attr("src",`${p5.pic}`);
    $("#carousel>img:nth-child(6)").attr("src",`${p6.pic}`);
    $(".pic01>img").attr("src",`${p7.pic}`);
    $(".pic02>img").attr("src",`${p8.pic}`);
    $(".pic03>img").attr("src",`${p9.pic}`);
    $(".pic04>img").attr("src",`${p10.pic}`);
    $(".pic05>img").attr("src",`${p11.pic}`);
    $(".pic06>img").attr("src",`${p12.pic}`);
    $(".pic07>img").attr("src",`${p13.pic}`);
    $(".post-slide>p").html(`${p7.details}`)
    $(".post-slide>a").html(`${p7.title}`)
}})
}())