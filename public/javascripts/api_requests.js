// fetch('https://api.datausa.io/api/?sort=desc&show=geo&required=income%2Cincome_moe&sumlevel=all&year=all&geo=01000US%2C04000US39%2C05000US39035%2C31000US17460%2C16000US3916000')
//     .then(function(response) {
//         console.log(response);
//         return response.text();
//     }).then(function(body) {
//         let results = JSON.parse(body);
//         console.log(results);
//     });

const fetchData = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.datausa.io/api/?sort=desc&show=geo&required=income%2Cincome_moe&sumlevel=all&year=all&geo=01000US%2C04000US39%2C05000US39035%2C31000US17460%2C16000US3916000`
  });
};


// State Codes
// They're FIPS codes apparently


// "Ohio", "39"]
  // Cleveland (Cuyohoga county) = 035
