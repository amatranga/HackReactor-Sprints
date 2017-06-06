var fs = require('fs');
var http = require('http');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {

  fs.readFile(exports.paths.list, 'utf-8', function(err, data) {
    if (err) {
      console.log('ERROR: ', err);
    }
    var split = data.split('\n');
    callback(split);
  });
};

exports.isUrlInList = function(url, callback) {

  exports.readListOfUrls(function(arrayOfSites) {
    for (var i = 0; i < arrayOfSites.length; i++) {
      if (url === arrayOfSites[i]) {
        callback(true);
        return;
      }
    }
    callback(false);
  });
};

exports.addUrlToList = function(url, callback) {
  exports.isUrlInList(url, function(checkForUrl) {
    if (checkForUrl) {
      callback();
      return;
    } else {
      // url was not found in the list, so add it.
      fs.appendFile(exports.paths.list, url, function(err) {
        if (err) {
          console.log(err);
          return;
        } else {
          callback();
          return;
        }
      });
    }
  });
};

exports.isUrlArchived = function(url, callback) {
  fs.exists(exports.paths.archivedSites + '/' + url, function(exists) {
    if (exists) {
      callback(true);
    } else {
      callback(false);
    }
  });
};

exports.downloadUrls = function(urls) {

  urls.forEach(function(url) {
    var file = fs.createWriteStream(exports.paths.archivedSites + '/' + url);

    http.get( { host: url, port: 80, path: '/index.html' }, function (response) {
      response.pipe(file);
      file.on('finish', function(){
        file.close(function(err) {
          console.log(err);
        });
      });
    });
  });
};