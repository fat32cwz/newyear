$(document).ready(function(){
	eventBind();          //绑定流程事件

	tips();               //提示字幕的交替变化

	start();              //“开始探索”按钮事件

	musicControl();       //背景音乐控制按钮

	button();              //下方按钮控制

});


function eventBind() {              //绑定流程事件
	$('body').bind('labelOpen',function () {      //让卷轴出现
		// $('#cloud1').css('display','block');
		// $('#cloud1').animate({left:'-30px'},"slow");
		// setTimeout(function () {
		// 	$('#cloud2').css('display','block');
		// 	$('#cloud2').animate({right:'-30px'},"slow");
		// 	setTimeout(function () {
		// 		$('#label').css({
		// 			'display':'block',
		// 			'animation':'labelIn 2s linear',
		// 			'-moz-animation':'labelIn 2s linear',
		// 			'-webkit-animation':'labelIn 2s linear',
		// 			'-o-animation':'labelIn 2s linear'/*,
		// 			'animation-fill-mode':'forwards'*/
		// 		});
		// 	},1000);
		// },1500);
		$('#l3').animate({left:'-30px'},'slow');
		$('#r3').animate({right:'-30px'},'slow');
		setTimeout(function () {
			$('#l2').animate({left:'-30px'},'slow');
			$('#r2').animate({right:'-30px'},'slow');
			setTimeout(function () {
				$('#l1').animate({left:'-30px'},'slow');
				$('#r1').animate({right:'-30px'},'slow');
				setTimeout(function () {
					$('#bg').css({
						'filter':'blur(10px)',
						'webkit-filter':'blur(10px)'
					});
					$('#label').fadeIn('fast');
					$('#label').css({
						/*'display':'block',*/
						'animation':'labelIn 1.8s linear',
						'-webkit-animation':'labelIn 1.8s linear'/*,
						'animation-fill-mode':'forwards'*/
					});
					setTimeout(function () {
						$('#photo-container').fadeIn('fast');
						$('#share').fadeIn('fast');
					},2500);
				},500);
			},250);
		},250);
		$('body').trigger('findFinish');          //触发分享内容改变事件
		// setTimeout(function () {
		// 	$('#label-container').fadeOut(2000,function () {
		// 		$('body').trigger("backToStart");     //镜头回到一开始进入场景时的的远景俯视角度
		// 		$('#photo').css('display','block');
		// 		$('#share').css('display','block');
		// 	});
		// },3000);
	});
}

function tips() {              //提示字幕的交替变化
	setTimeout(function () {
		$('#notice0').fadeOut(2000,function () {
			$('#notice1').fadeIn(2000,function () {
				$('#notice1').fadeOut(2000,function () {
					$('#notice2').fadeIn(2000,function () {
						$('#notice2').fadeOut(2000,function () {
							$('#notice3').fadeIn(2000,function () {
								$('#notice3').fadeOut(2000,function () {
									$('#start').fadeIn(2000);
								});
							});
						});
					});
				});
			});
		})
	},3500);
}

function start() {                   //“开始探索”按钮事件
	$("#start").click(function () {
		$('#start').fadeOut(2000);
		$('#flower-container').css('display','block');
		setTimeout(function () {                 //花出现的特效动画+触发镜头移动事件
			// $('#f1').css({
			// 	'animation':'move1 2s linear',
			// 	'-moz-animation':'move1 2s linear',
			// 	'-webkit-animation':'move1 2s linear',
			// 	'-o-animation':'move1 2s linear',
			// 	'animation-fill-mode':'forwards'
			// });
			// $('#f2').css({
			// 	'animation':'move2 1.7s linear',
			// 	'-moz-animation':'move2 1.7s linear',
			// 	'-webkit-animation':'move2 1.7s linear',
			// 	'-o-animation':'move2 1.7s linear',
			// 	'animation-fill-mode':'forwards'
			// });
			// $('#f3').css({
			// 	'animation':'move3 1.5s linear',
			// 	'-moz-animation':'move3 1.5s linear',
			// 	'-webkit-animation':'move3 1.5s linear',
			// 	'-o-animation':'move3 1.5s linear',
			// 	'animation-fill-mode':'forwards'
			// });
			// $('#f4').css({
			// 	'animation':'move4 1.5s linear',
			// 	'-moz-animation':'move4 1.2s linear',
			// 	'-webkit-animation':'move4 1.2s linear',
			// 	'-o-animation':'move4 1.2s linear',
			// 	'animation-fill-mode':'forwards'
			// });
			// $('#f5').css({
			// 	'animation':'move5 1.4s linear',
			// 	'-moz-animation':'move5 1.4s linear',
			// 	'-webkit-animation':'move5 1.4s linear',
			// 	'-o-animation':'move5 1.4s linear',
			// 	'animation-fill-mode':'forwards'
			// });
			setTimeout(function () {
				$('body').trigger('enter');          //“开始探索”后镜头移动事件: enter
			},2000);
		},1000);
		$('body').trigger('labelOpen');
		$('#points').css('display','block');
		$('#hand').css('display','block');
	});
}


function scollText() {					//生成随机祝福语
	var num = roll(12);
	var index = num-1;
	var src = 'images/label-'+ num +'.png';
	$('#label').attr('src',src);
	var text = ['颜值正义','老板撒币','好运当头','步步高升','福星高照','新年暴富','财源滚滚','瘦出腹肌','佛系安宁','活出真我','平安喜乐','百吃不胖'];
	var result = text[index];
	return {num:num,result:result};
}

function musicControl() {				//背景音乐控制
	var audio = document.getElementById("bgm");
	audio.volume = 0.85;
	$('#bgm-control').click(function () {
		if ($('#bgm-control').attr('src')=='images/bgm-on.png') {
			$('#bgm-control').attr('src','images/bgm-off.png');
			audio.pause();
		}else{
			$('#bgm-control').attr('src','images/bgm-on.png');
			audio.play();
		}
	});
}


function button() {          //按钮绑定
	$('#photo').click(function () {                 //拍照分享
		//截屏动画效果？？？？
		html2canvas($('body'),{
			onrendered: function (canvas) {
				if ($('#card canvas').length>0) {
					$('#card canvas').remove();
				}
				$('#card').prepend(canvas);
				$('#screenshot-container').css('display','block');
			}
		});

		// var src = $('#3d').toDataURL("image/png");    //未来方案
		// $('#card-photo').attr('src',src);
		// html2canvas($('#card'),{
		// 	onrendered: function (canvas) {
		// 		var src2 = canvas.toDataURL("image/png");
		// 		$('#card-photo').attr('src',src2);
		// 	}
		// });
	});

	$('#close').click(function () {                 //截图分享页关闭按钮
		$('#screenshot-container').css('display','none');
	});

	$('#share').click(function () {                 //直接分享遮罩提示
		$('#cover').css('display','block');

		setTimeout(function () {                    //自动关闭遮罩
			$('#cover').css('display','none');
		},3000)

	});

	$('#cover').click(function () {                 //可手动关闭遮罩
		$(this).css('display','none');
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