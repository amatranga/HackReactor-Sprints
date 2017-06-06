var archive = require('../helpers/archive-helpers');

archive.readListOfUrls(function(list){
  list.forEach(function(url){
    if (url.length > 0){
      archive.isUrlArchived(url, function(isArchived){
        if (!isArchived){
          console.log(url, ' is not yet archived!!');
          archive.downloadUrls([url]);
        } else {
          console.log(url, ' is archived  :)');
        }
      });
    }
  });
});
//download all sites from sites.txt
  //fs.readFile

//run isUrlArchived on all sites
  //if URL is archived, do nothing
  //If URL is NOT archived...
    //run addUrlToList on URL

//delete all sites listed in sites.txt
