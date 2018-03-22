#!/usr/bin/node

var fs = require('fs');
var http = require('http');
var mine = 'image/jpg';
var data = fs.readFileSync('eye-close.png').toString('base64');
var uri ='data:'+mine+';base64,'+data;
console.log(uri);
var html = '<!DOCTYPE html>\n<html>\n<body>\n<img alt="node-logo" src="'+uri+'"\>\n</body>\n</html>';

http.createServer(function(req,res){
  console.log(req.headers);
  res.end(html);
}).listen(8080);



