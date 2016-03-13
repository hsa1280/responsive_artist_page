'use strict';

module.exports = function ($stateProvider) {
    $stateProvider.
        state('main.artist', {
            url: '/artist',
            parent: 'main',
            views: {
                'content@': {
                    templateUrl: 'views/artist.html',
                                            //Need to know if I need this
                    controller: 'artistController as artistController'
                }
            }
        });
}