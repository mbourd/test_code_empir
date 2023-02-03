import { check } from 'meteor/check';
import { URLsCollection } from '../db/URLsCollection';
import * as _ from 'underscore';

Meteor.methods({
  'urls.getRandomURL'() {
    let rand = _.sample(URLsCollection.find({}).fetch());
    return URLsCollection.findOne({ _id: rand && rand._id });
  },
})