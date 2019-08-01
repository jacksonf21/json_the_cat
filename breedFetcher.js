const request = require('request');
let [url] = process.argv.slice(2);
url = 'https://api.thecatapi.com/v1/breeds/search?q=' + url;

const fetcher = (url, callback) => {

  request(url, (error, response, body) => {
    if (error) callback(error);
    else if (JSON.parse(body).length === 0) console.log('Breed not found');
    else callback(JSON.parse(body)[0].description);
  });

};

fetcher(url, (val) => {
  console.log(val);
});
