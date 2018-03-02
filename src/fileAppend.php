<?php
function WriteLog($json){
	if(!file_exists("log")){
		mkdir("log");
	}
	$text = 'openid,';
	$text .= $json->openid;
	$text .= ',昵称,';
	$text .= $json->nickname;
	$text .= ',性别,';
	if ($json->sex=='1') {
		$text .= '男';
	}elseif ($json->sex=='2') {
		$text .= '女';
	}
	$text .= ',城市,';
	$text .= $json->city;
	$text .= ',省份,';
	$text .= $json->province;
	$text .= ',国家,';
	$text .= $json->country;
	$hour = GetServerHour();
	$time = GetServerTime();
	$file = fopen('log/'.$hour.'.txt',"a");
	$result = fwrite($file,$time.','.$text."\r\n");
	fclose($file);

	return $result;
}

function GetServerHour(){
	$result = NULL;
	$localtime = localtime(time(), true);
	//var_dump($localtime);

	$year= 1900+$localtime['tm_year'];
	$month = 1+$localtime['tm_mon'];
	$month = $month < 10 ? "0".$month:$month;
	$day = $localtime['tm_mday'];
	$day = $day < 10 ? "0".$day:$day;
	$result = $year.$month.$day;
	$result .= '_';
	$hour = $localtime['tm_hour'];
	$result .= $hour;


	return (string)$result;
}

function GetServerTime(){
	$result = NULL;
	$localtime = localtime(time(), true);
	//var_dump($localtime);

	$year= 1900+$localtime['tm_year'];
	$month = 1+$localtime['tm_mon'];
	$month = $month < 10 ? "0".$month:$month;
	$day = $localtime['tm_mday'];
	$day = $day < 10 ? "0".$day:$day;
	$result = $year."-".$month."-".$day;

	$result .= "T";

	$hour = $localtime['tm_hour'];
	$hour = $hour < 10 ? "0".$hour:$hour;
	$result .= $hour;

	$result .= ":";

	$min = $localtime['tm_min'];
	$min = $min < 10 ? "0".$min:$min;
	$result .= $min;

	$result .= ":";

	$sec = $localtime['tm_sec'];
	$sec = $sec < 10 ? "0".$sec:$sec;
	$result .= $sec;


	return (string)$result;
}

?>