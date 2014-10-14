Ext.define('Ufolep13Volley.view.team.PlayersManage', {
    extend: 'Ext.window.Window',
    alias: 'widget.playersmanage',
    title: 'Gestion des joueurs/joueuses',
    height: 600,
    width: 800,
    modal: true,
    layout: 'fit',
    autoShow: true,
    items: {
        xtype: 'grid',
        store: 'MyPlayers',
        autoScroll: true,
        viewConfig: {
            getRowClass: function (record, rowIndex, rowParams, store) {
                if (record.get('est_actif') === false) {
                    return 'grid-red';
                }
                return '';
            }
        },
        columns: {
            items: [
                {
                    header: 'Photo',
                    dataIndex: 'path_photo',
                    renderer: function (value, meta, record) {
                        return '<img width="100" src="' + record.get('path_photo') + '" />';
                    }
                },
                {
                    header: 'Pr�nom',
                    dataIndex: 'prenom',
                    tdCls: 'x-style-cell'
                },
                {
                    header: 'Nom',
                    dataIndex: 'nom',
                    tdCls: 'x-style-cell'
                },
                {
                    header: 'Num�ro de licence',
                    dataIndex: 'num_licence'
                },
                {
                    header: 'Capitaine',
                    dataIndex: 'is_captain',
                    xtype: 'checkcolumn',
                    listeners: {
                        beforecheckchange: function () {
                            return false;
                        }
                    }
                },
                {
                    header: 'Responsable',
                    dataIndex: 'is_leader',
                    xtype: 'checkcolumn',
                    listeners: {
                        beforecheckchange: function () {
                            return false;
                        }
                    }
                },
                {
                    header: 'Suppl�ant',
                    dataIndex: 'is_vice_leader',
                    xtype: 'checkcolumn',
                    listeners: {
                        beforecheckchange: function () {
                            return false;
                        }
                    }
                }
            ],
            defaults: {
                width: 150
            }
        },
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: 'Ajouter un joueur'
                    },
                    {
                        xtype: 'button',
                        text: 'Retirer un joueur',
                        action: 'removePlayerFromMyTeam'
                    },
                    {
                        xtype: 'button',
                        text: 'Editer un joueur',
                        action: 'editPlayer'
                    },
                    {
                        xtype: 'button',
                        text: "Modifier le capitaine",
                        action: 'modifyCaptain'
                    },
                    {
                        xtype: 'button',
                        text: "Modifier le responsable",
                        action: 'modifyLeader'
                    },
                    {
                        xtype: 'button',
                        text: "Modifier le suppl�ant",
                        action: 'modifyViceLeader'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'tbtext',
                        text: "Les joueurs sur fond rose n'ont pas �t� v�rifi�s par la Commission.",
                        style: {
                            background: 'pink !important'
                        }
                    }
                ]
            }
        ]
    }
});