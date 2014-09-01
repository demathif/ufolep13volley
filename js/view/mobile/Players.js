Ext.define('Ufolep13Volley.view.mobile.Players', {
    extend: 'Ext.dataview.List',
    requires: [
        'Ext.dataview.List'
    ],
    xtype: 'listplayers',
    config: {
        title : 'Joueurs',
        itemTpl: "<img src='{path_photo}' width='80px'/>{full_name}",
        store: 'TeamPlayers',
        flex: 1
    }
});
