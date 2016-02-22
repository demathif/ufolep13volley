<?php

$serverName = filter_input(INPUT_SERVER, 'SERVER_NAME');
switch ($serverName) {
    case 'localhost':
        break;
    default:
        require_once '../includes/db_inc.php';
        require_once '../libs/Unirest.php';
        $url = "https://api.flickr.com/services/rest?method=flickr.photos.search&sort=relevance&api_key=$flickr_api_key&text=volleyball&format=json&nojsoncallback=1";
//$url = "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=$flickr_api_key&user_id=42227760@N04&format=json&nojsoncallback=1";
        Unirest::verifyPeer(false);
        $response = Unirest::get($url);
        $test = json_decode($response->__get('raw_body'));
        echo json_encode($test->photos);
        break;
}
