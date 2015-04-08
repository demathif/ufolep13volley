<?php
include("includes/fonctions_inc.php");

// On r�cup�re l'ID de la division 
$div = (isset($_GET["d"])) ? $_GET["d"] : "";
if ($div == "") {
    die('<META HTTP-equiv="refresh" content=0;URL=index.php>');
}
?>

<!DOCTYPE HTML>

<HTML>

    <HEAD>
        <TITLE>Play Off - UFOLEP 13 VOLLEY</TITLE>
        <META http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <link rel="shortcut icon" href="favicon.ico" /><LINK href="includes/main.css" rel="stylesheet" type="text/css" media="screen" />
        <link href="http://dev.sencha.com/ext/5.0.0/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all-debug.css" rel="stylesheet" />
        <script src="http://dev.sencha.com/ext/5.0.0/ext-all.js"></script>
        <script src="http://dev.sencha.com/ext/5.0.0/packages/ext-locale/build/ext-locale-fr.js" charset="UTF-8"></script>
        <script type="text/javascript" src="js/libs/Commons.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3&amp;sensor=false"></script>
        <script type="text/javascript" src="js/libs/GMapPanel.js"></script>
        <script type="text/javascript">
            var competition = 'px';
            var division = '<?php echo $div; ?>';
            var connectedUser = '<?php echo getConnectedUser(); ?>';
            var title = "Play Off <?php echo $div; ?> - Championnat F�minin";
            var limitDateLabel = "Date limite des matches : <?php getLimitDate("px"); ?>";
        </script>
        <script type="text/javascript" src="js/championship.js"></script>
    </HEAD>
    <BODY></BODY>
</HTML>