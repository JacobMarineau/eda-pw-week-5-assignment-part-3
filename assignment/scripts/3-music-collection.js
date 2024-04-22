console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(record);
  return record;
}
addToCollection(myCollection, "Dream of the Beast", "Christina Scabbia", 2023);
addToCollection(myCollection, "Swallow the Fire", "Melissa Bonny", 2023);
addToCollection(myCollection, "Raw, Unfiltered Calamity", "DM DOKURO", 2018);
addToCollection(myCollection, "Archangel", "Thomas Bergersen", 2011);
addToCollection(myCollection, "Scarlet Hill", "Jacob Marineau", 2016);
addToCollection(
  myCollection,
  "Chopin: Nocturne No. 1 in B-Flat Minor",
  "Frédéric Chopin",
  1830
);

console.log(myCollection);

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    const record = collection[i];
    console.log(
      `${record.title} by ${record.artist}, published in ${record.yearPublished}`
    );
  }
}
showCollection(myCollection);
// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
