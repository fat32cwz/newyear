<?php
require_once "jssdk.php";
include 'fileAppend.php';
//config
$main_url = 'http://h5.goqo.com.cn/newyear/';
$debug = true;   //是否开启开发模式

$code=$_GET["code"];
if ($code==NULL&&$debug==false) {
    header("location:".$main_url."brige.php");
    die();
}
$resp1=file_get_contents('https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx9e20c6627fd372a7&secret=8a80c4f00a6e754ebc314ddf1893a63e&code='.$code.'&grant_type=authorization_code');
$arr1=json_decode($resp1,true);
$access_token=$arr1["access_token"];
$openid=$arr1["openid"];
$resp2=file_get_contents('https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$openid.'&lang=zh_CN');
$arr2=json_decode($resp2);
if($debug==false){
    WriteLog($arr2);
}
$jssdk = new JSSDK("wx9e20c6627fd372a7", "8a80c4f00a6e754ebc314ddf1893a63e");
$signPackage = $jssdk->GetSignPackage();
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <title>新年3D幸运签</title>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/sample.css">
    <link rel="stylesheet" href="css/comic.css">
    <link rel="stylesheet" href="css/loading.css">
	<style>
		body { margin: 0; }
		#mark_container>canvas {
			position: fixed;
			height: 100%;
			width: 100%;
			top:0;
			left:0;
		}
	</style>
</head>
<body>
	<div id="mark_container"></div>
    <!-- 字幕 -->
    <div id="footer">
        <!-- <div class="notice" id="notice0">无问西东，自由时空……</div>
        <div class="notice" id="notice1">想要知道戊戌狗年运程如何？</div>
        <div class="notice" id="notice2">只要收集齐散落世界的4朵幸运花，</div>
        <div class="notice" id="notice3">就能开启新年的幸运密语！</div> -->
        <!-- <button id="start">开始探索</button> -->
        <img src="images/start.png" alt="开始探索" id="start">
    </div>
    <!-- 字幕 -->

    <!-- 玩法提示 -->
    <img src="images/intro.png" alt="" id="intro">
    <!-- 玩法提示 -->

    <!-- 桃花计数器 -->
    <div id="flower-container">
        <img src="images/f0-off.png" alt="" class="flower" id="flower-0">
        <img src="images/f1-off.png" alt="" class="flower" id="flower-1">
        <img src="images/f2-off.png" alt="" class="flower" id="flower-2">
        <img src="images/f3-off.png" alt="" class="flower" id="flower-3">
    </div>
    <!-- 桃花计数器 -->

    <!-- 桃花点击特效 -->
    <img src="images/boom.gif" alt="" id="boom">
    <!-- 桃花点击特效 -->

    <!-- 签 -->
    <div id="label-container">
        <img src="" alt="" id="label">
        <!-- <img src="images/cloud-l.png" alt="" id="cloud1">
        <img src="images/cloud-r.png" alt="" id="cloud2"> -->
    </div>
    <!-- 签 -->

    <!-- 左右滑动提示 -->
    <img src="images/points.png" alt="" id="points">
    <img src="images/hand.gif" alt="" id="hand">
    <!-- 左右滑动提示 -->

    <!-- 背景音乐播放 -->
    <audio src="sound/bgm.mp3" loop="loop" preload="auto" id="bgm" autoplay>
         <source src="sound/bgm.mp3" type="audio/mpeg">
    </audio>
    <img src="images/bgm-on.png" alt="" id="bgm-control">
    <!-- 背景音乐播放 -->

    <!-- 点击花时播放 -->
    <audio src="sound/get2.mp3" id="bgm_clickBlossom_0" preload="auto"></audio>
    <audio src="sound/get2.mp3" id="bgm_clickBlossom_1"></audio>
    <audio src="sound/get2.mp3" id="bgm_clickBlossom_2"></audio>
    <audio src="sound/get2.mp3" id="bgm_clickBlossom_3"></audio>
    <!-- 点击花时播放 -->

	<!-- 点狗狗时播放 -->
	<audio src="sound/dog.mp3" id="bgm_dog" preload="auto"></audio>
	<!-- 点狗狗时播放 -->

	<!-- 点炮仗时播放 -->
	<audio src="sound/bianpao.mp3" id="bgm_bianpao" preload="auto"></audio>
	<!-- 点炮仗时播放 -->


    <!-- 分享功能 -->
    <div id="photo-container">
        <img src="images/photo.png" alt="" id="photo">
    </div>
    <div id="share-container">
        <div id="highlight"></div>
        <img src="images/share.png" alt="" id="share">
    </div>
    <!-- <div id="screenshot-container">
        <canvas id="h2c"></canvas>
        <div id="card">
            <img src="" alt="" id="card-photo">
            <div id="card-content">
                <img id="card-content-title" src="images/title3.png" alt="">
                <div id="card-content-qrcode">
                    <img src="images/qrcode.png" alt="" id="qrcode">
                    <div id="tips">扫码开启旅程</div>
                </div>
            </div>
        </div>
        <div id="shade"></div>
        <img src="images/close.png" alt="" id="close">
        <img src="" alt="" id="pic">
        <div id="footer-tips"><p id="tips-text">长按保存图片并分享好友</p></div>
    </div> -->
    <div id="screenshot-container">
        <img src="images/close.png" alt="" id="close">
        <img src="" alt="" id="cards">
        <div id="tips-text">长按保存图片并分享好友</div>
    </div>
    <div id="cover">
        <img src="images/arrow.png" alt="" id="arrow">
        <img src="images/lucky.png" id="cover-text">
    </div>
    <!-- 分享功能 -->

    <!-- 跳转 -->
    <div id="jump-container">
        <div id="jump-content">
            <img src="images/out.png" alt="" id="out">
            <img src="images/world.png" alt="" id="world">
            <img src="images/more.png" alt="" id="more">
        </div>
    </div>
    <!-- 跳转 -->

    <!-- loading -->
    <div id="loading"></div>
    <div id="loading-test" style="position:fixed; bottom:0; left:0; z-index:999;"></div>
    <!-- loading -->

	<!-- plugin -->
    <script src="js/plugin/jquery-3.2.1.min.js"></script>
