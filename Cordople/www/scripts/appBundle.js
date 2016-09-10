var Cordople;
(function (Cordople) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            var parentElement = document.getElementById('deviceready');
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        }
        function onPause() {
        }
        function onResume() {
        }
    })(Application = Cordople.Application || (Cordople.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(Cordople || (Cordople = {}));
//# sourceMappingURL=appBundle.js.map