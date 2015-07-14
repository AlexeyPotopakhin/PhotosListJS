(function() {
    angular
        .module("photos")
        .controller("PhotosListController", PhotosListController);

    PhotosListController.$inject = ["httpFactory", "resourceFactory"];

    function PhotosListController(httpFactory, resourceFactory) {
        var vm = this;
        vm.photos = [];

        activate();

        function activate() {
            return httpFactory.getPhotosData().then(function(result) {
                vm.photos = result;
                return vm.photos;
            });
        }
    }
})();