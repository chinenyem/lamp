angular.module("recipeApp-modules.controllers")

  .controller("addController", function($scope, $location, postService){

    $scope.getPosts = postService.getPosts();

    $scope.ingredientArray = [];

    $scope.recipeSubmit = function (recipe) {

      postService.createPost({

      title: recipe.title,
      ingredients: $scope.ingredientArray,
      directions: recipe.instructions,
      serves: recipe.serves

      });

      $location.path("/");

      };

    $scope.addIngredient = function(ingredient) {

      $scope.ingredientArray.push({

        name:ingredient.name,
        type:ingredient.type,
        amount:ingredient.amount || null

      });
      $scope.ingredients = {};

      console.log($scope.ingredientArray);

    };
  });
