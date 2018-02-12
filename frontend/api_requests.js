export const fetchData = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://api.sportradar.us/nfl-t1/teams/2016/REG/standings.json?api_key=hjyu8hqymwz2umwz29zrf6pn'
  });
};
