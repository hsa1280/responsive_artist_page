const annotation = ['$stateProvider'];

function artistStateProvider($stateProvider) {
    $stateProvider.
        state('artist', {
            url: '/artist',
            views: {
                'content': {
                    templateUrl: '/views/artist.html',
                    controller: 'artistController as artistController'
                }
            }
        })
}

artistStateProvider.$inject = annotation;
export default artistStateProvider;