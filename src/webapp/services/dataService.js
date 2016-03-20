const annotation = ['$http'];

function dataService($http) {

    return {
        getData: function(keyword) {
            return $http.get("/data", {params: {word: keyword}}).then(response => response.data);
        }
    }
}

dataService.$inject = annotation;

export default dataService;
