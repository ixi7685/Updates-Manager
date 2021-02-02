<?php

if($command == 'getDevelopers') {
    $data = array();
    $query = "
    SELECT * FROM sites
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