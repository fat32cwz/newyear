<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx9e20c6627fd372a7", "8a80c4f00a6e754ebc314ddf1893a63e");
$signPackage = $jssdk->GetSignPackage();
$code=$_GET["code"];
$resp1=file_get_contents('https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx9e20c6627fd372a7&secret=8a80c4f00a6e754ebc314ddf1893a63e&code='.$code.'&grant_type=authorization_code');
$arr1=json_decode($resp1,true);
$access_token=$arr1["access_token"];
$openid=$arr1["openid"];
$resp2=file_get_contents('https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$openid.'&lang=zh_CN');
$arr2=json_decode($resp2);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <title>新年奇妙旅程</title>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/sample.css">
    <link rel="stylesheet" href="css/comic.css">
</head>
<body>
    <!-- 字幕 -->
    <div id="footer">
        <div class="notice" id="notice0">无问西东，自由时空……</div>
        <div class="notice" id="notice1">想要知道戊戌狗年运程如何？</div>
        <div class="notice" id="notice2">只要收集齐散落世界的4朵幸运花，</div>
        <div class="notice" id="notice3">就能开启新年的幸运密语！</div>
        <button id="start">开始探索</button>
        <!-- <div id="flower-container">
            <img src="images/flower.png" alt="*" id="f1">
            <img src="images/flower.png" alt="*" id="f2">
            <img src="images/flower.png" alt="*" id="f3">
            <img src="images/flower.png" alt="*" id="f4">
            <img src="images/flower.png" alt="*" id="f5">
            <img src="images/flower.png" alt="*" id="f6">
        </div> -->
    </div>
    <!-- 字幕 -->

    <!-- 签 -->
    <div id="label-container">
        <img src="" alt="" id="label">
        <!-- <img src="images/cloud-l.png" alt="" id="cloud1">
        <img src="images/cloud-r.png" alt="" id="cloud2"> -->
        <img src="images/l1.png" alt="" id="l1">
        <img src="images/l2.png" alt="" id="l2">
        <img src="images/l3.png" alt="" id="l3">
        <img src="images/r1.png" alt="" id="r1">
        <img src="images/r2.png" alt="" id="r2">
        <img src="images/r3.png" alt="" id="r3">
    </div>
    <!-- 签 -->

    <!-- 临时背景图片 -->
    <img src="images/bg.jpg" alt="" id="bg">

    <!-- 左右滑动提示 -->
    <img src="images/points.png" alt="" id="points">
    <img src="images/hand.gif" alt="" id="hand">
    <!-- 左右滑动提示 -->

    <!-- 背景音乐播放 -->
    <audio src="sound/bgm.mp3" loop="loop" preload="auto" id="bgm" autoplay></audio>
    <img src="images/bgm-on.png" alt="" id="bgm-control">
    <!-- 背景音乐播放 -->

    <!-- 截图与分享功能 -->
    <div id="photo-container">
        <img src="images/photo.png" alt="" id="photo">
    </div>
    <img src="images/share.png" alt="" id="share">
    <div id="screenshot-container">
        <div id="card">
            <div id="card-content">
                <div id="card-content-title">戊戌狗年3D幸运签</div>
                <div id="card-content-qrcode">
                    <img src="images/qrcode.png" alt="" id="qrcode">
                    <div id="tips">扫码开启旅程</div>
                </div>
            </div>
        </div>
        <div id="footer-tips"><p id="tips-text">长按保存图片并分享好友</p></div>
    </div>
    <div id="cover">
        <img src="images/arrow.png" alt="" id="arrow">
        <p id="cover-text">分享本页会好运加倍!</p>
    </div>
    <!-- 截图与分享功能 -->




    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/html2canvas/0.5.0-beta4/html2canvas.js"></script>
    <script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
    <script src="js/sample.js"></script>
    <script>
        var result = scollText();     //随机生成的祝福语
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
                title: '抽自己的专属3D彩签，让别人无签可抽。', // 分享标题
                //desc: '寻找散落在世界的4朵桃花,开启新年的幸运密匙！', // 分享描述
                desc: '新年抽签年年玩？我们不一样！', // 分享描述
                link: 'https://html5test.goqo.com.cn/brige.php', // 分享链接
                imgUrl: 'https://html5test.goqo.com.cn/3dObject.png', // 分享图标
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
                title: '抽自己的专属3D彩签，让别人无签可抽。', // 分享标题
                link: 'https://html5test.goqo.com.cn/brige.php', // 分享链接
                imgUrl: 'https://html5test.goqo.com.cn/3dObject.png', // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            // 在这里调用 API
        });
        $('body').bind('findFinish',function () {
            wx.onMenuShareAppMessage({         //分享给朋友接口
                title: '<?php echo $arr2->nickname;?>'+'的戊戌狗年幸运签：'+ result, // 分享标题
                desc: '新年抽签年年玩？我们不一样！', // 分享描述
                link: 'https://html5test.goqo.com.cn/brige.php', // 分享链接
                imgUrl: 'https://html5test.goqo.com.cn/3dObject.png', // 分享图标
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
                title: '<?php echo $arr2->nickname;?>'+'的戊戌狗年幸运签：'+ result, // 分享标题
                link: 'https://html5test.goqo.com.cn/brige.php', // 分享链接
                imgUrl: 'https://html5test.goqo.com.cn/3dObject.png', // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        });
    </script>
</body>
</html>
