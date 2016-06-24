Ext.define('Ufolep13Volley.store.HallOfFame', Sencha.storeCompatibility({
    extend: 'Ext.data.Store',
    config: {
        model: 'Ufolep13Volley.model.HallOfFame',
        proxy: {
            type: 'ajax',
            url: 'ajax/getHallOfFame.php'
        },
        autoLoad: true
    }
}));