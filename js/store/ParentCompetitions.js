Ext.define('Ufolep13Volley.store.ParentCompetitions', Sencha.storeCompatibility({
    extend: 'Ext.data.Store',
    config: {
        model: 'Ufolep13Volley.model.Competition',
        proxy: {
            type: 'ajax',
            url: 'ajax/getCompetitions.php'
        },
        autoLoad: true
    }
}));