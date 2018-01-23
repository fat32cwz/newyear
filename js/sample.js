$(document).ready(function(){
	eventBind();          //绑定流程事件

	tips();               //提示字幕的交替变化

	start();              //“开始探索”按钮事件

});


function eventBind() {              //绑定流程事件
	$('body').bind('labelOpen',function () {      //让卷轴出现
		$('#cloud1').css('display','block');
		$('#cloud1').animate({left:'-30px'},"slow");
		setTimeout(function () {
			$('#cloud2').css('display','block');
			$('#cloud2').animate({right:'-30px'},"slow");
			setTimeout(function () {
				$('#label').css({
					'display':'block',
					'animation':'labelIn 2s linear',
					'-moz-animation':'labelIn 2s linear',
					'-webkit-animation':'labelIn 2s linear',
					'-o-animation':'labelIn 2s linear'/*,
					'animation-fill-mode':'forwards'*/
				});
			},1000);
		},1500);

		$('body').trigger('findFinish');          //触发分享内容改变事件
		// setTimeout(function () {
		// 	$('#label-container').fadeOut(2000,function () {
		// 		$('body').trigger("backToStart");     //镜头回到一开始进入场景时的的远景俯视角度
		// 		$('#share1').css('display','block');
		// 		$('#share2').css('display','block');
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
	var text = new Array("1","2","3","4","5","6","7","8","9","10");
	var index = parseInt(Math.random()*10);
	var result = text[index];
	$('#scoll').text(result);
	return result;
}

function musicControl() {				//背景音乐控制
	// body...
}

function share1() {						//拍照分享
	// body...
}

function share2() {                   	//普通分享
	// body...
}