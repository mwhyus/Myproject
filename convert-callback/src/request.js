// import axios from 'axios' //pake axios untuk req https agar tidak membuat xml https dari awal
//syntax import harus pke es6, butuh settingan babel
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

//Promise digunakan dalam melakukan sesuatu yang terdapat sebuah kemungkinan

// Service
function requestRepo() {
  return new Promise ((resolve, reject) => {
    axios.get('https://api.github.com/repos/request/request')
  //.then dipanggil jika request dari .get nya berhasil
      .then((response) => { 
        resolve(response)
      })
  //.catch dipanggil jika request dari .get nya gagal
      .catch((error) => {
        reject(error)
      })

  })
}

//async await digunakan untuk melakukan sebuah operation
//Await menunggu sampai sebuah operetion selesai dilakukan setelah itu akan lanjut ke proses selanjutnya
// Component function
async function doRequestRepo() {
  try {
    //variabel ini untuk menampung value respon dari .then
    const response = await requestRepo()
    // somerandomFunction(response)
    // alert(JSON.stringify(response)) // untuk memunculkan mengubah JSON ke dalam bentuk string krn dalam FE tidak bisa menampilkan secara langung file JSON nya
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
