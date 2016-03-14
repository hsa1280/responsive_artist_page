const annotation = ['dataService']

class artistController {
    constructor(dataService) {

    "http://iscale.iheart.com/catalog/artist/744880?ops=fit(250,0)"
        this.dataList = [
            {
              "artistName": "The Weeken",
              "description": "Feat. August Alsina, Jeremih and more",
              "artistId": "744880"
            },
            {
              "artistName": "Selena Gomez",
              "description": "Feat. Ariana Grande, Demi Lovato and more",
              "artistId": "57706"
            },
            {
              "artistName": "R. City",
              "description": "Feat. Nelly, lyaz, Wiz Khalifa and more",
              "artistId": "30005067"
            },
            {
              "artistName": "Justin Bieber",
              "description": "Feat. Shawn Mendes, One Direction and more",
              "artistId": "44368"
            },
            {
              "artistName": "Major Lazer",
              "description": "Feat. lyaz, Dillon Francis & DJ Snake and more",
              "artistId": "43557"
            },
            {
              "artistName": "Taylor Swift",
              "description": "Feat. Meghan Trainor, Katy Perry and more",
              "artistId": "33221"
            }
        ]
        this.dataService = dataService;
        this.testData = null;
        this.keyword = '';
        this.imageUrlPrefix = "http://iscale.iheart.com/catalog/artist/";
        this.imageUrlPostfix = "?ops=fit(250,0)";
    }

    getData() {
        this.dataService.getData(this.keyword).then( data => {
            this.dataList = data.artists;
        });
    }
}

artistController.$inject = annotation;
export default artistController;