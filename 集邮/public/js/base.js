$(function(){
    var book_data = [];
    var  book_data=[
        {
            img: "image/page_L2.jpg",
            num: 1,
            text: [
                " ",
            ],
            title: "",
            type: 2
        },{
            // 第二章
            img: "image/page_L3.jpg",
            num: 0,
            text: [],
            title: " ",
            type: 2
        }
        ,{
            img: "image/page_L4.jpg",
            num: 0,
            text: [" "
            ],
            title: "",
            type: 2
        },{
            // 第三章
            img: "image/page_L5.jpg",
            num: 1,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L6.jpg",
            num: 1,
            title: "",
            text: [" "],
            type: 2
        },{
            // 第四章
            img: "image/page_L7.jpg",
            num: 2,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L8.jpg",
            num: 2,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第五章
            img: "image/page_L9.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L10.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第六章
            img: "image/page_L11.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L12.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第七章
            img: "image/page_L13.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L14.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第八章
            img: "image/page_L15.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L16.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第九章
            img: "image/page_L17.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L18.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第十章
            img: "image/page_L19.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L20.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第十一章
            img: "image/page_L21.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L22.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第十二章
            img: "image/page_L23.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L24.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第十三章
            img: "image/page_L25.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L26.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第十四章
            img: "image/page_L27.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L28.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第十五章
            img: "image/page_L29.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L30.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第十六章
            img: "image/page_L31.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L32.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第十七章
            img: "image/page_L33.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L34.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第十八章
            img: "image/page_L35.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L36.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第十九章
            img: "image/page_L37.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L38.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第二十章
            img: "image/page_L39.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L40.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        },{
            // 第二十一章
            img: "image/page_L41.jpg",
            num: 3,
            title: " ",
            text: [],
            type: 2
        },{
            img: "image/page_L42.jpg",
            num: 3,
            title: "",
            text: [ " ",
            ],
            type: 2
        }
    ];
    creat_html(book_data)

    function creat_html(data,num){

        $('.flipbook').html('');
        var b_ok = true,
            b_num = 0;
        var html ='';

        for(var i=0; i<data.length; i++){
            if(b_ok){
                var type = data[i].type,
                    p_text = data[i].text,
                    page_html = '',
                    title = data[i].title,
                    isImg = data[i].isimg;

                var isshow = 'block';

                if(i == data.length -1){
                    isshow = 'none';

                }
                if(type == 1){
                    var pic_html = '',
                        pH = '',
                        pImg = '';

                    if(isImg){
                        pImg = '<img style="margin-bottom:25px;" src="'+isImg+'"/>'
                    }

                    for(var j=0; j<p_text.length; j++){
                        var p_arr = [],
                            arr_html = '';
                        if(p_text[j].indexOf('@') > 0){
                            p_arr = p_text[j].split('@');
                            for(var k=0; k<p_arr.length; k++){
                                arr_html+=p_arr[k] + "</br>"
                            }
                            pH += '<p class="text_pl">'+arr_html+'</p>'
                        }else{
                            pH += '<p class="text_pl">'+p_text[j]+'</p>'
                        }
                    }

                    page_html += '<div class="page_d">' +
                        '<div class="book_text">' +
                        pic_html+
                        pImg+
                        pH+
                        '</div>' +
                        '<p class="next_page" style="display:'+isshow+'">下一页</p>' +
                        '</div>'
                }

                if(type == 2){
                    var page_html = '';

                    page_html += '<div class="page_L1 cover"><img src="'+data[i].img+'" alt="">' +
                        '<p class="w_title">'+title+'</p>' +
                        '<p class="pre_page"> </p> ' +
                        '</div>'
                }

                if(type == 3){
                    var pic_html = ' ',
                        pH = '',
                        pImg = '';

                    if(isImg){
                        pImg = '<a target="_blank"><img src="'+isImg+'"/></a>'
                    }

                    for(var j=0; j<p_text.length; j++){
                        var p_arr = [],
                            arr_html = '';
                        if(p_text[j].indexOf('@') > 0){
                            p_arr = p_text[j].split('@');
                            for(var k=0; k<p_arr.length; k++){
                                arr_html+=p_arr[k] + "</br>"
                            }
                            pH += '<p class="text_pl">'+arr_html+'</p>'
                        }else{
                            pH += '<p class="text_pl">'+p_text[j]+'</p>'
                        }
                    }


                    page_html += '<div class="page_d">' +
                        '<div class="book_text">' +
                        pH+
                        pImg+
                        '</div>' +
                        '<p class="next_page" style="display:'+isshow+'"> </p>' +
                        '</div>'
                }
                html+=page_html;
            }
        }
        if(b_ok){
            $('.flipbook').append(html);
            var turnWidth = $('#cover').outerWidth(),
                turnHeight = $('#cover').outerHeight();

            $('.flipbook').turn({
                width: turnWidth*2+20,
                height: turnHeight,
                elevation: 50,
                gradients: true,
                autoCenter: true,
                display:'double',
                when: { turning: function(event, page, pageObject) {

                    } }
            });

            $('.bookmark').on('click','li',function(){
                var self = $(this),
                    id = self.attr('data-id');
                $('.flipbook').turn('page', id);
            })

            $('.back_catalog').click(function(){
                $('.flipbook').turn('page', 1);
            })
        }

    }
})