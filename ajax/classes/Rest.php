<?php

require_once "../includes/fonctions_inc.php";

class Rest {

    protected $fileName;

    function __construct($fileName) {
        $this->fileName = preg_replace('/\.php$/', '', basename($fileName));
    }

    function getColumns() {
        global $db;
        $sql = "show columns from " . $this->fileName;
        $req = mysqli_query($db, $sql) or die('Erreur SQL !<br>' . $sql . '<br>' . mysqli_error($db));
        $results = array();
        while ($data = mysqli_fetch_assoc($req)) {
            $results[] = $data;
        }
        return json_encode($results);
    }

    function getPrimaryKey() {
        $columns = json_decode($this->getColumns(), true);
        foreach ($columns as $column) {
            if ($column['Key'] === 'PRI') {
                return $column['Field'];
            }
        }
        return null;
    }

    function getData() {
        global $db;
        $sql = "SELECT SQL_CALC_FOUND_ROWS ";
        $columns = json_decode($this->getColumns(), true);
        $queribles = array();
        foreach ($columns as $column) {
            switch ($column['Type']) {
                case 'tinyint(1)' :
                    $sql .= $column['Field'] . "+0 AS " . $column['Field'] . ",";
                    break;
                case 'date' :
                    $sql .= " DATE_FORMAT(" . $column['Field'] . ", '%d/%m/%Y') AS " . $column['Field'] . ",";
                    break;
                default :
                    $sql .= " " . $column['Field'] . ",";
                    $queribles[] = $column['Field'];
                    break;
            }
        }
        $sql = rtrim($sql, ",");
        $sql .= " FROM " . $this->fileName;
        $whereClause = filter_input(INPUT_GET, 'query');
        if ($whereClause !== null) {
            $sql .= " WHERE ";
            foreach ($queribles as $index => $querible) {
                if ($index > 0) {
                    $sql .= " OR ";
                }
                $sql .= " $querible LIKE '%$whereClause%' ";
            }
        }
        $startParam = filter_input(INPUT_GET, 'start');
        $limitParam = filter_input(INPUT_GET, 'limit');
        if ($startParam !== null) {
            $sql .= " limit $startParam,$limitParam";
        }
        $req = mysqli_query($db, $sql) or die('Erreur SQL !<br>' . $sql . '<br>' . mysqli_error($db));
        $results = array();
        while ($data = mysqli_fetch_assoc($req)) {
            $results[] = $data;
        }
        $req2 = mysqli_query($db, "SELECT FOUND_ROWS() AS total") or die('Erreur SQL !<br>' . $sql . '<br>' . mysqli_error($db));
        $results2 = array();
        while ($data = mysqli_fetch_assoc($req2)) {
            $results2[] = $data;
        }
        return json_encode(array(
            'results' => $results,
            'totalCount' => $results2[0]['total']));
    }

    function saveData() {
        global $db;
        $dataJson = file_get_contents('php://input');
        $dataArray = json_decode($dataJson, true);
        $primaryKey = $this->getPrimaryKey();
        if ($primaryKey === null) {
            return json_encode(array(
                'success' => false,
                'message' => 'Pas de cle primaire sur cette table',
                'data' => $dataJson
            ));
        }
        $sql = "UPDATE " . $this->fileName . " SET ";
        $columns = json_decode($this->getColumns(), true);
        foreach ($dataArray as $key => $value) {
            if ($key === $primaryKey) {
                continue;
            }
            foreach ($columns as $column) {
                if ($column['Field'] !== $key) {
                    continue;
                }
                switch ($column['Type']) {
                    case 'tinyint(1)' :
                        $sql .= "$key=$value,";
                        break;
                    case 'date' :
                        $sql .= "$key=DATE(STR_TO_DATE(\"$value\", '%d/%m/%Y')),";
                        break;
                    default :
                        $sql .= "$key = \"$value\",";
                        break;
                }
                break;
            }
        }
        $sql = rtrim($sql, ",");
        $sql .= " WHERE $primaryKey=\"" . $dataArray[$primaryKey] . "\";";
        $success = mysqli_query($db, $sql);
        if ($success) {
            $message = 'Sauvegarde OK';
        } else {
            $message = "Erreur SQL : $sql : " . mysqli_error($db);
        }
        return json_encode(array(
            'success' => $success,
            'message' => $message,
            'data' => $dataJson
        ));
    }

