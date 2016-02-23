Ext.define('Ufolep13Volley.store.WeekSchedule', Sencha.storeCompatibility({
    extend: 'Ext.data.Store',
    config: {
        model: 'Ufolep13Volley.model.WeekSchedule',
        groupField: 'gymnasium',
        proxy: {
            type: 'ajax',
            url: 'ajax/getWeekSchedule.php'
        },
        autoLoad: true
    }
}));