require('angular');

angular
.module(require('./app.settings').appNameString, [require('angular-messages'), require('angular-sanitize')])
.controller(require('./app.settings').appNameString + 'Ctrl',
            require('./core/formApp.controller')
           );

require('./core/bootstrap')(require('./app.settings').appNameString);
