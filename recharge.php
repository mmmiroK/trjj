<?php 

	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST,GET');
	header('Access-Control-Max-Age:60');
	header('Access-Control-Allow-Headers:x-requested-with,content-type');
	header('Content-Type:application/json;charset=utf-8');

	require_once "linksql.php";

	$pdo=DBlink::makeLink();
	$pdo->query("SET NAMES UTF8");

	if(isset($_POST['rechargeNum'])&&isset($_POST['phoneNum'])&&$_POST['yzm']){
		$rechargeNum=$_POST['rechargeNum'];
		$phoneNum=$_POST['phoneNum'];
		$yzm=$_POST['yzm'];
		$msql="update user set totalm=totalm+$rechargeNum,readym=readym+$rechargeNum where phoneNum='$phoneNum' and yzm=$yzm";

		$result=$pdo->exec($msql);

		if($result==1){
			echo json_encode("success");
		}else{
			echo json_encode("error");
		}
	}
 ?>