angular.module("psAdvance.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/index.html","<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <meta property=\"og:title\" content=\"lol tournament | Liga UN\" />\n        <meta property=\"og:image\" content=\"http://ligaun.github.io/lol-tournament/img/leagues/DIAMOND_I.png\" />\n        <meta property=\"og:description\" content=\"lol tournament BETA\" />\n        <meta property=\"og:url\" content=\"http://ligaun.github.io/lol-tournament/\">\n        <title>lol tournament | Liga UN</title>\n        <link rel=\"icon\" type=\"image/png\" href=\"./img/favicon.png\">\n        <script>\n          (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n          })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n        \n          ga(\'create\', \'UA-64862437-1\', \'auto\');\n          ga(\'send\', \'pageview\');\n        </script>\n\n        <!-- build:css styles/style.min.css -->\n        <!-- bower:css -->\n        <!-- endbower -->\n        <!-- inject:css -->\n        <!-- endinject -->\n        <!-- endbuild -->\n\n        <!-- build:js js/vendor.min.js -->\n        <!-- bower:js -->\n        <!-- endbower -->\n        <!-- endbuild -->\n        <!-- build:js js/app.min.js -->\n        <!-- inject:js -->\n        <!-- endinject -->\n        <!-- endbuild -->\n    </head>\n    <body ng-app=\"lolTot\" ui-view>\n\n    </body>\n</html>\n");
$templateCache.put("views/singup/help.tpl.html","<md-dialog aria-label=\"Instrucciones\">\n  <md-toolbar>\n    <div class=\"md-toolbar-tools\">\n      <h2>Instrucciones</h2>\n      <span flex></span>\n      <md-button class=\"md-icon-button\" ng-click=\"vmd.close()\">\n        <md-icon md-svg-src=\"img/icons/close.svg\" aria-label=\"Close dialog\"></md-icon>\n      </md-button>\n    </div>\n  </md-toolbar>\n  <md-dialog-content>\n    <div>\n      <p>\n          Para realizar el registro de su equipo se usa un sistema de puntos individuales, en el cual la sumatoria da el nivel del equipo. La tabla que se maneja es la siguiente:\n      </p>\n      <md-list layout-lg=\"column\" layout-gt-lg=\"row\" layout-sm=\"column\" layout-sm=\"column\" layout-gt-sm=\"column\" layout-md=\"column\" layout-gt-md=\"column\" layout-align=\"center\">\n          <div>\n              <md-subheader class=\"md-no-sticky\">UNRANK<md-subheader>\n              <md-list-item class=\"md-3-line\">\n                <img ng-src=\"img/leagues/provisional.png\" class=\"md-avatar\" alt=\"{{key}}\"/>\n                <div class=\"md-list-item-text\">\n                    <h3>< : {{vmd.leagues.noob}} </h3>\n                    <h3>30: {{vmd.leagues.unrank}} </h3>\n                </div>\n              </md-list-item>\n          </div>\n         <div ng-repeat=\"(key, value) in vmd.leagues\"\n         ng-if=\"key != \'noob\' && key != \'unrank\' && key != \'master\' && key != \'challenger\'\" >\n             <md-subheader class=\"md-no-sticky\">{{key | uppercase}}</md-subheader>\n             <md-list-item class=\"md-3-line\">\n               <img ng-src=\"img/leagues/{{key | uppercase}}_I.png\" class=\"md-avatar\" alt=\"{{key}}\"/>\n               <div class=\"md-list-item-text\">\n                 <h3 ng-repeat=\"(key, value) in value\">{{key | uppercase}}: {{value}}</h3>\n               </div>\n             </md-list-item>\n         </div>\n      </md-list>\n      <p>\n          Esto se usa para que no existan desventaja en el torneo. La prioridad es buscar cubrir los <b>{{vmd.maxPoints}} puntos</b>. La plataforma le dara la información correspondiente si su equipo excede el limite de puntos. Las demás reglas del torneo las puedes encontrar en <a href=\"https://goo.gl/2zEUin\" target=\"_blank\"> <md-icon md-svg-src=\"img/icons/file-document.svg\" aria-label=\"Close dialog\"></md-icon></a>\n\n      </p>\n      <p>\n          Se le aconseja a los equipos elaborar su propia sumatoria para poder alcanzar un nivel optimo. Si desea inscribirse debajo de la puntuación le deseamos suerte.\n      </p>\n      <p>\n         La idea de estos torneos es generar integración, aprender y que nos conozcamos; así que solo puede participar gente de la UN.\n      </p>\n      <center>\n          <br>\n          <p>\n              ¡Tienes hasta el 16 de Julio para inscribirte!\n          </p>\n      </center>\n    </div>\n  </md-dialog-content>\n</md-dialog>\n");
$templateCache.put("views/singup/singup.tpl.html","<section id=\"main\" layout=\"row\" layout-align=\"center\">\n    <div flex=\"60\" flex-md=\"80\" flex-sm=\"100\" class=\"md-whiteframe-z1\" layout-fill>\n        <md-toolbar class=\"md-tall\">\n            <div class=\"md-toolbar-tools\">\n                <span>Liga UN <small>Torneo de vacaciones</small></span>\n                <span flex=\"\"></span>\n                <md-button class=\"md-icon-button\" aria-label=\"Ayuda\" ng-click=\"vm.help($event)\">\n                    <md-icon md-svg-icon=\"img/icons/help-circle.svg\" style=\"color: rgba(255,255,255, 0.2)\"></md-icon>\n                </md-button>\n            </div>\n            <div ng-if=\"vm.summoners.length > 0\"\n                class=\"md-toolbar-tools md-toolbar-tools-bottom md-accent animated fadeIn\"\n                layout=\"row\" layout-align=\"end center\">\n                <span ng-class=\"{warn: !vm.validator.leaguePoints()} \">\n                    {{vm.validator.totalPoints()}}\n                </span>\n                <span>\n                    /{{vm.validator.maxPoints}}\n                </span>\n            </div>\n        </md-toolbar>\n        <md-content>\n            <br>\n            <md-list>\n                <md-list-item class=\"md-5-line\" ng-repeat=\"item in vm.summonersForm\"\n                layout-align=\"center center\">\n                    <img ng-if=\"!item.data\" ng-class=\"{zoomIn: !animated, fadeOutDown: animated}\"\n                    ng-src=\"http://ddragon.leagueoflegends.com/cdn/5.2.1/img/profileicon/{{item.profileIconId}}.png\" class=\"md-avatar animated\" />\n                    <img ng-if=\"item.data\" ng-class=\"{flip: !animated, fadeOutDown: animated}\"\n                    ng-src=\"http://avatar.leagueoflegends.com/LA1/{{item.data.name}}.png\"\n                    class=\"md-avatar animated\" />\n                    <div class=\"md-list-item-text\">\n                        <form name=\"summonerForm\" ng-submit=\"vm.getSummoner(item.name, $index)\"\n                        layout=\"row\" layout-align=\"center center\">\n                        <md-input-container ng-class=\"{submitted: item.data}\">\n                            <label>Nombre de invocador</label>\n                            <input ng-model=\"item.name\"\n                            ng-model-options=\"{ updateOn:\'blur\'}\"\n                            ng-change=\"vm.getSummoner(item.name, $index)\" type=\"text\">\n                        </md-input-container>\n                        <md-button class=\"md-icon-button\" aria-label=\"Favorite\">\n                            <md-icon md-svg-icon=\"img/icons/send.svg\"></md-icon>\n                        </md-button>\n                    </form>\n                </div>\n                <div ng-if=\"item.data.league\">\n                    <img ng-if=\"item.data.league != \'unranked\'\" class=\"league animated\" ng-class=\"{zoomIn: !animated, fadeOutDown: animated}\"\n                    ng-src=\"img/leagues/{{item.data.league[0].tier}}_{{item.data.league[0].entries[0].division}}.png\"/>\n                    <img ng-if=\"item.data.league == \'unranked\' \" class=\"league animated\" ng-class=\"{zoomIn: !animated, fadeOutDown: animated}\"\n                    ng-src=\"img/leagues/provisional.png\"/>\n                </div>\n            </md-list-item>\n        </md-list>\n\n            <form name=\"singupForm\" ng-show=\"vm.validator.all()\" class=\"animated slideInDownBig\"\n            ng-submit=\"vm.subscribeTeam(subscribe)\" layout=\"column\" layout-align=\"center center\">\n\n                <div ng-hide=\"vm.mailchimp.result === \'success\'\" class=\"singupForm\" layout=\"column\"\n                layout-align=\"center center\" >\n                    <md-input-container>\n                        <label>Nombre del equipo</label>\n                        <input ng-model=\"subscribe.TEAMNAME\" name=\"teamName\" type=\"text\" required>\n                        <div ng-messages=\"singupForm.teamName.$error\" ng-if=\"singupForm.teamName.$dirty\">\n                            <div ng-if=\"singupForm.teamName.$error.required\" ng-message=\"required\">Campo obligatorio</div>\n                        </div>\n                    </md-input-container>\n                    <md-input-container>\n                        <label>Correo de contacto</label>\n                        <input ng-model=\"subscribe.EMAIL\" name=\"mail\" type=\"mail\" pattern=\"(\\W|^)[\\w.+\\-]*@unal\\.edu\\.co(\\W|$)\" required>\n                        <div ng-messages=\"singupForm.mail.$error\" ng-if=\"singupForm.mail.$dirty\">\n                            <div ng-if=\"singupForm.mail.$error.required\" ng-message=\"required\">Campo obligatorio</div>\n                            <div ng-if=\"singupForm.mail.$error.pattern\" ng-message=\"pattern\">Tiene que ser un correo @unal.edu.co</div>\n                        </div>\n                    </md-input-container>\n\n                    <p class=\"md-body-2 warn\" ng-show=\"vm.mailchimp.result == \'error\'\">\n                        Error: {{vm.mailchimp.msg}}\n                    </p>\n\n                    <md-button class=\"md-raised md-primary\" ng-disabled=\"singupForm.$invalid\">\n                        Inscribir\n                    </md-button>\n                </div>\n\n                <md-card ng-show=\"vm.mailchimp.result == \'success\'\" class=\"animated fadeIn success\">\n                    <p class=\"md-body-2\">\n                        {{vm.mailchimp.msg}}\n                    </p>\n                </md-card>\n            </form>\n            <br>\n        </md-content>\n    </div>\n</section>\n\n<footer>\n    <center>\n        <br>\n        <p class=\"md-caption\">\n            Si te gustó esta aplicación no dudes en darle\n            <md-icon ng-style=\"{\'font-size\': \'5px\', height: \'18px\'}\" md-svg-icon=\"img/icons/star.svg\"></md-icon> en                         <a href=\"http://github.com/LigaUN/lolTot\" target=\"_blank\"><md-icon  ng-style=\"{\'font-size\': \'5px\', height: \'18px\'}\"                     md-svg-icon=\"img/icons/github-box.svg\"></md-icon></a>\n        </p>\n        <p class=\"md-caption\">\n            Developed by <a href=\"http://github.com/svzosorio\" target=\"_blank\">Señor Galleto</a>\n        </p>\n        <br>\n    </center>\n</footer>\n");}]);