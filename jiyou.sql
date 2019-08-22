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
INSERT INTO jy_user 
VALUES("1","dingding","123456","123456@qq.com","13888888888","img/selectE_5.jpg"
,"丁丁","0");