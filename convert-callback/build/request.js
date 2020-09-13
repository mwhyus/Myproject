"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import axios from 'axios' //pake axios untuk req https agar tidak membuat xml https dari awal
//syntax import harus pke es6, butuh settingan babel
require('regenerator-runtime');

var axios = require('axios');
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
  return new Promise(function (resolve, reject) {
    axios.get('https://api.github.com/repos/request/request') //.then dipanggil jika request dari .get nya berhasil
    .then(function (response) {
      resolve(response);
    }) //.catch dipanggil jika request dari .get nya gagal
    ["catch"](function (error) {
      reject(error);
    });
  });
} //async await digunakan untuk melakukan sebuah operation
//Await menunggu sampai sebuah operetion selesai dilakukan setelah itu akan lanjut ke proses selanjutnya
// Component function


function doRequestRepo() {
  return _doRequestRepo.apply(this, arguments);
}

function _doRequestRepo() {
  _doRequestRepo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, info;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return requestRepo();

          case 3:
            response = _context.sent;
            // somerandomFunction(response)
            // alert(JSON.stringify(response)) // untuk memunculkan mengubah JSON ke dalam bentuk string krn dalam FE tidak bisa menampilkan secara langung file JSON nya
            console.log(response, response.status);

            if (response.status === 200) {
              info = response.data;
              console.log(info);
              console.log(info.name);
              console.log(info.stargazers_count + " Stars");
              console.log(info.forks_count + " Forks");
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            alert('masuk eror');
            alert(JSON.stringify(_context.t0));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _doRequestRepo.apply(this, arguments);
}

function start() {
  console.log('starting');
  doRequestRepo();
}

start();