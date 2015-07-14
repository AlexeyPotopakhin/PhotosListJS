(function() {
    angular
        .module("photos")
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

                // Background layer styles
                var layerStyle = document.createAttribute("style");
                layerStyle.value = "position:fixed;" +
                    "height:100%;width:100%;" +
                    "background:rgba(0,0,0,0.6);" +
                    "top:50%;left:50%;transform:translate(-50%,-50%);";
                layer.setAttributeNode(layerStyle);

                // Full size image
                var image = document.createElement("img");

                // Image src attribute
                var imageSrc = document.createAttribute("src");
                imageSrc.value = imagePath;
                image.setAttributeNode(imageSrc);

                // Image styles
                var imageStyle = document.createAttribute("style");
                imageStyle.value = "position:fixed;" +
                    "top:50%;left:50%;transform:translate(-50%,-50%);";
                image.setAttributeNode(imageStyle);

                layer.appendChild(image);
                document.body.appendChild(layer);

                layer.addEventListener("click", function() {
                    document.body.removeChild(layer);
                });
            }
        }
    }
})();