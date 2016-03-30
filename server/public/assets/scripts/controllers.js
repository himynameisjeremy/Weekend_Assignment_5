myApp.controller("AddController", ["$scope", "PetService", function($scope, PetService){
    var petobject = {};
    var petService = PetService;

    //POST HERE
    $scope.submit = function(data){
      petService.postData(data);
    };
}]);

myApp.controller("ShowController", ["$scope", "PetService", function($scope, PetService){
    var petService = PetService;

    petService.getData();
    $scope.data = petService.data;

    console.log($scope.data);
}]);
