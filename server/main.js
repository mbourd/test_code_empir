import { Meteor } from 'meteor/meteor';
import { URLsCollection } from '../imports/db/URLsCollection';
import { exportsCollection } from '../imports/db/exportsCollection';
import '../imports/api/exportsMethods';
import '../imports/api/exportsPublications';
import '../imports/api/urlsPublications';


const insertUrl = (urlText) =>
  URLsCollection.insert({
    text: urlText
  });

Meteor.startup(() => {
  if (exportsCollection.find().count() === 0) {
    [].forEach(() => {})
  }

  if (URLsCollection.find().count() === 0) {
    [
      'https://www.lempire.com/',
      'https://www.lemlist.com/',
      'https://www.lemverse.com/',
      'https://www.lemstash.com/'
    ].forEach(urlText => insertUrl(urlText))
  }
});
