require ('regenerator-runtime')
const axios = require('axios')

/*
  * Callback
  const request = require('request');
  const options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
  'User-Agent': 'request'
  }
  };
  function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    console.log(info.name)
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
  }
  request(options, callback ); */

// Service
function requestRepo() {
  return new Promise ((resolve, reject) => {
    axios.get('https://api.github.com/repos/request/request')
      .then((response) => { 
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })

  })
}


// Component function
async function doRequestRepo() {
  try {
    const response = await requestRepo()
    console.log(response, response.status)

    if (response.status === 200) {
      const info = response.data;
      console.log(info)
      console.log(info.name)
      console.log(info.stargazers_count + " Stars");
      console.log(info.forks_count + " Forks");
    }
  } catch(error) {
    alert('masuk eror')
    alert(JSON.stringify(error))
  }
}

function start() {
  console.log('starting')
  doRequestRepo()
}

start()
