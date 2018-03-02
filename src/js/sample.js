$(document).ready(function(){
	eventBind();          //绑定流程事件

	start();              //“开始探索”按钮事件

	button();              //下方按钮控制

});


function eventBind() {              //绑定流程事件
	$('body').bind('labelOpen',function () {      //让卷轴出现
		$('#flower-container').fadeOut(1000);
		$('#bgm-control').css('display','none');
		$('#mark_container').addClass('blur');
		$('#label').fadeIn('fast');
		var timing = 1900;
		setTimeout(function () {
			$('body').trigger("backToStart");     //镜头回到一开始进入场景时的的远景俯视角度
		},timing);
		$('#label').css({
			/*'display':'block',*/
			'animation':'labelIn 1.8s linear',
			'-webkit-animation':'labelIn 1.8s linear'/*,
			'animation-fill-mode':'forwards'*/
		});
		$('body').trigger('findFinish');          //触发分享内容改变事件

		setTimeout(function () {
			$('#mark_container').removeClass('blur');
			$('#label-container').fadeOut(2000);
		},3000);
	});

	$('body').bind('alreadyBack',function () {
		$('#bgm-control').css('display','block');
		$('#points').fadeIn(1000);
		$('#hand').fadeIn(1000);
		if(navigator.platform=="Win32"){                //区别PC或者移动端
			$('body').one('click',function () {
				$('#points').css('display','none');
				$('#hand').css('display','none');

				$('#photo-container').css('display','block');
				$('#share-container').css('display','block');
			});
		}else{
			$('body').one('touchstart',function () {
				$('#points').css('display','none');
				$('#hand').css('display','none');

				$('#photo-container').css('display','block');
				$('#share-container').css('display','block');
			});
		}
	});

	$('body').bind('loaded',function () {
		$('#start').fadeIn(2000);                            //开始按钮
	});

	$('body').bind('getFlower',function (e,n) {              //桃花计数
		$('#flower-'+n).attr('src','images/f'+n+'-on.png');
		$('#boom').attr('src','');
		$('#boom').attr('src','images/boom.gif');
		$('#boom').on('load',function () {
			$('#boom').css('display','block');
			setTimeout(function () {
				$('#boom').css('display','none');
			},1000);
		});
	});

}

function start() {                   //“开始探索”按钮事件
	$("#start").click(function () {
		$('#start').fadeOut(1000);
		$('#intro').fadeOut(1000);
		$('#flower-container').fadeIn(1000);
		$('body').trigger('enter');          //“开始探索”后镜头移动事件: enter
	});
}


function scollText() {					//生成随机祝福语
	var num = roll(13);
	var index = num-1;
	var src = 'images/label-'+ num +'.png';
	var src2 = 'images/cards-'+ num +'.jpg';
	$('#label').attr('src',src);
	$('#cards').attr('src',src2);
	var text = ['颜值正义','老板撒币','好运当头','步步高升','福星高照','新年暴富','财源滚滚','瘦出腹肌','佛系安宁','活出真我','平安喜乐','百吃不胖','汪年大吉'];
	var result = text[index];
	return {num:num,result:result};
}

function musicControl() {				//背景音乐控制(在wx.ready里加载，无需再在body绑定)
	var audioObject = document.getElementsByTagName("audio");
	var audio =  Array.from(audioObject);
	audio.forEach(function (el) {
		el.load();
		el.volume = 0.85;
	});
	var bgm = document.getElementById("bgm");
	bgm.play();
	$('#bgm-control').click(function () {
		if ($('#bgm-control').attr('src')=='images/bgm-on.png') {
			$('#bgm-control').attr('src','images/bgm-off.png');
			bgm.pause();
		}else{
			$('#bgm-control').attr('src','images/bgm-on.png');
			bgm.play();
		}
	});
}


function button() {          //按钮绑定
	$('#photo').click(function () {                 //拍照分享
		$('#share-container').css('display','none');
		$('#photo-container').css('display','none');
		$('#bgm-control').css('display','none');
		$('#mark_container').addClass('blur');
		$('#screenshot-container').css('display','flex');
	});

	$('#close').click(function () {                 //截图分享页关闭按钮
		$('#screenshot-container').css('display','none');
		$('#share-container').css('display','block');
		$('#photo-container').css('display','block');
		$('#bgm-control').css('display','block');
		$('#mark_container').removeClass('blur');
		// discoverMore();
	});

	$('#share').click(function () {                 //直接分享遮罩提示
		$('#highlight').css('display','none');
		$('#cover').css('display','block');

		setTimeout(function () {                    //自动关闭遮罩
			$('#cover').css('display','none');
		},3000)

	});

	$('#cover').click(function () {                 //可手动关闭遮罩
		$(this).css('display','none');
	});

	$('#out').click(function () {
		$('#jump-container').css('display','none');
	});
}


function roll(n) {                   //N个数中随机生成一个
	rdm = Math.random();
	for (var i = 1; i < n; i++) {
		if (rdm < i/n) {
			return i;
		}
	}
	return n;
}

function discoverMore() {             //探索更多
	$('#jump-container').css('display','block');
}

function convert2canvas() {
    var shareContent = $('#card').get(0);
    var width = shareContent.offsetWidth;
    var height = shareContent.offsetHeight;
    var canvas = $('#h2c').get(0);
    var scale = window.devicePixelRatio*3;

    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.getContext("2d").scale(scale, scale);

    var opts = {
        scale: scale,
        canvas: canvas,
        logging: false,
        width: width,
        height: height,
        allowTaint : false,
        useCORS: true // 【重要】开启跨域配置
    };
    html2canvas(shareContent, opts).then(function (canvas) {
        var context = canvas.getContext('2d');
        // 【重要】关闭抗锯齿
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

		var src2 = canvas.toDataURL();
		// $('#close').after('<img scr="'+src2+'"id="pic">');
		$('#pic').attr('src',src2);
		$('#pic').on('load',function () {
			$('#pic').css('display','block');
		});
		// $('#pic').css({
		// 	'width': '70%',
		// 	'margin': 'auto',
		// 	'margin-top': '1rem',
		// 	'padding': '1rem'
		// });
		//$('#card').css('display','none');
    });
}

