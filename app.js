var myApp = angular.module("myApp", []);

     myApp.controller("myController", function($scope){
	    console.log("in controller...");
	    $scope.newUser = {};
	    $scope.info = "";

	     $scope.users = [
		            {username: "Arnob", fullName: "Md. hafijur rahman arnob", email:"hrarnob07@gmail.com"}
	                    ];
	    $scope.saveUser = function(){
		console.log("Saving...");
		$scope.users.push($scope.newUser);
		$scope.info = "New User Added Successfully!";
		$scope.newUser = {};
	        };
	    
	    $scope.selectUser = function(user){
		$scope.clickedUser = user;
                };
	    $scope.updateuser=function()
              {
              };
	    $scope.deleteUser = function(){
		console.log($scope.users.indexOf($scope.clickedUser));
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.info = "User Deleted Successfully!";
	     };

});