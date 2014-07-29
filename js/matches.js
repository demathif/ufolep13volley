Ext.application({
    requires: ['Ext.panel.Panel'],
    views: ['site.Banner', 'site.MainMenu', 'site.MainPanel', 'site.HeaderPanel', 'site.TitlePanel', 'site.MatchesPanel', 'match.Grid'],
    controllers: ['Matches'],
    stores: ['Matches'],
    name: 'Ufolep13Volley',
    appFolder: 'js',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'matchesPanel'
            }
        });
        Ext.Ajax.request({
            url: 'ajax/getSessionRights.php',
            success: function(response) {
                var responseJson = Ext.decode(response.responseText);
                if (responseJson.message === 'admin') {
                    var adminColumns = Ext.ComponentQuery.query('actioncolumn[text=Administration]');
                    Ext.each(adminColumns, function(adminColumn) {
                        adminColumn.show();
                    });
                }
            }
        });
    }
});