
<?php

require_once "../includes/fonctions_inc.php";

$idPlayer = filter_input(INPUT_POST, 'id_joueur');
$success = updateMyTeamCaptain($idPlayer);
echo json_encode(array(
    'success' => $success,
    'message' => $success ? 'Modification OK' : 'Erreur durant la modification'
));
