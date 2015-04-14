angular.module('hascodeTagWizard.controllers', [])
    .controller('SearchController', function (searchService) {
        this.term = '';
        this.hits = [];
        this.showResults = false;

        this.searchTerm = function () {
            this.showResults = true;
            this.hits = searchService.searchByTag(this.term) || [];
        };

        this.resetResults = function(){
            this.showResults = false;
            this.hits = [];
        };
    })
;
