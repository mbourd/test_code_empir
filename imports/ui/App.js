import { Template } from 'meteor/templating';
import { URLsCollection } from '../db/URLsCollection';
import { exportsCollection } from '../db/exportsCollection';

import './App.html';

import './Export.js';

Template.mainContainer.onCreated(function mainContainerOnCreated() {
  Meteor.subscribe('allExports');
});

Template.mainContainer.helpers({
  exports() {
    return exportsCollection.find({}).fetch();
  }
});

Template.mainContainer.events({
  "click #export-button"(event, instance) {
    Meteor.call('exports.insert', 0, '', new Date());
  }
});