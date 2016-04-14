var http = require('http')
var async = require('async');

//il tuo slice e' figo
async.map(process.argv.slice(2,5), getData, function (e, aftermaparray) {
  aftermaparray.forEach(elem => console.log(elem));
});


//il trucco e' chiamare la callback della map function on end,
// altrimenti ritorna un array di functions.
function getData(url, callback) {
	http.get(url, function (response) {
		var tutto = '';
    response.setEncoding('utf8');
    response.on('data',function(data){tutto += data});
    response.on('end', function(){
    	callback(null, tutto);
    })
  })
}


