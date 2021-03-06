/* global angular, console */
angular.module('hascodeTagWizard')

    .directive('blogarticle', function () {
        "use strict";

        return {
            restrict: 'E',
            scope: {
                article: '=data'
            },
            link: function (scope, element, attrs) {
                scope.browse = function (url) {
                    console.log('opening link: '+url);
                    window.open(url, '_blank', 'location=yes');
                };
            },
            template: '<a class="item item-thumbnail-left item-text-wrap" ng-click="browse(article.url)">' +
                '<img ng-src="{{article.image}}">' +
                '<h2>{{article.title}}</h2><p>{{article.excerpt}}</p></a>'
        };
    })

    .directive('tag', function () {
        "use strict";

        return {
            restrict: 'E',
            scope: {
                data: '='
            },
            link: function (scope, element, attrs) {
                scope.browse = function (url) {
                    console.log('opening link: '+url);
                    window.open(url, '_blank', 'location=yes');
                };
            },
            template: '<a class="item item-text-wrap" ng-click="browse(data.url)">' +
            '<span>{{data.name}}</span><span class="badge badge-dark">{{data.articles}}</span></a>'
        };
    })
;