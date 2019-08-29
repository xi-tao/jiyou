#设置储存编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS jy;
#创建数据库,设置储存编码
CREATE DATABASE jy CHARSET=UTF8;
#进入数据库
USE jy;
#用户表jy_user
CREATE TABLE jy_user(
	uid INT  PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(11),
	avatar VARCHAR(128),
	user_name VARCHAR(32),
	gender INT
);
INSERT INTO jy_user VALUES("1","dingding","123456","123456@qq.com","13888888888","img/selectE_5.jpg"
,"丁丁","0");

#首页图片表jy_index_img
CREATE TABLE jy_index_img(
	pid 	INT 	PRIMARY KEY AUTO_INCREMENT,	
	title 	VARCHAR(64),		#图片标题
	details 	VARCHAR(128),            		#详细描述
	pic 	VARCHAR(128)           		#图片
);
#轮播图片
INSERT INTO jy_index_img VALUES("1","五岳图","主页轮播","/image/03.jpg");
INSERT INTO jy_index_img VALUES("2","古代神话","主页轮播","/image/04.jpg");
INSERT INTO jy_index_img VALUES("3","鲁班","主页轮播","/image/05.jpg");
INSERT INTO jy_index_img VALUES("4","川藏青藏","主页轮播","/image/01.jpg");
INSERT INTO jy_index_img VALUES("5","扫彩蛋","主页轮播","/image/02.jpg");
INSERT INTO jy_index_img VALUES("6","青年个性邮票设计","主页轮播","/image/06.jpg");
#邮票分类图片
INSERT INTO jy_index_img VALUES("7","查看更多","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.","/image/sx.jpg");
INSERT INTO jy_index_img VALUES("8","查看更多","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.","/image/jr.jpg");
INSERT INTO jy_index_img VALUES("9","查看更多","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.","/image/zz.jpg");
INSERT INTO jy_index_img VALUES("10","查看更多","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.","/image/wx.jpg");
INSERT INTO jy_index_img VALUES("11","查看更多","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.","/image/fj.jpg");
INSERT INTO jy_index_img VALUES("12","查看更多","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.","/image/ty.jpg");
INSERT INTO jy_index_img VALUES("13","查看更多","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.","/image/ww.jpg");
#生肖页面图片表jy_sx_img
CREATE TABLE jy_sx_img(
	pid 	INT 	PRIMARY KEY AUTO_INCREMENT,	
	title 	VARCHAR(64),		#商品标题
	fxri  VARCHAR(64),    #发行日期
	details 	VARCHAR(128),            		#详细描述
	pic 	VARCHAR(128)           		#图片
);
INSERT INTO jy_sx_img VALUES("1","子鼠","2020年预售发行","在12生肖动物中，鼠是最后一个走进邮票这个“方寸世界”的，比起最先上了邮票的马整整晚了95年。但邮票上的老鼠却“繁衍”迅速，而且形象越来越可爱。","../image/sx/sxl/sxshu.jpg");
INSERT INTO jy_sx_img VALUES("2","丑牛","2009年1月5日","牛邮票,是邮政部门为适应邮政业务和商机有意识以生肖属相或文字为图案发行的邮资凭证。我国发行了多套牛或与牛相关题材的邮票，而真正意义的牛生肖邮票，则是1985年1月5日才发行","../image/sx/sxl/sxn.jpg");
INSERT INTO jy_sx_img VALUES("3","寅虎","2020年预售发行","86年发行的第一轮生肖虎邮票发行之后就在收藏界引起了轩然大波，是因为该枚邮票的  主题是十二生肖中的老虎，更是因为在这枚邮票之前的那些邮票都没有得到一个好的市场行情，","../image/sx/sxl/sxh02.jpg");
INSERT INTO jy_sx_img VALUES("4","卯兔","2011年1月5日","各种“兔”寓意不同，有积极、善良、超越、和平等寓意，根据中国古老的生肖释义，兔是机敏和幸运的象征，兔年将是非同一般的繁忙但却是祥和平静的一年。","../image/sx/sxl/sxt.jpg");
INSERT INTO jy_sx_img VALUES("5","辰龙","2012年1月5日","票面上，一条金色团龙正面对人，圆睁双眼，张开大嘴，威风凛凛，霸气外露。龙形象威严庄重，着色喜庆，一身正气，体现了民间对避邪和吉祥的期盼。","../image/sx/sxl/sxl.jpg");
INSERT INTO jy_sx_img VALUES("6","巳蛇","2013年1月5日","邮票图案中的正面龙形象威严庄重，着色喜庆，一身正气，给人以信心和力量，同时也体现了民间对避邪和吉祥的期盼","../image/sx/sxl/sxs.jpg");
INSERT INTO jy_sx_img VALUES("7","午马","2014年1月5日","表现出了马的俊朗、强健与吉祥。白马面颊俊秀、筋骨雄强、体态优雅、气宇轩昂，装饰在马身上的牡丹、蝙蝠，表达了“马上得福”、“吉祥富贵”的美好祝愿","../image/sx/sxl/sxm.jpg");
INSERT INTO jy_sx_img VALUES("8","末羊","2015年1月5日","《说文解字》中说:'羊，祥也。'三阳'意为春天的开始，表示冬去春来，阴阳消长，万物复苏。而'开泰'则表示吉祥亨通，有好运将降临之意。","../image/sx/sxl/sxy.jpg");
INSERT INTO jy_sx_img VALUES("9","申猴","2016年1月5日","它选择的是一只母猴子抱着两只猴崽子的图案，这个的寓意就是阖家团圆，它很好传达了对美好生活的向往，同时也寄托了人们对十二生肖的情感。","../image/sx/sxl/sxh.jpg");
INSERT INTO jy_sx_img VALUES("10","酉鸡","2017年1月5日","在生肖文化中，老百姓对于有关于鸡的趣事并不陌生，比如“闻鸡起舞”，这个典故告诉大家勤奋学习将有大成，另外鸡也是能克制毒的家禽，寓意着百姓可以过着平安的一年","../image/sx/sxl/sxj.jpg");
INSERT INTO jy_sx_img VALUES("11","戌狗","2006年1月5日","邮图主角“狗狗”，饰以铜铃、绣球、莲花和五彩尾巴等细节，突出了国泰民安、富贵吉祥的寓意。显然，这枚邮票的设计已将作为动物的“狗狗”升华为“瑞犬”，成为一个吉祥的符号。","../image/sx/sxl/sxg.jpg");
INSERT INTO jy_sx_img VALUES("12","亥猪","2007年1月5日","该枚邮票的图案选用了民间彩塑陶瓷玩具“富贵猪”，画面情趣盎然，体现出其乐融融的和谐氛围。五只“猪宝宝”意在表达传统文化中的“五福临门”、“五子登科”的吉祥寓意。","../image/sx/sxl/sxz.jpg");

#个人中心图片表jy_user_img
CREATE TABLE jy_user_img(
	pid 	INT 	PRIMARY KEY AUTO_INCREMENT,
	title 	VARCHAR(64),		#商品标题
	details 	VARCHAR(128),            		#详细描述
	pic 	VARCHAR(128)           		#图片
);