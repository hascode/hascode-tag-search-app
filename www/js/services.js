/* global angular, console */
angular.module('hascodeTagWizard')
    .factory('overviewService', function ($http) {
        "use strict";

        var url = 'http://www.hascode.com/wp-content/tags.php';

        return {
            fetchAll: function () {
                return $http({method: 'GET', url: url});
            }
        };
    })


    .factory('searchService', function ($http) {
        "use strict";

        var blogUrl = 'http://www.hascode.com/wp-content/byTag.php?tag=';

        return {
            searchByTag: function (tag) {
                var searchUrl = blogUrl + tag;
                console.log('searching articles for tag ' + tag);

                return $http({method: 'GET', url: searchUrl});
            }
        };
    });
