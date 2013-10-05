<?php include("includes/fonctions_inc.php"); ?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<HTML>

    <HEAD>
        <TITLE>Accueil - UFOLEP 13 VOLLEY</TITLE>
        <META http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <LINK href="includes/main.css" rel="stylesheet" type="text/css" media="screen" />
        <link href="http://cdn.sencha.io/ext/gpl/4.2.0/resources/css/ext-all-neptune.css" rel="stylesheet" />
        <script src="http://cdn.sencha.com/ext/gpl/4.2.0/ext-all.js"></script>
        <script type="text/javascript" src="js/banniere.js"></script>
        <script type="text/javascript" src="js/mainMenu.js"></script>
        <script type="text/javascript" src="js/results.js"></script>
    </HEAD>

    <BODY>
        <div id="general">
            <div id="banniere"></div>
            <div id="menu"></div>
            <div id="contenu">
                <?php affich_connecte(); ?>
                <div id="titre"><H1>Accueil - UFOLEP 13 Volley</H1></div>
                <div id="photos"><?php affiche_image(1); ?></div>
                <div id="news"><h1>Quelques news...</h1><?php affiche_news(); ?></div>
                <div id="resultats"></div>
            </div>
        </div>
    </BODY>

</HTML>
