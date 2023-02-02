import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './Export.html';

Template.export.onCreated(function mainContainerOnCreated() {
  if (this.data.progress < 100) {
    let subURLs = Meteor.subscribe('allUrls');
    Meteor.call('exports.updateInterval', this.data.progress, this.data._id);
  }
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