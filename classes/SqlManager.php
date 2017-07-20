<?php
/**
 * Created by PhpStorm.
 * User: ballemand
 * Date: 20/07/2017
 * Time: 11:08
 */

class SqlManager
{
    public function sql_get_accounts()
    {
        $sql = "SELECT
                e.nom_equipe,
                c.libelle AS competition,
                ca.login,
                ca.password,
                ca.email,
                ca.id
                FROM comptes_acces ca
                JOIN equipes e ON e.id_equipe=ca.id_equipe
                JOIN competitions c ON c.code_competition=e.code_competition
                WHERE ca.is_email_sent = 'N'";
        return $this->getResults($sql);
    }

    public function sql_get_activity()
    {
        $sql = "SELECT
                DATE_FORMAT(a.activity_date, '%d/%m/%Y') AS date,
                e.nom_equipe,
                c.libelle AS competition,
                a.comment AS description,
                ca.login AS utilisateur,
                ca.email AS email_utilisateur
                FROM activity a
                LEFT JOIN comptes_acces ca ON ca.id=a.user_id
                LEFT JOIN equipes e ON e.id_equipe=ca.id_equipe
                LEFT JOIN competitions c ON c.code_competition=e.code_competition
                WHERE a.activity_date > DATE_SUB(NOW(), INTERVAL 2 DAY)
                ORDER BY a.id DESC";
        return $this->getResults($sql);
    }

    public function getResults($sql)
    {
        $db = Database::openDbConnection();
        $req = mysqli_query($db, $sql);
        $results = array();
        while ($data = mysqli_fetch_assoc($req)) {
            $results[] = $data;
        }
        return $results;
    }
}