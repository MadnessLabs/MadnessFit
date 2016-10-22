/// <reference path="../typings/index.d.ts"/>
module MadnessFit {
    'use strict';

    class MadnessFitRouter {
        constructor($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {'url':'/home', 
'templateUrl':'html/page/home.html', 
'controller':'MadnessFit.HomeController as ctrl'})
				.state('moods', {'url':'/moods', 
'templateUrl':'html/page/moods.html', 
'controller':'MadnessFit.MoodsController as ctrl'});

            $urlRouterProvider.otherwise(function($injector, $location) {
                var $state = $injector.get('$state');
                $state.go('home');
            });
        }
    }

    angular.module('MadnessFit')
           .config(MadnessFitRouter);
}