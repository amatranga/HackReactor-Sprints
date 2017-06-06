var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
// var parse = require('../helpers/uri-parser');
var httpHelpers = require('./http-helpers');
// require more modules/folders here!

var router = {
  '/': true,
  '/index.html': true,
  '/styles.css': true
};

exports.handleRequest = function (request, response) {

  if (request.method === 'GET') {

    if (request.url === '/' || request.url === '/#') {
      request.url = '/index.html';
    }

    if (router[request.url]) {
      fs.readFile(__dirname + '/public' + request.url, function(err, data) {
        response.statusCode = 200;
        response.writeHead(response.statusCode, 'OK', httpHelpers.headers);
        if (err) {
          console.log(err);
        } else {
          response.end(data);
        }
      });

    } else {
      archive.isUrlArchived(request.url.slice(1), function(isArchived) {
        if (isArchived) {
          // fs.readFile(archive.paths.archivedSites + request.url, function(err, data) {
          //   response.statusCode = 200;
          //   response.writeHead(response.statusCode, 'OK', httpHelpers.headers);
          //   if (err) {
          //     console.log(err);
          httpHelpers.serveAssets(201, archive.downloadUrls, function(err, data){
            if (err) {console.log(err)}
            else {
              httpHelpers.sendResponse(response, data);
              response.end(data);
            }
          });
        }
      });
    }
  } else if (request.method === 'POST' ){
    var body = '';
    request.on('data', function(chunk) {
      body += chunk;
    });
    request.on('end', function(){
      console.log(body.slice(4), 'BODY');
      archive.addUrlToList(body.slice(4) + '\n', function(){
        console.log('Our highly trained monkeys are working on archiving your website');
        response.writeHead(302, 'FOUND', httpHelpers.headers);
        response.end();
      });
    });
  }
};
