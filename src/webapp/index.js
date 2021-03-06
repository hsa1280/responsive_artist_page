const inject = ( ...values ) => function( target ) {
    target.$inject = values;
};

window.inject = inject;

import angular from 'angular';
import 'angular-ui-router';
import artist from './views/index';
import dataService from './services/index'

var artistApp = angular.module('artistApp', [ 'ui.router', artist.name, dataService.name ]);

export default artistApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/artist");
});
