<?php

if($command == 'getSite') {

    $site_id = $_POST['site_id'];
    $siteName = $_POST['site_name'];
    $data = array();
    $query = "
    SELECT * FROM updates WHERE site_id ='$site_id' ORDER BY last_update_number DESC ;
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