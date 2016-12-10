var app = angular.module("chatApp");

app.controller("ModalCtrl",['$scope', 'Room', '$uibModal', '$document',
    function($scope, Room, $uibModal){
        
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/templates/popup.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: 'sm'
     });
    
    
    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };
    }
]);