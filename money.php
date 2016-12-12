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
	if(isset($_POST['name'])&&isset($_POST['password'])){
		$name=$_POST['name'];
		$password=$_POST['password'];
	}

	$msql="select * from user where name='$name' and password=$password";
	$result=$pdo->query($msql);//PDO::query() returns a PDOStatement object, or FALSE on failure.
	$list=$result->fetch(PDO::FETCH_ASSOC);

	$id=$list['id'];

	 $msql1="select * from trade$id";
	 $result1=$pdo->query($msql1);
	 $list1=$result1->fetchAll(PDO::FETCH_ASSOC);

	if(count($list)&&count($list1)){
		echo json_encode(array($list,$list1));
	}
	 


 ?>