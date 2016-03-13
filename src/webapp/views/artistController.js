const annotation = ['dataService']

class artistController {
    constructor(dataService) {
        this.dataList = [
                            {
                              "name": "The Weeken",
                              "description": "Feat. August Alsina, Jeremih and more",
                              "image": "http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)"
                            },
                            {
                              "name": "Selena Gomez",
                              "description": "Feat. Ariana Grande, Demi Lovato and more",
                              "image": "http://iscale.iheart.com/catalog/artist/57706?ops=fit(250,0)"
                            },
                            {
                              "name": "R. City",
                              "description": "Feat. Nelly, lyaz, Wiz Khalifa and more",
                              "image": "http://iscale.iheart.com/catalog/artist/30005067?ops=fit(250,0)"
                            },
                            {
                              "name": "Justin Bieber",
                              "description": "Feat. Shawn Mendes, One Direction and more",
                              "image": "http://iscale.iheart.com/catalog/artist/44368?ops=fit(250,0)"
                            },
                            {
                              "name": "Major Lazer",
                              "description": "Feat. lyaz, Dillon Francis & DJ Snake and more",
                              "image": "http://iscale.iheart.com/catalog/artist/43557?ops=fit(250,0)"
                            },
                            {
                              "name": "Taylor Swift",
                              "description": "Feat. Meghan Trainor, Katy Perry and more",
                              "image": "http://iscale.iheart.com/catalog/artist/33221?ops=fit(250,0)"
                            }
                        ]
        this.dataService = dataService;
        this.testData = null;
//        this.getData();
    }

    getData() {
        this.dataService.getData().then( data => {
            this.testData = data;
        });
    }
}

artistController.$inject = annotation;
export default artistController;