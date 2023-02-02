import { Meteor } from 'meteor/meteor';
import { exportsCollection } from '../db/exportsCollection';

Meteor.publish('allExports', function publishAllExports() {
  return exportsCollection.find({});
});