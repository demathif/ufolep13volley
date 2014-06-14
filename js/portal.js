Ext.application({
    requires: ['Ext.panel.Panel'],
    views: ['team.GridMatches', 'team.FormDetails'],
    controllers: ['TeamManagement'],
    stores: ['MyMatches'],
    name: 'Ufolep13Volley',
    appFolder: 'js',
    launch: function() {
        Ext.create('Ext.panel.Panel', {
            layout: 'border',
            renderTo: Ext.get('portail'),
            width: 980,
            height: 1200,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        '->',
                        {
                            xtype: 'tbtext',
                            text: 'Non connect�',
                            style: {
                                color: 'red',
                                fontWeight : 'bold'
                            }
                        },
                        {
                            text: 'Se d�connecter',
                            href: "includes/traitement.php?a=deconn",
                            hrefTarget: '_self'
                        }
                    ]
                }
            ],
            items: [
                {
                    region: 'north',
                    xtype: 'gridTeamMatches',
                    flex: 1
                },
                {
                    region: 'center',
                    xtype: 'formTeamDetails',
                    flex: 2,
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                {
                                    text: 'Gestions des joueurs/joueuses'
                                },
                                {
                                    text: 'Fiche Equipe',
                                    href: 'teamSheetPdf.php'
                                },
                                {
                                    text: 'Modifier les informations'
                                },
                                {
                                    text: 'Changer de mot de passe'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }
});


