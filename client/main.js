import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.createFile.onCreated(function helloOnCreated() {
  
});

Template.createFile.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.createFile.events({
  'click button' (event, instance) {
    Meteor.call('createFile');
  },
});
