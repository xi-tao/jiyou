jQuery(document).ready(function($){
	//cache some jQuery objects
	var modalTrigger = $('.cd-modal-trigger'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.cd-modal');

	var frameProportion = 1.78, //png frame aspect ratio
		frames = 25, //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
	modalTrigger.on('click', function(event){	
		event.preventDefault();
		transitionLayer.addClass('visible opening');
		var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
		setTimeout(function(){
			modalWindow.addClass('visible');
		}, delay);
	});

	//close modal window
	modalWindow.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;
	}
});

window.onload=function(){
	var btnShare=document.getElementById('btn_share');
	var ul=document.getElementById('ul');
	var li=ul.children;
	//分享关闭
	document.onclick=function(){
			ul.style.display='';
	};
	//分享打开
	btnShare.onclick=function(e){
			e.stopPropagation();
			ul.style.display='block';
	};
	//分享点击
	for(var i=0;i<li.length;i++){
			li[i].index=i;
			li[i].onclick=function(e){
					e.stopPropagation();
					//qq
					if(this.index===0){
							var p = {
									url: 'https://www.iconfont.cn/',/*获取URL，可加上来自分享到QQ标识，方便统计*/
									desc: '来自网页的分享', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
								
									site: 'hu\'s comment'/*分享来源 (可选) ，如：QQ分享*/
							};


							var s = [];
							for (var i in p) {
									s.push(i + '=' + encodeURIComponent(p[i] || ''));
							}
							var target_url = "http://connect.qq.com/widget/shareqq/iframe_index.html?" + s.join('&') ;
							window.open(target_url, 'qq',
									'height=520, width=720');
					}
					//qq空间
					else if(this.index===1){
							var p1 = {
									url: 'https://www.iconfont.cn/',/*获取URL，可加上来自分享到QQ标识，方便统计*/
									desc: '来自网页的分享', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
									site: 'hu\'s comment'/*分享来源 (可选) ，如：QQ分享*/
							};


							var s1 = [];
							for (var i1 in p1) {
									s1.push(i1 + '=' + encodeURIComponent(p1[i1] || ''));
							}
							var target_url1 =  "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+ s1.join('&') ;
							window.open(target_url1, 'qZone',
									'height=520, width=720');
					}
					//微博
					else {
							var param = {
									url: 'https://www.iconfont.cn/',/*获取URL，可加上来自分享到QQ标识，方便统计*/
									desc: '来自浩博的分享', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
									site: 'hu\'s comment'/*分享来源 (可选) ，如：QQ分享*/
									};
							var temp = [];
							for( var p3 in param ){
									temp.push(p3 + '=' +encodeURIComponent( param[p3 ] || '' ) )
							}
							var target_url3 =
									"http://service.weibo.com/share/share.php?"+temp.join('&');
							window.open(target_url3, 'sinaweibo',
									'height=430, width=400');
					}
			}
	}
}