(function() {
  angular.module('intro') //getter syntax
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService']; //what tools the MainController function need

  function MainController($scope, TodoService){
    $scope.todos = TodoService.get();
    $scope.createTodo = createTodo;
    $scope.deleteTodo = deleteTodo;

    function createTodo(newTodo){
      TodoService.create(newTodo);
      $scope.newTodo = '';
    }
    function deleteTodo(index){
      TodoService.delete(index);
    }
  }
})();
