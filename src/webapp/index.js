
import angular from 'angular';
import 'angular-ui-router';
import artist from './views/index';

export default angular.
    module('artistApp', [ 'ui.router', artist.name ]).
    config(function configuration($stateProvider) {
        $stateProvider.state('main', {
            'abstract': true,
            views: {
                'content@': {}
            }
        })
    })