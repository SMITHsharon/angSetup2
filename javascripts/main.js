
var app = angular.module("callanFoods", []);

app.controller("FoodCtrl", ($scope) => {

$scope.FoodItems = () => {

		$scope.showGolden = false;
		$scope.showMonster = false;
		$scope.showRice = false;
	};

	$scope.burgerArt = () => {
		$scope.showGolden = true;
		$scope.showMonster = false;
	};


	// not working?
	$scope.monsterArt = () => {
		$scope.showMonster = true;
		$scope.showGolden = false;
		$scope.showRice = false;
	};


	// not working?
	$scope.riceArt = () => {
		$scope.showRice = true;
		$scope.showMonster = false;
		$scope.showGolden = false;
	};


});