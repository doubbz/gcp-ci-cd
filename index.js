'use strict';

const axios = require('axios');

exports.pokeapi = (request, response) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/1/')
  .then(function (res) {
    console.log(res.data);
    response.status(200).send(res.data);
  })
};

