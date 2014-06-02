Ext.define('Ufolep13Volley.controller.mobile.Tournaments', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ufolep13Volley.view.mobile.SearchTeam',
        'Ufolep13Volley.view.mobile.Teams'
    ],
    config: {
        refs: {
            tournamentsList: 'listtournaments',
            mainPanel: 'navigationview'
        },
        control: {
            tournamentsList: {
                itemtap: 'doSelectTournament'
            }
        }
    },
    doSelectTournament: function(list, index, item, record) {
        this.getMainPanel().push({
            title: record.get('libelle'),
            layout: 'vbox',
            items: [
                {
                    xtype: 'searchfieldteam'
                },
                {
                    xtype: 'listteams'
                }
            ]
        });
        Ext.getStore('Teams').clearFilter(true);
        Ext.getStore('Teams').filter('code_competition', record.get('code_competition'));
    }
}
);