<?php

require_once "../includes/fonctions_inc.php";

$success = false;

$compet = filter_input(INPUT_POST, 'compet');
$equipe = filter_input(INPUT_POST, 'equipe');
$success = incrementReportCount($compet, $equipe);

echo json_encode(array(
    'success' => $success,
    'message' => $success ? 'Modification OK' : 'Erreur durant la modification'
));
