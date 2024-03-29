const { fetcher } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetcher', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetcher('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (val) => {
      // we expect no error for this scenario

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, val);

      done();
    });
  });
  
  it('returns a string description for a non valid breed, via callback', (done) => {
    fetcher('https://api.thecatapi.com/v1/breeds/search?q=awd', (val) => {

      // compare returned description
      assert.equal(val, 'Breed not found');

      done();
    });
  
  });
});