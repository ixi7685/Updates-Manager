<?php

if($command == 'addDevelopment') {
    
  $existing_site_name = $_POST['existing_site_name'];
  $existing_site_id = $_POST['existing_site_id'];
  $site_id = $_POST['site_id'];
  $new_site_name = $_POST['new_site_name'];
  $last_update_number = $_POST['last_update_number'];
  $date_sent = $_POST['date_sent'];
  $update_description = $_POST['update_description'];
  $comment = $_POST['comment'];
  $size = $_POST['size'];

  echo $comment;

  if($new_site_name == '') {
      $query = "
          INSERT INTO updates (site_id, site_name, date_sent, update_description,last_update_number,comment,size) VALUES ('$existing_site_id', '$existing_site_name',  '$date_sent' , '$update_description', $last_update_number,'$comment','$size')
      ";

      $statement = $connect->prepare($query);
      $res=$statement->execute();
      if($res){
        echo 'ok';
      }else{
        echo 'no';
      }
      
  }else {
     
      $sitesQuery = "
          INSERT INTO sites (id, name) VALUES ($site_id, '$new_site_name')
      ";
      $lastId = $connect->lastInsertId();
      echo $lastId;
      $statement2 = $connect->prepare($sitesQuery);
      $statement2->execute();
      
      $lastId = $connect->lastInsertId();
     
      

      $developmentQuery = "
          INSERT INTO updates (site_id, site_name, date_sent, update_description,last_update_number,comment,size) VALUES ('$site_id', '$new_site_name',  '$date_sent' , '$update_description', $last_update_number,'$comment','$size')
      ";

      $statement1 = $connect->prepare($developmentQuery);
      $statement1->execute();
      $lastId = $connect->lastInsertId();
      echo $lastId;
    
  }

  
  
  
}


?>