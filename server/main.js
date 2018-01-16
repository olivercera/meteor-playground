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

  },
  'downloadFile': function (){
    customGetPath()
  }
});


Router.route('/download', function () {
  
  var filename = "meteor-xml-download.xml";
  try {
    var fs = require('fs');
    data = fs.readFileSync(customGetPath() + '\\uploads\\test.xml');
  } catch (err) {
    console.log(err);
    this.response.writeHead(404);
    this.response.end('Error 404 - Not found.');
    return;
  }

  var headers = {
    'Content-type': 'text/xml',
    'Content-Disposition': 'attachment; filename=' + filename
  };
  this.response.writeHead(200, headers);
  return this.response.end(data);
}, { where: 'server' });