angular.module('hascodeTagWizard.controllers', [])
    .controller('SearchController', function (searchService) {
        this.term = '';
        this.hits = [];
        this.hasSearched = false;

        this.searchTerm = function () {
            this.hasSearched = true;
            this.hits = searchService.searchByTag(this.term) || [];
        };
    })

    .controller('AboutController', function () {
        this.year = new Date().getFullYear();
    })
;
