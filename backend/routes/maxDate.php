<?php

if($command == 'getMaxDate') {

    $data = array();
    $query = "
    SELECT t.matchnum 
     , t.time  
     , t.entrant1  
     , t.votes1
     FROM ( SELECT matchnum 
              , MAX(votes1) AS max_votes1
           FROM ups
         GROUP
             BY matchnum ) AS m
    INNER
    JOIN ups AS t
    ON t.matchnum = m.matchnum
    AND t.votes1 = m.max_votes1
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