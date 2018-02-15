const fetchSportsData = (yr) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.sportradar.us/nfl-t1/teams/${yr}/REG/standings.json?api_key=hjyu8hqymwz2umwz29zrf6pn`
  });
};

const fetchData = () => {
  return $.ajax({
    method: 'GET',
    url: `http://api.datausa.io/attrs/geo/16000US3916000/`,
    dataType: 'jsonp'
  });
};


// fetch(`http://api.datausa.io/attrs/geo/16000US3916000/`).then(res => console.log(res));

// census bureau api key bc6b73c6cce45b6fdb1a47f9f4785efbd765faa0

// State Codes
// They're FIPS codes apparently

// (5) ["EMP", "ESTAB", "SIC_TTL", "GEO_TTL", "state"]
// 1
 // "Alabama", "01"]
 // "Alaska", "02"]
 // "Arizona", "04"]
// "Arkansas", "05"]
// "California", "06"]
// LA 037
// SF 075
// San Diego 073
 // "Colorado", "08"]
// "Connecticut", "09"]
// "Delaware", "10"]
// "District of Columbia", "11"]
// "Florida", "12"]
// "Georgia", "13"]
 // "Hawaii", "15"]
// "Idaho", "16"]
//"Illinois", "17"]
// "Indiana", "18"]
// "Iowa", "19"]
// "Kansas", "20"]
// "Kentucky", "21"]
// "Louisiana", "22"]
// "Maine", "23"]
 // "Maryland", "24"]
// "Massachusetts", "25"]
 // "Michigan", "26"]
// "Minnesota", "27"]
// "Mississippi", "28"]
 // "Missouri", "29"]
// "Montana", "30"]
 // "Nebraska", "31"]
// "Nevada", "32"]
// "New Hampshire", "33"]
// "New Jersey", "34"]
//  "New Mexico", "35"]
// "New York", "36"]
// "North Carolina", "37"]
// "North Dakota", "38"]
// "Ohio", "39"]
  // Cleveland (Cuyohoga county) = 035
  // Cincy (Hamiliton) = 061
// "Oklahoma", "40"]
// "Oregon", "41"]
// "Pennsylvania", "42"]
// "Rhode Island", "44"]
// "South Carolina", "45"]
// "South Dakota", "46"]
// "Tennessee", "47"]
// "Texas", "48"]
 // "Utah", "49"]
// "Vermont", "50"]
// / "Virginia", "51"]
// "Washington", "53"]
//"West Virginia", "54"]
// "Wisconsin", "55"]
// "Wyoming", "56"]