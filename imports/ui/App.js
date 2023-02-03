import { Template } from 'meteor/templating';
import { URLsCollection } from '../db/URLsCollection';
import { exportsCollection } from '../db/exportsCollection';

import './App.html';

import './Export.js';

Template.mainContainer.onCreated(function mainContainerOnCreated() {
  Meteor.subscribe('allExports');
  Meteor.subscribe('allUrls');
});

Template.mainContainer.helpers({
  exports() {
    return exportsCollection.find({});
  }
});

Template.mainContainer.events({
  "click #export-button"(event, instance) {
    Meteor.call('exports.insertAndStartExport');
  }
});