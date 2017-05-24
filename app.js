(function () {
    var app = angular.module('prototypeApps', ['application-directives']);
    app.controller('prototypeController', ['$http', function ($http) {
        var ptc = this;
        this.applications = [];
        $http.get('https://nssr-vservir1.nsstc.nasa.gov/Ajax.aspx?getPrototypes=y&demouser=someone&dbname=prototypedemo').success(function (data) {
            ptc.applications = data;
        });
        this.footerlinks = footerList;
    }]);
    
    app.controller("ReviewController", ['$http', function ($http) {
        this.review = {};
        this.addReview = function (application) {
            this.review.createdOn = Date.now();
            application.reviews.push(this.review);
            $http.get('https://nssr-vservir1.nsstc.nasa.gov/Ajax.aspx?addReview=y&demouser=someone&dbname=prototypedemo&ID=' + application._id + '&newReview=' + JSON.stringify(this.review)).success(function (data) {
                //nothing needs to happen here
            });
            this.review = {};
        };
    }]);

})();

var footerList = [{
    "title": "HUB Activities", "links": [{ "href": "https://www.servirglobal.net/Global/Activity-Mapper?hub=mesoamerica", "text": "Mesoamerica" },
                                          { "href": "https://www.servirglobal.net/Global/Activity-Mapper?hub=africa", "text": "Eastern & Southern Africa" },
                                          { "href": "https://www.servirglobal.net/Global/Activity-Mapper?hub=himalaya", "text": "Himalaya" },
                                          { "href": "https://www.servirglobal.net/Global/Activity-Mapper?hub=mekong", "text": "Mekong" }
    ]
},
 {
     "title": "Our Work", "links": [{ "href": "http://catalogue.servirglobal.net/", "text": "Product Catalog" },
                                    { "href": "https://www.servirglobal.net/Global/Maps-Data/Data-Catalog", "text": "Data Catalog" },
                                     { "href": "https://www.servirglobal.net/Global/Maps-Data/Interactive-Mapper", "text": "Geoportal" },
                                     { "href": "https://www.servirglobal.net/data-maps/iserv/", "text": "ISERV Imagery" }]
 },
  {
      "title": "About SERVIR", "links": [{ "href": "https://www.servirglobal.net/about-servir", "text": "About SERVIR" },
                                     { "href": "https://www.servirglobal.net/Servir-ast", "text": "SERVIR APPLIED SCIENCES TEAM" },
                                      { "href": "https://www.servirglobal.net/about-servir#team", "text": "Our Team" }]
  }];