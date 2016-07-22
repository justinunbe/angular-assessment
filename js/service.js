angular.module("app").service("mainService", function($http){


this.shopping = function() {
    return $http({
            method: "GET",
            url: "http://practiceapi.devmounta.in/products"
        })
        .then(function(response) {
            return response.data;
        });
};
}); //end of Service
