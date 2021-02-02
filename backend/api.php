<?php
 header("Access-Control-Allow-Origin: *");
require "config.php";

$command = $_POST['command'];

//commands
require "routes/getDevelopments.php";
require "routes/getDevelopers.php";
require "routes/addDevelopment.php";
require "routes/getSite.php";
require "routes/updateLatest.php";
require "routes/maxDate.php";
require "routes/updatePrevious.php";



?>
