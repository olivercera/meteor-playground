import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

var customGetPath = function(){

  var fs = require('fs');

  var meteor_root = Npm.require('fs').realpathSync(process.cwd() + '/../');
  var application_root = Npm.require('fs').realpathSync(meteor_root + '/../');

  // if running on dev mode
  if (Npm.require('path').basename(Npm.require('fs').realpathSync(meteor_root + '/../../../')) == '.meteor') {
    application_root = Npm.require('fs').realpathSync(meteor_root + '/../../../../');
  }

  return application_root;
}

Meteor.methods({
  'createFile': function () {
    

    console.log(customGetPath());


    console.log('create a new file');
  
  }
});
