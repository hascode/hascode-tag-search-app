angular.module('hascodeTagWizard')

    .factory('searchService', function ($http, $q) {
        var blogUrl = 'http://www.hascode.com/wp-content/byTag.php?tag=';

        return {
            searchByTag: function (tag) {
                var searchUrl = blogUrl + tag;
                console.log('searching articles for tag ' + tag);

                return $http({method: 'GET', url: searchUrl});
            }
        };
    });
