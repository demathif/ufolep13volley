Ext.define('Ufolep13Volley.view.site.MainMenu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.mainMenu',
    defaultButtonUI: 'default',
    defaults: {
        flex: 1
    },
    items: [
        {
            text: 'Masculins',
            menu: [
                {text: 'Division 1', handler: function() {
                        window.open('champ_masc.php?d=1', '_self', false);
                    }},
                {text: 'Division 2', handler: function() {
                        window.open('champ_masc.php?d=2', '_self', false);
                    }},
                {text: 'Division 3', handler: function() {
                        window.open('champ_masc.php?d=3', '_self', false);
                    }},
                {text: 'Division 4', handler: function() {
                        window.open('champ_masc.php?d=4', '_self', false);
                    }},
                {text: 'Division 5', handler: function() {
                        window.open('champ_masc.php?d=5', '_self', false);
                    }},
                {text: 'Division 6', handler: function() {
                        window.open('champ_masc.php?d=6', '_self', false);
                    }},
                {text: 'Division 7', handler: function() {
                        window.open('champ_masc.php?d=7', '_self', false);
                    }}
            ]
        },
        {
            text: 'F�minines',
            menu: [
                {text: 'Division 1', handler: function() {
                        window.open('champ_fem.php?d=1', '_self', false);
                    }},
                {text: 'Division 2', handler: function() {
                        window.open('champ_fem.php?d=2', '_self', false);
                    }}
            ]
        },
        {
            text: 'Coupe Isoardi',
            menu: [
                {text: 'Poule 1', handler: function() {
                        window.open('coupe.php?d=1', '_self', false);
                    }},
                {text: 'Poule 2', handler: function() {
                        window.open('coupe.php?d=2', '_self', false);
                    }},
                {text: 'Poule 3', handler: function() {
                        window.open('coupe.php?d=3', '_self', false);
                    }},
                {text: 'Poule 4', handler: function() {
                        window.open('coupe.php?d=4', '_self', false);
                    }},
                {text: 'Poule 5', handler: function() {
                        window.open('coupe.php?d=5', '_self', false);
                    }},
                {text: 'Poule 6', handler: function() {
                        window.open('coupe.php?d=6', '_self', false);
                    }},
                {text: 'Poule 7', handler: function() {
                        window.open('coupe.php?d=7', '_self', false);
                    }},
                {text: 'Poule 8', handler: function() {
                        window.open('coupe.php?d=8', '_self', false);
                    }},
                {text: 'Poule 9', handler: function() {
                        window.open('coupe.php?d=9', '_self', false);
                    }},
                {text: 'Phase Finale', handler: function() {
                        window.open('coupe_cf.php', '_self', false);
                    }}
            ]
        },
        {
            text: 'Coupe K. Hanna',
            menu: [
                {text: 'Poule 1', handler: function() {
                        window.open('coupe_kh.php?d=1', '_self', false);
                    }},
                {text: 'Poule 2', handler: function() {
                        window.open('coupe_kh.php?d=2', '_self', false);
                    }},
                {text: 'Poule 3', handler: function() {
                        window.open('coupe_kh.php?d=3', '_self', false);
                    }},
                {text: 'Poule 4', handler: function() {
                        window.open('coupe_kh.php?d=4', '_self', false);
                    }},
                {text: 'Poule 5', handler: function() {
                        window.open('coupe_kh.php?d=5', '_self', false);
                    }},
                {text: 'Poule 6', handler: function() {
                        window.open('coupe_kh.php?d=6', '_self', false);
                    }},
                {text: 'Phase Finale', handler: function() {
                        window.open('coupe_kf.php', '_self', false);
                    }}
            ]
        },
        {
            text: 'Portail Equipes',
            menu: [
                {text: 'Connexion Portail', handler: function() {
                        window.open('portail.php', '_self', false);
                    }},
                {text: 'Annuaire Equipes', handler: function() {
                        window.open('annuaire.php', '_self', false);
                    }},
                {text: 'Localisation des Gymnases', handler: function() {
                        Ext.define('Equipes', {
                            extend: 'Ext.data.Model',
                            fields: [
                                'id_equipe',
                                'gymnase',
                                'localisation'
                            ]
                        });
                        Ext.create('Ext.data.Store', {
                            model: 'Equipes',
                            proxy: {
                                type: 'ajax',
                                url: 'ajax/details_equipes.php',
                                reader: {
                                    type: 'json',
                                    root: 'results'
                                },
                                pageParam: undefined,
                                startParam: undefined,
                                limitParam: undefined
                            },
                            autoLoad: true,
                            listeners: {
                                load: function(store, records) {
                                    var markers = [];
                                    Ext.each(records, function(record) {
                                        var latLongStrings = record.get('localisation').split(',');
                                        if (latLongStrings.length === 2) {
                                            var lat = parseFloat(latLongStrings[0]);
                                            var long = parseFloat(latLongStrings[1]);
                                            markers.push({
                                                lat: lat,
                                                lng: long,
                                                title: record.get('gymnase'),
                                                listeners: {
                                                    click: function(e) {
                                                        var markerInsance = this;
                                                        var storeEquipes = Ext.create('Ext.data.Store', {
                                                            fields: [
                                                                'id_equipe',
                                                                'nom_equipe'
                                                            ],
                                                            proxy: {
                                                                type: 'ajax',
                                                                url: 'ajax/equipes.php',
                                                                reader: {
                                                                    type: 'json',
                                                                    root: 'results'
                                                                },
                                                                pageParam: undefined,
                                                                startParam: undefined,
                                                                limitParam: undefined
                                                            },
                                                            autoLoad: false
                                                        });
                                                        storeEquipes.load(function() {
                                                            var rec = storeEquipes.findRecord('id_equipe', record.get('id_equipe'));
                                                            var infowindow = new google.maps.InfoWindow({
                                                                content: '<h3>Equipe : </h3>' + rec.get('nom_equipe') + '<br>' +
                                                                        '<h3>Gymnase : </h3>' + record.get('gymnase') + '<br>' +
                                                                        '<h3>Lien Google Maps : </h3><a href=\"http://maps.google.com/maps?z=12&t=m&q=loc:' + record.get('localisation') + '\" target=\"_blank\">Cliquez ici</a>'
                                                            });
                                                            infowindow.open(markerInsance.map, markerInsance);
                                                        }
                                                        );
                                                    }
                                                }
                                            });
                                        }
                                    });
                                    Ext.create('Ext.window.Window', {
                                        title: 'Localisation des Gymnases',
                                        maximizable: true,
                                        modal: true,
                                        width: 800,
                                        height: 500,
                                        layout: 'fit',
                                        items: [
                                            {
                                                xtype: 'gmappanel',
                                                width: '100%',
                                                height: 500,
                                                mapOptions: {
                                                    zoom: 10,
                                                    mapTypeId: google.maps.MapTypeId.ROADMAP
                                                },
                                                center: {
                                                    geoCodeAddr: 'Aix en provence'
                                                },
                                                markers: markers
                                            }
                                        ]
                                    }).show();
                                }
                            }
                        });
                    }},
                {text: 'La Commission', handler: function() {
                        window.open('commission.php', '_self', false);
                    }},
                {text: 'Ecrire au Webmaster', handler: function() {
                        window.open('mailto:benallemand@gmail.com');
                    }}
            ]
        },
        {
            text: 'Documents',
            menu: [
                {
                    text: 'Infos Utiles', handler: function() {
                        window.open('index_infos_utiles.php', '_self', false);
                    }
                },
                {
                    text: 'Agenda',
                    handler: function() {
                        Ext.create('Ext.window.Window', {
                            title: 'Agenda',
                            maximizable: true,
                            height: 650,
                            width: 900,
                            layout: 'fit',
                            items: [
                                {
                                    xtype: 'panel',
                                    autoScroll: true,
                                    html: '<iframe src="https://www.google.com/calendar/embed?title=Calendrier%20des%20comp%C3%A9titions%20UFOLEP%2013%20Volley-Ball&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=05otpt1qjnn3s2f0m5ejmkmkgk%40group.calendar.google.com&amp;color=%23875509&amp;src=2bm73rmo3317odnv2t1a6j1g6k%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=Europe%2FParis" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe>'
                                }
                            ]
                        }).show();
                    }
                },
                {
                    text: 'R�glements',
                    menu: [
                        {
                            text: 'G�n�ral',
                            handler: function() {
                                window.open('infos_utiles/Media/ReglementGeneral.pdf', '_blank');
                            }
                        },
                        {
                            text: 'F�minin',
                            handler: function() {
                                window.open('infos_utiles/Media/ReglementFeminin.pdf', '_blank');
                            }
                        },
                        {
                            text: 'Masculin',
                            handler: function() {
                                window.open('infos_utiles/Media/ReglementMasculin.pdf', '_blank');
                            }
                        },
                        {
                            text: 'Koury Hanna',
                            handler: function() {
                                window.open('infos_utiles/Media/ReglementKouryHanna.pdf', '_blank');
                            }
                        },
                        {
                            text: 'Isoardi',
                            handler: function() {
                                window.open('infos_utiles/Media/ReglementIsoardi.pdf', '_blank');
                            }
                        }
                    ]
                },
                {
                    text: 'D�claration de sinistre',
                    handler: function() {
                        Ext.Msg.show({
                            title: 'D�claration de sinistre',
                            msg: "Le document t�l�charg� doit �tre transmis � :<br/>\
F�d�ration des A. I. L, Service Apac, 192 rue Horace Bertin, 13005 Marseille<br/>\
La responsable Apac est : C�line Pouillot<br/>\
04 91 24 31 47 ou 61<br/>\
Pour votre information, le service APAC est ouvert :<br/>\
Du lundi au vendredi de 10h � 12h et de 14h30 � 17h<br/>\
- Sur place avec ou sans rendez-vous : 192 Rue Horace Bertin 13005 Marseille<br/>\
- Par t�l. 04.91.24.31.47<br/>\
- Par mail<br/>\
D�l�gu�e APAC C�line POUILLOT celine.pouillot@laligue13.fr<br/>\
Secr�tariat APAC Aurore RACLOT apac@laligue13.fr <br/>\
Il faudra retourner par voie postale :<br/>\
- La d�claration de sinistre d�ment remplie et sign�e<br/>\
- Le certificat m�dical original de constatation de blessure<br/>\
- La copie de la licence en cours du joueur bless�<br/>\
- La copie de la feuille de match",
                            buttons: Ext.Msg.OK,
                            icon: Ext.Msg.INFO,
                            buttonText: {
                                ok: 'T�l�charger'
                            },
                            fn: function(btn) {
                                window.open('infos_utiles/Media/DeclarationSinistreApac.pdf', '_blank');
                            }
                        });
                    }
                }
            ]
        },
        {
            text: 'Forum',
            handler: function() {
                window.open('http://ufolep13volley.forumzen.com/', '_blank');
            }
        },
        {
            text: 'Version Mobile',
            handler: function() {
                location.href = 'index_mobile.php';
            }
        }
    ]
});