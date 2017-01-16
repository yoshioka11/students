<?php
//echo htmlspecialchars("hi! " . $_GET['name'], ENT_QUOTES, "UTF-8");
$rs = array(
  "message" => htmlspecialchars("hi! " . $_GET['name'], ENT_QUOTES, "UTF-8"),
  "length" => strlen($_GET['name'])
);
header('CONTENT-Type: application/json; charset=utf-8');
echo json_encode($rs);
?>
