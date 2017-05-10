/* setup your angular app here */
/*globals angular, fruits, vegetables*/
var myApp = angular.module("fruitVeg", []);
myApp.controller("Main", ['$scope', function($scope) {
    $scope.black = true;
    $scope.produceList = shuffle(fruits.concat(vegetables));
    $scope.vegList = [];
    $scope.fruitList = [];

    $scope.move = function(direction, produce, index) {
        console.log(direction, produce, index);
        if (direction === 'left') {
            $scope.fruitList.push(produce);
        } else {
            $scope.vegList.push(produce);

        }
        $scope.produceList.splice(index, 1);
        endGame();
    };
    $scope.moveToCenter = function(fruitVeg, produce, index) {
        if (fruitVeg === "fruit") {
            $scope.fruitList.splice(index, 1);
        } else {
            $scope.vegList.splice(index, 1);
        }
        $scope.produceList.push(produce);
    };

    $scope.moveFruit = function(direction, fruit, index) {
        console.log('moveup');
        console.log(fruit, index);
        console.log($scope.fruitList[index - 1]);
        if (direction === "up") {
            $scope.fruitList.splice(index - 1, 0, fruit);
            $scope.fruitList.splice(index + 1, 1);
        } else {
            $scope.fruitList.splice(index + 2, 0, fruit);
            $scope.fruitList.splice(index, 1);

        }
    };

    $scope.moveVeg = function(direction, vegetable, index) {
        console.log('moveup');
        console.log(vegetable, index);
        console.log($scope.vegList[index - 1]);
        if (direction === "up") {
            $scope.vegList.splice(index - 1, 0, vegetable);
            $scope.vegList.splice(index + 1, 1);
        } else {
            $scope.vegList.splice(index + 2, 0, vegetable);
            $scope.vegList.splice(index, 1);

        }
    };

    $scope.moveDownFruit = function(fruit, index) {
        console.log('moveup');
        console.log(fruit, index);
        console.log($scope.fruitList[index - 1]);
    };

    $scope.isWrong = function(item, ogList) {
        var isWrong;
        var array;
        if (ogList === 'vegetables') {
            array = vegetables;
        } else {
            array = fruits;
        }

        if (array.includes(item)) {
            isWrong = true;
        } else {
            isWrong = false;
        }
        return isWrong;
    }

    $scope.notFruit = function(isFruit) {
        var notafruit;

        if (vegetables.includes(isFruit)) {
            console.log(isFruit, "not a fruit");
            notafruit = true;
        } else {
            notafruit = false;
        }
        return notafruit;
    };

    var endGame = function() {
        if ($scope.produceList.length === 0) {
            $scope.black = false;

        }
    }

}]);



function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
