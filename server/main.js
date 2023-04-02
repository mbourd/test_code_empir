import { Meteor } from 'meteor/meteor';
import { URLsCollection } from '../imports/db/URLsCollection';
import { exportsCollection } from '../imports/db/exportsCollection';
import '../imports/api/exportsMethods';
import '../imports/api/exportsPublications';
import '../imports/api/urlsMethods';
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
      'https://www.exemple1.com/',
      'https://www.exemple2.com/',
      'https://www.exemple3.com/',
      'https://www.exemple4.com/'
    ].forEach(urlText => insertUrl(urlText))
  }
});
