angular.module('hascodeTagWizard.controllers', [])
    .controller('SearchController', function ($scope, searchService) {
        $scope.term = '';
        $scope.hits = [];
        $scope.hasSearched = false;

        $scope.searchTerm = function () {
            alert('term is: ' + $scope.term);

            $scope.hasSearched = true;
            $scope.hits = searchService.searchByTag($scope.term) || [];
        };
    })

    .controller('AboutController', function ($scope) {

    })
;
