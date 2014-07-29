Ext.define('Ufolep13Volley.view.site.MatchesPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.matchesPanel',
    layout: {
        type: 'vbox',
        align: 'center'
    },
    autoScroll: true,
    bodyStyle: 'background-color: #C9D7E5;',
    items: {
        layout: 'border',
        width: 1280,
        height: 2048,
        items: [
            {
                region: 'north',
                xtype: 'headerPanel'
            },
            {
                region: 'north',
                xtype: 'titlePanel'
            },
            {
                region: 'center',
                flex: 1,
                layout: 'fit',
                items: {
                    xtype: 'gridMatches',
                }
            }
        ]}
});
