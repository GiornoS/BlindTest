(function () {

	angular.module('starter')
        .service('SocketService', ['socketFactory', SocketService]);

	function SocketService(socketFactory) {
        
        var connection = io.connect('http://centraledev.com:4000');
/*
        $("#log").append('Connection set.<br>');
*/
/*
        $scope.connex = "Connection set. \n";
*/
        console.log(connection);



        return socketFactory({

            ioSocket: connection

        });
    }
})();