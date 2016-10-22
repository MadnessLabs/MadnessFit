/// <reference path="../../typings/index.d.ts"/>
module MadnessFit {
    'use strict';

    class HomeController {
        constructor() {
            // ON LOAD  
            alert('test');     
        }
    }

    angular.module('MadnessFit')
           .controller('MadnessFit.HomeController', HomeController);
}