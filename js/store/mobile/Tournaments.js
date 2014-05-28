Ext.define('Ufolep13Volley.store.mobile.Tournaments', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Ufolep13Volley.model.mobile.Tournament',
        proxy: {
            type: 'ajax',
            url: 'ajax/getTournaments.php'
        },
        sorters: 'libelle',
        autoLoad: true
    }

});