Ext.define('Ufolep13Volley.view.gymnasium.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.gymnasiumedit',
    title: 'Gymnases',
    layout: 'fit',
    modal: true,
    width: 700,
    height: 500,
    autoShow: true,
    items: {
        xtype: 'form',
        trackResetOnLoad: true,
        defaults: {
            xtype: 'textfield',
            anchor: '90%'
        },
        url: 'ajax/saveGymnasium.php',
        autoScroll: true,
        layout: 'anchor',
        items: [
            {
                xtype: 'hidden',
                name: 'id',
                fieldLabel: 'Id',
                msgTarget: 'under'
            },
            {
                name: 'nom',
                fieldLabel: 'Nom',
                allowBlank: false,
                msgTarget: 'under'
            },
            {
                name: 'adresse',
                fieldLabel: 'Adresse',
                allowBlank: false,
                msgTarget: 'under'
            },
            {
                name: 'code_postal',
                fieldLabel: 'Code Postal',
                allowBlank: false,
                msgTarget: 'under'
            },
            {
                name: 'ville',
                fieldLabel: 'Ville',
                allowBlank: false,
                msgTarget: 'under'
            },
            {
                name: 'gps',
                fieldLabel: 'GPS',
                allowBlank: false,
                msgTarget: 'under'
            }
        ],
        buttons: [
            {
                text: 'Sauver',
                action: 'save',
                formBind: true,
                disabled: true
            },
            {
                text: 'Annuler',
                handler: function() {
                    this.up('window').close();
                }
            }
        ]
    }
});