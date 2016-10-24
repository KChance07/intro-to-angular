(function() {
  angular.module('intro') //getter syntax
  .controller('MainController', MainController);

  MainController.$inject = ['$scope']; //what tools the MainController function need

  function MainController($scope){ //$scope is our bridge to the dom
    console.log('Now Main Controlling..');
    $scope.person = 'Bob';
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    $scope.saySurprise = saySurprise;

    function saySurprise(person){
      alert('Hey ' + person + '... there is a clown behind you!');
    }
  }
})();
