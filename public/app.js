// const express = require('express');
// const app = express();
// // const http = require('http').Server(app)
// const path = require('path');
// const fetch = require('node-fetch');
// const PORT = 8000;
//
// app.use(express.static('public'));
//
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });
//
// app.get('/city/household_income/:geoId', (req, res) => {
//   let results;
//   fetch(`http://api.datausa.io/attrs/geo/16000US3916000/`)
//     .then(r => console.log(r))
//     .then(function(response) {
//         return response.text();
//     }).then(function(body) {
//       results = JSON.parse(body);
//         console.log(typeof body);
//         console.log(body.length);
//         console.log(JSON.parse(body)[0]);
//         res.send(results);
//     });
// });
//
// app.listen(PORT, () => {
//   console.log(__dirname);
//   console.log(`listening on ${PORT}`);
// });
