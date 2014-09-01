Ext.define('Ufolep13Volley.store.Players', Sencha.storeCompatibility({
    extend: 'Ext.data.Store',
    config: {
        model: 'Ufolep13Volley.model.Player',
        proxy: {
            type: 'ajax',
            url: 'ajax/getPlayers.php'
        },
        autoLoad: true
    }
}));