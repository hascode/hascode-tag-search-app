/* global angular, console */
angular.module('hascodeTagWizard')
    .controller('SearchController', function (searchService, $scope) {
        "use strict";

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
        };
    })

    .controller('AboutController', function () {
        "use strict";

        this.year = new Date().getFullYear();

        this.browseBlog = function(){
            window.open('http://www.hascode.com/', '_blank', 'location=yes');
        };
    })
;
