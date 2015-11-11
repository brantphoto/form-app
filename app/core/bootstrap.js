require('angular');
module.exports = bootstrapApp;

function bootstrapApp(appName) {
  angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
  });
}