<!--     <script src="js/plugin/html2canvas.js"></script> -->
    <script src="js/plugin/jweixin-1.2.0.js"></script>
	<script src="js/plugin/three.min.js"></script>
	<script src="js/plugin/OrbitControls.js"></script>
	<!-- plugin -->

	<!-- wx -->
    <script src="js/sample.js"></script>
    <script>
        var bless = scollText();     //随机生成的祝福语
        var num = bless.num;
        var result = bless.result;
        console.log(num,result);
        wx.config({
            debug: false,
            appId: '<?php echo $signPackage["appId"];?>',
            timestamp: <?php echo $signPackage["timestamp"];?>,
            nonceStr: '<?php echo $signPackage["nonceStr"];?>',
            signature: '<?php echo $signPackage["signature"];?>',
            jsApiList: [
            'onMenuShareAppMessage','onMenuShareTimeline'
                // 所有要调用的 API 都要加到这个列表中
            ]
        });
        wx.ready(function () {
            wx.onMenuShareAppMessage({         //分享给朋友接口
                // title: '<?php echo $arr2->nickname;?>'+'邀请您踏上奇妙的旅程', // 分享标题
                title: '召唤你的新年3D幸运签！', // 分享标题
                //desc: '寻找散落在世界的4朵桃花,开启新年的幸运密匙！', // 分享描述
                desc: '新年抽签年年玩？我们不一样！', // 分享描述
                link: '<?php echo $main_url;?>'+'brige.php', // 分享链接
                imgUrl: '<?php echo $main_url;?>'+'images/default.jpg', // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareTimeline({           //分享到朋友圈接口
                title: '召唤你的新年3D幸运签！', // 分享标题
                link: '<?php echo $main_url;?>'+'brige.php', // 分享链接
                imgUrl: '<?php echo $main_url;?>'+'images/default.jpg', // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            musicControl();              //音乐自动播放
            // 在这里调用 API
        });
        $('body').bind('findFinish',function () {
            wx.onMenuShareAppMessage({         //分享给朋友接口
                title: '<?php echo $arr2->nickname;?>'+'的戊戌狗年3D幸运签：'+ result, // 分享标题
                desc: '你的专属3D彩签，快来抽抽看吧！', // 分享描述
                link: '<?php echo $main_url;?>'+'brige.php', // 分享链接
                imgUrl: '<?php echo $main_url;?>'+'images/small-'+ num +'.jpg', // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // discoverMore();// 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareTimeline({           //分享到朋友圈接口
                title: '<?php echo $arr2->nickname;?>'+'的戊戌狗年3D幸运签：'+ result, // 分享标题
                link: '<?php echo $main_url;?>'+'brige.php', // 分享链接
                imgUrl: '<?php echo $main_url;?>'+'images/small-'+ num +'.jpg', // 分享图标
                success: function () {
                    // discoverMore();// 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        });
    </script>
	<!-- wx -->

    <!-- lhc -->
    <script src="js/lhc/Component.js"></script>
    <script src="js/lhc/getResources.js"></script>
    <script src="js/lhc/loading.js"></script>
    <!-- lhc -->

	<!-- scene -->
	<script src="js/scene/Init_scene1.js"></script>
	<script src="js/scene/CWin.js"></script>
	<script src="js/scene/CMouse.js"></script>
	<script src="js/scene/CView.js"></script>
	<script src="js/scene/CCamera.js"></script>
	<script src="js/scene/CModel.js"></script>
	<script src="js/scene/CHelper_scene1.js"></script>
	<script src="js/scene/CFunc.js"></script>
	<script src="js/scene/3dobjInit.js"></script>
	<script src="js/scene/main_scene1.js"></script>
	<!-- scene -->
</body>
</html>