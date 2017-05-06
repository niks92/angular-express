const app = angular.module('startApp',['ui.router','ui.bootstrap']);


// removes hash from angular js routes (requires a base tag with attribute href='/' inside head tag)
app.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);


app.config(["$stateProvider",function ($stateProvider) {

  $stateProvider
      .state('home',{
        url: '/',
        templateUrl: "html/dashboard.html",
        controller: DashboardController,
        controllerAs: 'home'
      })
}]);


