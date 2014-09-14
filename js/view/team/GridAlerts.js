Ext.define('Ufolep13Volley.view.team.GridAlerts', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridAlerts',
    title: 'Alertes',
    store: 'Alerts',
    autoScroll: true,
    viewConfig: {
        getRowClass: function (record, rowIndex, rowParams, store) {
            if (record.get('criticity') === 'error') {
                return 'grid-red';
            }
            if (record.get('criticity') === 'warning') {
                return 'grid-orange';
            }
            return '';
        }
    },
    columns: {
        items: [
            {
                header: 'Probl�me',
                width: 400,
                dataIndex: 'issue'
            },
            {
                header: 'Corriger',
                width: 100,
                xtype: 'actioncolumn',
                items: [
                    {
                        icon: 'images/info.png',
                        handler: function (view, rowIndex, colIndex, item, e) {
                            this.fireEvent('itemclick', this, 'info', view, rowIndex, colIndex, item, e);
                        }
                    }
                ]
            }
        ]
    }
});