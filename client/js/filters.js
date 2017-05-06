app.filter('roundOffValue', function () {

    return function (value) {
        return value.toFixed(2)
    };

});
