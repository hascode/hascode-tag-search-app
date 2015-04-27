angular.module('hascodeTagWizard.controllers', [])
    .controller('SearchController', function (searchService, $scope) {
        $scope.term = '';
        $scope.hits = [];
        $scope.showResults = false;

        $scope.searchTerm = function () {
            searchService.searchByTag(this.term).then(function(response){
                $scope.hits = response.data || [];
                console.log('hits received: '+$scope.hits.length);
                $scope.showResults = true;
            });
        };

        $scope.resetResults = function () {
            $scope.showResults = false;
            $scope.hits = [];
        };

        $scope.browse = function(url){
            console.log('opening url: '+url);
        }
    })

    .controller('AboutController', function () {
        this.year = new Date().getFullYear();

        this.browseBlog = function(){
            window.open('http://www.hascode.com/', '_blank', 'location=yes');
        }
    })
;
