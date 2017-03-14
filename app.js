'use strict'
// var elasticsearch  = require('elasticsearch');

import elasticsearch from 'elasticsearch';
// var op = require('./tasks/options');

// console.log(op().watch);

var esclient = new elasticsearch.Client({
    host: 'localhost:9200'
});

// esclient.info({}, function(err, response){
// 	console.log(response);
// });

var getEsInfo = async function() {
	var esInfo = await esclient.info();
	console.log(esInfo);
}

getEsInfo();

// esclient.info().then(function(info){
// 	console.log(info);
// });
// console.log(esinfo);

let x = 'sss';
console.log(x);
