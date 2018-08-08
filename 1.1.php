<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Документ без названия</title>
</head>

<body>

<?php

$arr = array("a", "b", "c");
print_r($arr);
print_r("<br>");
unset($arr[0]);//delete
unset($arr[1]);
unset($arr[2]);
print_r("after<br>");
print_r($arr);
$arr[] = "aa"; //new element
print_r("<br>");
print_r("add element<br>");
print_r($arr);
print_r("<br>");
$arr = array_values($arr);
$arr[] = "bb"; //key element 1
print_r($arr);

?>

</body>
</html>
