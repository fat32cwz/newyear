<?php
//config
$main_url = 'http://h5.goqo.com.cn/newyear/';
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>新年3D幸运签</title>
		<style>
			#title2{
				text-align: center;
				font-size: 2rem;
				color:purple;
				margin-top:20px;
		    }
		</style>
	</head>
	<body>
		<script>
			window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9e20c6627fd372a7&redirect_uri="+"<?php echo $main_url;?>"+
			"sample.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
		</script>
	</body>
</html>
