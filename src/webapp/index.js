const inject = ( ...values ) => function( target ) {
    target.$inject = values;
};

window.inject = inject;

import angular from 'angular';
import 'angular-ui-router';
import artist from './views/index';

export default angular.
    module('artistApp', [ 'ui.router', artist.name ]);