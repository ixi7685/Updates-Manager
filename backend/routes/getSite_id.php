<?php

if($command == 'getSite_id') {
    $data = array();
    $query = "
    SELECT * FROM updates
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