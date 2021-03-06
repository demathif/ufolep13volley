Ext.application({
    requires: ['Ext.container.Viewport'],
    controllers: ['Administration'],
    name: 'Ufolep13Volley',
    appFolder: 'js',
    launch: function () {
        Ext.define('Ext.form.PasswordField', {
            extend: 'Ext.form.field.Text',
            alias: 'widget.passwordfield',
            inputType: 'password'
        });
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                title: 'ADMINISTRATION : Panneau Principal',
                layout: 'fit',
                xtype: 'tabpanel',
                dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        defaultButtonUI: 'default',
                        items: [
                            {
                                text: "RETOUR A L'ACCUEIL",
                                scale: 'medium',
                                glyph: 'xf015@FontAwesome',
                                handler: function () {
                                    window.open('.', '_self', false);
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Menu',
                                scale: 'medium',
                                menu: [
                                    {
                                        text: 'Activité',
                                        glyph: 'xf1da@FontAwesome',
                                        action: 'displayActivity'
                                    },
                                    {
                                        text: 'Gestion des joueurs',
                                        glyph: 'xe90a@icomoon',
                                        action: 'managePlayers'
                                    },
                                    {
                                        text: 'Gestion des profils',
                                        glyph: 'xf084@FontAwesome',
                                        action: 'manageProfiles'
                                    },
                                    {
                                        text: 'Gestion des utilisateurs',
                                        glyph: 'xf0c0@FontAwesome',
                                        action: 'manageUsers'
                                    },
                                    {
                                        text: 'Gestion des clubs',
                                        glyph: 'xe900@icomoon',
                                        action: 'manageClubs'
                                    },
                                    {
                                        text: 'Gestion des équipes',
                                        glyph: 'xe905@icomoon',
                                        action: 'manageTeams'
                                    },
                                    {
                                        text: 'Gestion des journées',
                                        glyph: 'xf073@FontAwesome',
                                        action: 'manageDays'
                                    },
                                    {
                                        text: 'Gestion des divisions/poules',
                                        glyph: 'xf201@FontAwesome',
                                        action: 'manageRanks'
                                    },
                                    {
                                        text: 'Gestion des matches',
                                        glyph: 'xe909@icomoon',
                                        action: 'manageMatches'
                                    },
                                    {
                                        text: 'Gestion des dates limites',
                                        glyph: 'xf273@FontAwesome',
                                        action: 'manageLimitDates'
                                    },
                                    {
                                        text: 'Gestion des gymnases',
                                        glyph: 'xe90d@icomoon',
                                        action: 'manageGymnasiums'
                                    },
                                    {
                                        text: 'Planning de la semaine',
                                        glyph: 'xf073@FontAwesome',
                                        action: 'displayWeekSchedule'
                                    },
                                    {
                                        text: 'Indicateurs',
                                        glyph: 'xf071@FontAwesome',
                                        action: 'displayIndicators'
                                    },
                                    {
                                        text: 'Palmarès',
                                        glyph: 'xe906@icomoon',
                                        action: 'displayHallOfFame'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                defaults: {
                    closable: true
                }
            }
        });
    }
});