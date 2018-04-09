$.getJSON('//freegeoip.net/json/?callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
});
