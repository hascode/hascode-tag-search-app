angular.module('hascodeTagWizard.directives', [])

    .directive('blogarticle', function () {
        return {
            restrict: 'E',
            scope: {
                article: '=data'
            },
            template:
                '<a class="item item-thumbnail-left" ng-href="{{article.url}}">' +
                '<img ng-src="{{article.image}}">' +
                '<h2>{{article.title}}</h2><p>{{article.excerpt}}</p></a>'
        }
    })
;