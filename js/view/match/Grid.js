Ext.define('Ufolep13Volley.view.match.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridMatches',
    title: 'Matches',
    store: 'Matches',
    autoScroll: true,
    features: [
        {
            ftype: 'grouping',
            groupHeaderTpl: '{name}'
        }
    ],
    columns: {
        items: [
            {
                header: 'Code',
                width: 100,
                dataIndex: 'code_match',
                renderer: function (value, metaData, record) {
                    if (record.get('retard') === 1) {
                        metaData.tdAttr = 'data-qtip="Match non renseign� de + de 10 jours!"';
                        return '<span style="background-color:#C71585;color:black">' + value + '</span>';
                    }
                    if (record.get('retard') === 2) {
                        metaData.tdAttr = 'data-qtip="Match non renseign� de + de 15 jours!"';
                        return '<span style="background-color:Red;color:black">' + value + '</span>';
                    }
                    return value;
                }
            },
            {
                header: 'Date',
                width: 180,
                dataIndex: 'date_reception',
                renderer: function (value, metaData, record) {
                    if (record.get('report') === true) {
                        metaData.tdAttr = 'data-qtip="Match report�"';
                        return '<span style="background-color:Gold;color:black">' + Ext.Date.format(value, 'l d/m/Y') + ' ' + record.get('heure_reception') + '</span>';
                    }
                    return Ext.Date.format(value, 'l d/m/Y') + ' ' + record.get('heure_reception');
                }
            },
            {
                header: 'Equipe Domicile',
                width: 180,
                dataIndex: 'equipe_dom',
                renderer: function (value, metaData, record) {
                    if (record.get('score_equipe_dom') > record.get('score_equipe_ext')) {
                        return '<span style="background-color:GreenYellow;color:black">' + value + '</span>';
                    }
                    return value;
                }
            },
            {
                header: 'Score',
                dataIndex: 'score_equipe_dom',
                width: 100,
                renderer: function (val, meta, rec) {
                    if ((rec.get('score_equipe_dom') === 3) || (rec.get('score_equipe_ext') === 3)) {
                        return rec.get('score_equipe_dom') + '/' + rec.get('score_equipe_ext');
                    }
                }
            },
            {
                header: 'Equipe Ext�rieur',
                width: 180,
                dataIndex: 'equipe_ext',
                renderer: function (value, metaData, record) {
                    if (record.get('score_equipe_ext') > record.get('score_equipe_dom')) {
                        return '<span style="background-color:GreenYellow;color:black">' + value + '</span>';
                    }
                    return value;
                }
            },
            {
                header: 'Sets',
                dataIndex: 'set_1_dom',
                width: 250,
                renderer: function (val, meta, rec) {
                    var detailsMatch = '';
                    if ((rec.get('set_1_dom') !== 0) || (rec.get('set_1_ext') !== 0)) {
                        detailsMatch = detailsMatch + rec.get('set_1_dom') + '/' + rec.get('set_1_ext') + ' ';
                    }
                    if ((rec.get('set_2_dom') !== 0) || (rec.get('set_2_ext') !== 0)) {
                        detailsMatch = detailsMatch + rec.get('set_2_dom') + '/' + rec.get('set_2_ext') + ' ';
                    }
                    if ((rec.get('set_3_dom') !== 0) || (rec.get('set_3_ext') !== 0)) {
                        detailsMatch = detailsMatch + rec.get('set_3_dom') + '/' + rec.get('set_3_ext') + ' ';
                    }
                    if ((rec.get('set_4_dom') !== 0) || (rec.get('set_4_ext') !== 0)) {
                        detailsMatch = detailsMatch + rec.get('set_4_dom') + '/' + rec.get('set_4_ext') + ' ';
                    }
                    if ((rec.get('set_5_dom') !== 0) || (rec.get('set_5_ext') !== 0)) {
                        detailsMatch = detailsMatch + rec.get('set_5_dom') + '/' + rec.get('set_5_ext') + ' ';
                    }
                    return detailsMatch;
                }
            },
            {
                header: 'Administration',
                width: 200,
                xtype: 'actioncolumn',
                hideable: false,
                hidden: true,
                items: [
                    {
                        icon: 'images/certified.png',
                        tooltip: 'Certifier avoir re�u la feuille de ce match',
                        getClass: function (value, meta, rec) {
                            if (rec.get('certif') === true) {
                                return "x-hidden-display";
                            }
                        },
                        handler: function (grid, rowIndex) {
                            this.up('grid').fireEvent('itemcertifybuttonclick', grid, rowIndex);
                        }
                    },
                    {
                        icon: 'images/modif.gif',
                        tooltip: 'Modifier le score du match',
                        handler: function (grid, rowIndex) {
                            this.up('grid').fireEvent('itemeditbuttonclick', grid, rowIndex);
                        }
                    },
                    {
                        icon: 'images/delete.gif',
                        tooltip: 'Supprimer ce match',
                        handler: function (grid, rowIndex) {
                            this.up('grid').fireEvent('itemdeletebuttonclick', grid, rowIndex);
                        }
                    }
                ]
            }
        ]
    },
    dockedItems: {
        xtype: 'toolbar',
        dock: 'top',
        items: [
            {
                icon: 'images/facebook.jpg',
                text: 'PARTAGER !',
                tooltip: 'Partager',
                href: 'http://www.facebook.com/sharer/sharer.php?u=' + window.location.href,
                hrefTarget: '_blank'
            }
        ]
    }
});