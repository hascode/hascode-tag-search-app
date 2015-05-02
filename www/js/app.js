/* global angular, console, cordova, StatusBar */
angular.module('hascodeTagWizard', ['ionic'])

    .run(function ($ionicPlatform) {
        "use strict";
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
        "use strict";
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our blog domain.
            'http://www.hascode.com/**'
        ]);

        $stateProvider
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            .state('tab.search', {
                url: '/search',
                views: {
                    'tab-search': {
                        templateUrl: "templates/tab-search.html",
                        controller: 'SearchController'
                    }
                }
            })

            .state('tab.about', {
                url: '/about',
                views: {
                    'tab-about': {
                        templateUrl: "templates/tab-about.html",
                        controller: 'AboutController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/tab/search');
    });
