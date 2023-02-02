import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Export.html';

Template.export.onCreated(function mainContainerOnCreated() {
  Meteor.subscribe('allUrls');
  Meteor.subscribe('allExports');
  Meteor.call('exports.updateInterval', this.data._id);
});

Template.export.helpers({
  progress() {
    const instance = Template.instance();
    return instance.data.progress;
  },

  result() {
    const instance = Template.instance();
    return instance.data.result;
  }
})