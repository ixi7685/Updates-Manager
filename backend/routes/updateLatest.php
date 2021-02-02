<?php


if($command == 'updateLatest') {
    $iD = $_POST['id'];
    $id = $_POST['site_id'];
    $site_name = $_POST['site_name'];
    $last_update_number = $_POST['last_update_number'];
    $date_sent = $_POST['date_sent'];
    $update_description = $_POST['update_description'];
    $comment = $_POST['comment'];
    $size= $_POST['size'];

    echo $iD ;
    echo $id ;
    echo $site_name  ;
    echo $last_update_number;
    echo $date_sent;
    echo $update_description ;
    


    $queryOne = "
    UPDATE sites SET name = '$site_name'  WHERE id = $id
    ";
   
    $statement = $connect->prepare($queryOne);
    $res = $statement->execute();
    
   if($res){
 
    echo "OK";
 
   }else {
 
    echo "NO";
   } 

    $query = "
    UPDATE updates SET site_name = '$site_name',last_update_number = $last_update_number,date_sent='$date_sent',update_description= '$update_description',comment= '$comment', size='$size'  WHERE id=$iD 
    ";
   
    $statement = $connect->prepare($query);
    $res = $statement->execute();
    
   if($res){

    echo "OK";

   }else {

    echo "NO";
   } 

   


}



?>