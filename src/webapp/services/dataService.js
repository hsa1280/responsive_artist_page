const annotation = ['$http'];

function dataService($http) {

    return {
        getData: function() {
            return $http.get('/data').then(response => response.data);
        }
    }
}

dataService.$inject = annotation;

export default dataService;