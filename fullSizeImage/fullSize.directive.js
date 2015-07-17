(function() {
    angular
        .module("fullSizeImage", [])
        .directive("fullSizeImage", fullSizeImage);

    function fullSizeImage() {
        return {
            restrict: "A",
            link: link
        };

        function link(scope, element, attributes) {
            var imagePath = "";

            // Directive image src attribute
            attributes.$observe("fullSizeImage", function(value) {
                imagePath = value;
            });

            element.bind("click", elementClick);

            function elementClick() {
                // Background layer
                var layer = document.createElement("div");

                // Layer class
                var layerClass = document.createAttribute("class");
                layerClass.value = "full-size-image-container";
                layer.setAttributeNode(layerClass);

                // Full size image
                var image = document.createElement("img");

                // Image src attribute
                var imageSrc = document.createAttribute("src");
                imageSrc.value = imagePath;
                image.setAttributeNode(imageSrc);

                layer.appendChild(image);
                document.body.appendChild(layer);

                layer.addEventListener("click", function() {
                    document.body.removeChild(layer);
                });
            }
        }
    }
})();