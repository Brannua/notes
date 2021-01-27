<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
    array('title'=>'猛龙夺NBA总冠军','date'=>'2019-6-16'),
    array('title'=>'全球最小熊猫幼崽','date'=>'2019-6-16'),
    array('title'=>'李宗伟宣布退役','date'=>'2019-6-16'),
    array('title'=>'住房公积金将调整','date'=>'2019-6-16'),
    array('title'=>'A型血秒变O型血','date'=>'2019-6-16'),
    array('title'=>'机器人医生做手术','date'=>'2019-6-16'),
    array('title'=>'小伙胳膊上纹张脸','date'=>'2019-6-16'),
    array('title'=>'6岁男童赢一套房','date'=>'2019-6-16'),
    array('title'=>'学生质疑羿射九日','date'=>'2019-6-16'),
    array('title'=>'抓老赖祭出美人计','date'=>'2019-6-16'),
);

echo json_encode($news);