//Newyorktimes api key - dbefea579a564f68a444f3a5090998e9
//Getting headlines from newyork times for query=oil

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=oil&api-key=dbefea579a564f68a444f3a5090998e9";


function setup() {
  noCanvas();
  loadJSON(url, gotData);
  
}

function gotData(data) {
  
  var articles = data.response.docs;
  
  for (var i =0; i<articles.length; i++){
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
  }
  
}