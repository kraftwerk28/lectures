'use strict';

const https = require('https');

const url = 'https://api.rozklad.org.ua/v2/groups/ip-84';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; console.log(data); });
  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});
