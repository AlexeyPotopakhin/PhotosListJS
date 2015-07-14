(function() {
    angular
        .module("photos")
        .factory("resourceFactory", resourceFactory);

    resourceFactory.$inject = ["$q", "$resource"];

    function resourceFactory($q, $resource) {
        return {
            getPhotosData: getPhotosData
        };

        function getPhotosData() {
            var deferred = $q.defer();

            var Photos = $resource("http://jsonplaceholder.typicode.com/photos:id",
                {
                    id: "@albumId"
                }
            );

            Photos.query({albumId: 1}, function(response) {
                deferred.resolve(response);
            }, function(error) {
                console.log(error);
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }
})();
