angular.module('hascodeTagWizard.controllers', [])
.controller('SearchController', function ($scope, searchService) {
    $scope.term = '';
    $scope.hits = [];
    $scope.hasSearched = false;

    $scope.searchTerm = function(){
       $scope.hasSearched = true;
       $scope.hits = searchService.searchByTag($scope.term) || [];
    };
});
