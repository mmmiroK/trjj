<?php 

   class DBlink{

   	private static $DBlink=null;
   	public static function makeLink(){
   		if(self::$DBlink==null){
   			try {
   				$pdo=new PDO("mysql:host=localhost;dbname=miroK","root","");
   				//$pdo -> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
   				self::$DBlink=$pdo;
   			} catch (PDOException $e) {
   				$e->getMessage();
   			}

   			$pdo -> query("SET NAMES UTF8");
   			
   		}
   			return self::$DBlink;
   	}
   }
 ?>