<?php 

	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST,GET');
	header('Access-Control-Max-Age:60');
	header('Access-Control-Allow-Headers:x-requested-with,content-type');
	header('Content-Type:application/json;charset=utf-8');
	
	require_once "linksql.php";
	$pdo=DBlink::makeLink();
	$pdo->query("SET NAMES UTF8");

	if(isset($_POST['realNum'])&&isset($_POST['tipFee'])&&isset($_POST['password'])&&isset($_POST['incount'])&&$_POST['id']){
		$realNum=$_POST['realNum'];
		$tipFee=$_POST['tipFee'];
		$password=$_POST['password'];
		$incount=$_POST['incount'];
		$id=$_POST['id'];
		$msql="update user set totalm=totalm-$incount,readym=readym-$incount where id=$id and password=$password";
	}

	$result=$pdo->query($msql);

	if($result->rowCount()>0){
		echo json_encode("success");
	}else{
		echo json_encode("error");
	}

 ?>