myApp.factory("PetService", ["$http", function($http){
    var greeting = function(){
      console.log("Works");
    };

    var data = {};

    var getData = function(){
       $http.get("/pets").then(function(response){
          data.results = response.data;
          console.log(data);
       });
    };

    var postData = function(data){
       $http.post("/pets", data).then(function(response){
          console.log(response.data);
          getData();
       });
    };

    return {
      postData: postData,
      getData: getData,
      greeting : greeting,
      data : data
    };
}]);
