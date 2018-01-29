$(document).ready(function(){
	eventBind();          //绑定流程事件

	tips();               //提示字幕的交替变化

	scollText();		  //生成随机签

	start();              //“开始探索”按钮事件

	musicControl();       //背景音乐控制按钮

	photo();              //拍照截图功能

	share();              //分享遮罩提示

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
	});
}


function scollText() {					//生成随机祝福语
	var index = parseInt(Math.random()*3)+1;
	var result = 'images/label-'+ index +'.png';
	$('#label').attr('src',result);
	return result;
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

function photo() {						//拍照分享
	$('#photo').click(function () {
		//截屏动画效果？？？？
		html2canvas($('body'),{
			onrendered: function (canvas) {
				$('#card').prepend(canvas);
				$('#screenshot-container').css('display','block');
			}
		});
	});
}

function share() {                   	//普通分享
	$('#share').click(function () {
		$('#cover').css('display','block');
		setTimeout(function () {
			$('#cover').css('display','none');
		},3000)
	});

	$('#cover').click(function () {
		$(this).css('display','none');
	});
}