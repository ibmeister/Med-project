<?php

$url = isset($_GET['url']) ? $_GET['url'] : '';
$url = ($url == '') ? 'index' : $url;
$url = rtrim($url, '/');
if ($url == "index.html") {
	$url = "index";
}
$urlArray = explode(" ", $url);

if ($urlArray[0] == "index") {
	include "webpages/index.php";
} else if ($urlArray[0] == "planning") {
	include "modules/planning.php";
} else if ($urlArray[0] == "subscribe") {
	include "modules/subscribe.php";
}