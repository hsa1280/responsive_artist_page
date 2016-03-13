const annotation = ['$stateProvider'];

function artistStateProvider($stateProvider) {
    console.log('in state provider');
    $stateProvider.
        state('artist', {
            url: '/artist',
            views: {
                'content': {
                    templateUrl: '/src/webapp/views/artist.html',
                    controller: 'artistController as artistController'
                }
            }
        })
}

artistStateProvider.$inject = annotation;
export default artistStateProvider;