Ext.define('Ufolep13Volley.store.Profiles', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Ufolep13Volley.model.Profile',
        proxy: {
            type: 'ajax',
            url: 'ajax/getProfiles.php'
        },
        autoLoad: true}
});