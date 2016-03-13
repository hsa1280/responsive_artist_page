const annotation = ['dataService']

class artistController {
    constructor(dataService) {
        this.name = 'shian';
        this.dataList = null;
        this.dataService = dataService;
        this.getData();
    }

    getData() {
        this.dataService.getData().then( data => {
            this.dataList = data.dataList;
        });
    }
}

artistController.$inject = annotation;
export default artistController;