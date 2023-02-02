import { Meteor } from 'meteor/meteor';
import { URLsCollection } from '../db/URLsCollection';

Meteor.publish('allUrls', function publishAllUrls() {
  return URLsCollection.find({});
});