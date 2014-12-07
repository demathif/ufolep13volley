Ext.define('Ufolep13Volley.store.LastResults', Sencha.storeCompatibility({
    extend: 'Ext.data.Store',
    config: {
        model: 'Ufolep13Volley.model.LastResult',
        proxy: {
            type: 'ajax',
            url: 'ajax/getLastResults.php',
            reader: {
                type: 'json',
                root: 'results'
            }
        },
        autoLoad: true}
}));