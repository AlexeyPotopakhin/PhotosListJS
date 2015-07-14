(function() {
    angular
        .module("photos")
        .factory("httpFactory", httpFactory);

    httpFactory.$inject = ["$q", "$http"];

    function httpFactory($q, $http) {
        return {
            getPhotosData: getPhotosData
        };

        function getPhotosData() {
            var deferred = $q.defer();

            $http.get("http://jsonplaceholder.typicode.com/photos", {params: { albumId: 1 }})
                .then(function(response) {
                    deferred.resolve(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
})();