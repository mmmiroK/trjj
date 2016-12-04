<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Content-Type:application/json;charset=utf-8');

$data=array(

array(

"all"=>"10000",
"ready"=>"7000",
"real"=>"3000"
),


array(

array(

"time"=>"2015-11-23 23:23:22",
"name"=>"充值",
"num"=>"2016020318211106505",
"money"=>34,
"status"=>"处理中"
),
array(
"time"=>"2015-11-23 23:23:22",
"name"=>"中按学生儿童意外伤害险",
"num"=>"2016020318211106505",
"money"=>-34,
"status"=>"失败"

),
array(
"time"=>"2015-11-23 23:23:22",
"name"=>"航空旅游线",
"num"=>"2016020318211106505",
"money"=>34,
"status"=>"成功"

),
array(
"time"=>"2015-11-23 23:23:22",
"name"=>"众安个人以外伤害险",
"num"=>"2016020318211106505",
"money"=>-340,
"status"=>"成功"

),
array(//
"time"=>"2015-11-23 23:23:22",
"name"=>"提现",
"num"=>"2016020318211106505",
"money"=>34,
"status"=>"失败"

)
)
);

    	echo json_encode($data);