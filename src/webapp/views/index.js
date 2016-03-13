import angular from 'angular';
import artistController from './artistController';
import artistStateProvider from './artistStateProvider';

export default angular.
    module('artistModule', []).
    config(artistStateProvider).
    controller('artistController', artistController);