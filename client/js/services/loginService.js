app.service('LoginService', function ($http) {

    this.registerUser = function(data){
        return $http({
            method: 'POST',
            url: '/users',
            data: data

        });
    };

});
