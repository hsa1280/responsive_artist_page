const annotation = ['$stateProvider'];

function artistStateProvider($stateProvider) {
    console.log('in state provider');
    $stateProvider.
        state('artist', {
            url: '/artist',
            views: {
                'content': {
                    templateUrl: 'src/webappviews/artist.html',
                    //Need to know if I need this
                    controller: 'artistController as artistController'
                }
            }
        })
}

artistStateProvider.$inject = annotation;
export default artistStateProvider;