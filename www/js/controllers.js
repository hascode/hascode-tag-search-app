angular.module('hascodeTagWizard.controllers', [])
    .controller('SearchController', function (searchService, $scope) {
        $scope.term = '';
        $scope.hits = [];
        $scope.showResults = false;

        $scope.searchTerm = function () {
            $scope.showResults = true;
            searchService.searchByTag(this.term).then(function(response){
                $scope.hits = response.data || [];
                console.log('hits received: '+$scope.hits.length);
            });
        };

        $scope.resetResults = function () {
            $scope.showResults = false;
            $scope.hits = [];
        };
    })

    .controller('AboutController', function () {
        this.year = new Date().getFullYear();
    })
;
