<?php 
	
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST,GET');
	header('Access-Control-Max-Age:60');
	header('Access-Control-Allow-Headers:x-requested-with,content-type');
	header('Content-Type:application/json;charset=utf-8');

	try {
		$pdo=new PDO("mysql:host=localhost;dbname=miroK","root","");
	} catch (PDOException $e) {
		$e->getMessage();
	}

	$pdo->query("SET NAMES UTF8");

	if($_POST['tradeNumber']&&$_POST['tradeName']&&$_POST['tradeStatus']&&$_POST['id']){
		$tradeName=$_POST['tradeName'];
		$tradeNumber=$_POST['tradeNumber'];
		$tradeStatus=$_POST['tradeStatus'];
		$id=$_POST['id'];
		$msql="select * from trade$id where tradeNumber='$tradeNumber' and tradeName='$tradeName' and tradeStatus='$tradeStatus'";
	}else if(!$_POST['tradeNumber']&&$_POST['tradeName']&&$_POST['tradeStatus']&&$_POST['id']){
		$tradeName=$_POST['tradeName'];
		$tradeNumber=$_POST['tradeNumber'];
		$tradeStatus=$_POST['tradeStatus'];
		$id=$_POST['id'];
		$msql="select * from trade$id where tradeName='$tradeName' and tradeStatus='$tradeStatus'";
	}else if(!$_POST['tradeNumber']&&!$_POST['tradeName']&&$_POST['tradeStatus']&&$_POST['id']){
		$tradeName=$_POST['tradeName'];
		$tradeNumber=$_POST['tradeNumber'];
		$tradeStatus=$_POST['tradeStatus'];
		$id=$_POST['id'];
		$msql="select * from trade$id where  tradeStatus='$tradeStatus'";
	}else if($_POST['tradeNumber']&&!$_POST['tradeName']&&!$_POST['tradeStatus']&&$_POST['id']){
		$tradeName=$_POST['tradeName'];
		$tradeNumber=$_POST['tradeNumber'];
		$tradeStatus=$_POST['tradeStatus'];
		$id=$_POST['id'];
		$msql="select * from trade$id where tradeNumber='$tradeNumber'";
	}else if(!$_POST['tradeNumber']&&$_POST['tradeName']&&!$_POST['tradeStatus']&&$_POST['id']){
		$tradeName=$_POST['tradeName'];
		$tradeNumber=$_POST['tradeNumber'];
		$tradeStatus=$_POST['tradeStatus'];
		$id=$_POST['id'];
		$msql="select * from trade$id where tradeName='$tradeName'";
	}else if($_POST['tradeNumber']&&!$_POST['tradeName']&&$_POST['tradeStatus']&&$_POST['id']){

		$tradeName=$_POST['tradeName'];
		$tradeNumber=$_POST['tradeNumber'];
		$tradeStatus=$_POST['tradeStatus'];
		$id=$_POST['id'];
		$msql="select * from trade$id where tradeNumber='$tradeNumber' and tradeStatus='$tradeStatus'";
	}

	$result=$pdo->query($msql);
	$list=$result->fetchAll(PDO::FETCH_ASSOC);
	if($result){
		echo json_encode($list);
	}

 ?>