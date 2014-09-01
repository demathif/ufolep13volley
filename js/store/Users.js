Ext.define('Ufolep13Volley.store.Users', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Ufolep13Volley.model.User',
        proxy: {
            type: 'ajax',
            url: 'ajax/getUsers.php'
        },
        autoLoad: true}
});