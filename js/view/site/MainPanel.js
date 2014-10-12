Ext.define('Ufolep13Volley.view.site.MainPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainPanel',
    layout: 'border',
    defaults: {
        border: false
    },
    items: Ext.is.Phone ?
            [
                {
                    region: 'north',
                    height: 110,
                    xtype: 'headerPanel'
                },
                {
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [
                        {
                            xtype: 'LastResultsGrid'
                        },
                        {
                            xtype: 'LastPostsGrid'
                        },
                        {
                            xtype: 'WebSitesGrid'
                        }
                    ]
                }
            ] :
            [
                {
                    region: 'north',
                    height: 360,
                    layout: 'border',
                    items: [
                        {
                            region: 'north',
                            height: 100,
                            layout: 'center',
                            defaults: {
                                border: false
                            },
                            items: {
                                layout: {
                                    type: 'vbox',
                                    align: 'center'
                                },
                                xtype: 'panel',
                                items: [
                                    {
                                        width: 500,
                                        height: 50,
                                        xtype: 'banner'
                                    },
                                    {
                                        width: 400,
                                        height: 50,
                                        xtype: 'image',
                                        src: './images/JeuAvantEnjeu.jpg'
                                    }
                                ]
                            }
                        },
                        {
                            region: 'center',
                            xtype: 'coverflow',
                            store: 'Images'
                        }
                    ]
                },
                {
                    region: 'north',
                    height: 110,
                    xtype: 'headerPanel'
                },
                {
                    region: 'center',
                    xtype: 'tabpanel',
                    items: [
                        {
                            xtype: 'LastResultsGrid'
                        },
                        {
                            xtype: 'LastPostsGrid'
                        },
                        {
                            xtype: 'WebSitesGrid'
                        }
                    ]
                }
            ]
});
