<?php

if($command == 'getDevelopments') {
    $data = array();
    $query = "
    
    SELECT 
    t.id, 
    t.site_id 
     , t.site_name 
     , t.date_sent  
     , t.last_update_number
     , t.update_description
     , t.comment
     , t.size

    
     FROM ( SELECT site_id 
              , MAX(last_update_number) AS max_last_update_number
           FROM updates
         GROUP
             BY site_id ) AS m
    INNER
    JOIN updates AS t
    ON t.site_id = m.site_id
    AND t.last_update_number = m.max_last_update_number

    ";
    $statement = $connect->prepare($query);
    $statement->execute();
    while($row = $statement->fetch(PDO::FETCH_ASSOC))
    {
    $data[] = $row;
    }
    echo json_encode($data);
}

?>