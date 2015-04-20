angular.module('hascodeTagWizard', ['ionic', 'hascodeTagWizard.controllers', 'hascodeTagWizard.services', 'hascodeTagWizard.directives'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $sceDelegateProvider, $httpProvider) {
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
