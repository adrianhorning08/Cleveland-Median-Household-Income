const fetchSportsData = (yr) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.sportradar.us/nfl-t1/teams/${yr}/REG/standings.json?api_key=hjyu8hqymwz2umwz29zrf6pn`
  });
};

const fetchCensusData = () => {
  return $.ajax({
    method: 'GET',
    url: `http://api.datausa.io/api/?show=geo&sumlevel=state&required=avg_wage`
  });
};

// fetchCensusData().then(res => console.log(res));

// census bureau api key bc6b73c6cce45b6fdb1a47f9f4785efbd765faa0
