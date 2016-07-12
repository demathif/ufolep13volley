<?php
session_start();
?>
<ul class="nav navbar-nav navbar-right">
    <?php
    require_once '../../includes/fonctions_inc.php';
    if (isset($_SESSION['login']) && $_SESSION['profile_name'] != 'ADMINISTRATEUR') {
        $userName = $_SESSION['login'];
        $team = json_decode(getTeam($_SESSION['id_equipe']));
        ?>
        <li class="dropdown">
            <a class="dropdown-toggle" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
                <?php echo $userName; ?> - <?php echo $team->team_full_name; ?>
                <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
                <li><a href="#myPage"><span class="glyphicon glyphicon-user"></span> Ma page</a></li>
                <li><a href="../ajax/logout.php"><span class="glyphicon glyphicon-log-out"></span>
                        Déconnexion</a>
                </li>
            </ul>
        </li>
        <?php
    } else {
        if (isset($_SESSION['login']) && $_SESSION['profile_name'] == 'ADMINISTRATEUR') {
            $userName = $_SESSION['login'];
            $team = 'Compte administrateur';
            ?>
            <li class="dropdown">
                <a class="dropdown-toggle" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                    <?php echo $userName; ?> - <?php echo $team; ?>
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="../admin.php"><span class="glyphicon glyphicon-user"></span> Ma page</a></li>
                    <li><a href="../ajax/logout.php"><span class="glyphicon glyphicon-log-out"></span>
                            Déconnexion</a>
                    </li>
                </ul>
            </li>
            <?php
        } else {
            ?>
            <li><a href="#login"><span class="glyphicon glyphicon-log-in"></span> Connexion</a></li>
            <?php
        }
    }
    ?>
</ul>