    function deleteData() {
        global $db;
        $dataJson = file_get_contents('php://input');
        $dataArray = json_decode($dataJson, true);
        $primaryKey = $this->getPrimaryKey();
        if ($primaryKey === null) {
            return json_encode(array(
                'success' => false,
                'message' => 'Pas de cle primaire sur cette table',
                'data' => $dataJson
            ));
        }
        $sql = "DELETE FROM " . $this->fileName;
        $sql .= " WHERE $primaryKey=\"" . $dataArray[$primaryKey] . "\";";
        $success = mysqli_query($db, $sql);
        if ($success) {
            $message = 'Suppression OK';
        } else {
            $message = "Erreur SQL : $sql : " . mysqli_error($db);
        }
        return json_encode(array(
            'success' => $success,
            'message' => $message,
            'data' => $dataJson
        ));
    }

    function addData() {
        global $db;
        $dataJson = file_get_contents('php://input');
        $dataArray = json_decode($dataJson, true);
        $primaryKey = $this->getPrimaryKey();
        if ($primaryKey === null) {
            return json_encode(array(
                'success' => false,
                'message' => 'Pas de cle primaire sur cette table',
                'data' => $dataJson
            ));
        }
        $sql = "INSERT INTO " . $this->fileName . " (";
        foreach ($dataArray as $key => $value) {
            if ($key === $primaryKey) {
                continue;
            }
            $sql .= "$key,";
        }
        $sql = rtrim($sql, ",");
        $sql.= ") VALUES (";
        $columns = json_decode($this->getColumns(), true);
        foreach ($dataArray as $key => $value) {
            if ($key === $primaryKey) {
                continue;
            }
            foreach ($columns as $column) {
                if ($column['Field'] !== $key) {
                    continue;
                }
                switch ($column['Type']) {
                    case 'tinyint(1)' :
                        $sql .= "$value,";
                        break;
                    case 'date' :
                        $sql .= "DATE(STR_TO_DATE(\"$value\", '%d/%m/%Y')),";
                        break;
                    default :
                        $sql .= "\"$value\",";
                        break;
                }
                break;
            }
        }
        $sql = rtrim($sql, ",");
        $sql.= ");";
        $success = mysqli_query($db, $sql);
        if ($success) {
            $message = 'Sauvegarde OK';
        } else {
            $message = "Erreur SQL : $sql : " . mysqli_error($db);
        }
        return json_encode(array(
            'success' => $success,
            'message' => $message,
            'data' => $dataJson
        ));
    }

    function parseRequest() {
        conn_db();
        if (!isAdmin()) {
            if ($this->fileName === 'comptes_acces') {
                $message = "Vous n'avez pas les droits suffisants pour executer cette action";
                echo json_encode(array(
                    'success' => false,
                    'message' => $message
                ));
                exit;
            }
            if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
                $message = "Vous n'avez pas les droits suffisants pour executer cette action";
                echo json_encode(array(
                    'success' => false,
                    'message' => $message
                ));
                exit;
            }
        }
        switch ($_SERVER['REQUEST_METHOD']) {
            case 'GET':
                if (filter_input(INPUT_GET, 'GET_COLUMNS') === 'true') {
                    echo $this->getColumns();
                } else {
                    echo $this->getData();
                }
                break;
            case 'PUT':
                echo $this->saveData();
                break;
            case 'DELETE':
                echo $this->deleteData();
                break;
            case 'POST':
                echo $this->addData();
                break;
            default:
                break;
        }
    }

}
