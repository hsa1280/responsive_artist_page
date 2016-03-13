const annotation = ['dataService']

class artistController {
    constructor(dataService) {
        this.name = 'shian';
        this.dataList = null;
        this.dataService = dataService;
    }

    getData() {
        this.dataService.getData().then( data => {
            this.dataList = data;
        });
    }
}

artistController.$inject = annotation;
export default artistController;