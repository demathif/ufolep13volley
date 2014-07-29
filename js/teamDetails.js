Ext.application({
    requires: ['Ext.panel.Panel'],
    views: ['site.Banner', 'site.MainMenu', 'site.MainPanel', 'site.HeaderPanel', 'site.TitlePanel', 'site.TeamDetailsPanel', 'team.FormDetails'],
    controllers: [],
    stores: ['Teams'],
    models: ['Team'],
    name: 'Ufolep13Volley',
    appFolder: 'js',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'teamDetailsPanel'
            }
        });
        this.getTeamsStore().load(function(records) {
            Ext.each(records, function(record) {
                if (record.get('id_equipe') === idTeam) {
                    if (record.get('code_competition') === competition) {
                        var form = Ext.ComponentQuery.query('formTeamDetails')[0];
                        form.loadRecord(record);
                        form.setTitle(record.get('team_full_name'));
                        var image = Ext.ComponentQuery.query('image[id=teamPicture]')[0];
                        var src= 'images/equipes/inconnu.png';
                        if(record.get('photo') !== '') {
                            src = 'images/equipes/' + record.get('photo');
                        }
                        image.setSrc(src);
                        return false;
                    }
                }
            });
        });
    }
});

