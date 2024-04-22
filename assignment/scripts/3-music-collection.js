console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(title, artist, yearPublished, collection) {
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  myCollection.push(record);
  return record;
}
addToCollection("Dream of the Beast", "Christina Scabbia", 2023);
addToCollection("Swallow the Fire", "Melissa Bonny", 2023);
addToCollection("Raw, Unfiltered Calamity", "DM DOKURO", 2018);
addToCollection("Archangel", "Thomas Bergersen", 2011);
addToCollection("Scarlet Hill", "Jacob Marineau", 2016);
addToCollection(
  "Chopin: Nocturne No. 1 in B-Flat Minor",
  "Frédéric Chopin",
  1830
);
console.log(myCollection);

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
