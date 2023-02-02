import { check } from 'meteor/check';
import { exportsCollection } from '../db/exportsCollection';
import { URLsCollection } from '../db/URLsCollection';
import * as _ from 'underscore';

Meteor.methods({
  'exports.insert'(progress, urlText, createdAt) {
    check(urlText, String);
    check(progress, Number);

    exportsCollection.insert({
      progress, result: urlText, createdAt
    });
  },

  'exports.update'(exportId, progress, urlText = "") {
    check(exportId, String);
    check(urlText, String);
    check(progress, Number);

    exportsCollection.update(exportId, {
      $set: {
        progress, result : urlText
      }
    })
  },

  'exports.updateInterval'(progress = null, exportId = null) {
    let newProgress = progress;

    let hInterval = Meteor.setInterval(() => {
      newProgress = newProgress + 5;

      Meteor.call('exports.update', exportId, newProgress);

      if (newProgress >= 100) {
        let rand = _.sample(URLsCollection.find({}).fetch());
        let randUrl = URLsCollection.find({ _id: rand && rand._id }).fetch()[0].text;

        Meteor.call('exports.update', exportId, 100, randUrl);
        Meteor.clearInterval(hInterval);
      }
    }, 1000);
  },
})