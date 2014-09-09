Ext.define('Ufolep13Volley.model.TimeSlot', Sencha.modelCompatibility({
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'id_gymnase',
            type: 'int'
        },
        {
            name: 'id_equipe',
            type: 'int'
        },
        'jour',
        'heure',
        'team_full_name',
        'gymnasium_full_name'
    ]
}));
