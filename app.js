angular.module('myApp',[])
    .controller('AppController',function($scope) {
        $scope.username = '';
        $scope.users = [];
        $scope.submit = function() {
            if(!$scope.username) {
                return
            }
            $scope.users.push({
                username: $scope.username,
                url:'//twitter.com/' + $scope.username
            });
            $scope.username = '';
        };
        $scope.deleteUser = function(index) {
            $scope.users.splice(index,1);
        }
    })
