const https = require('https');
const fs = require('fs');

https.get('https://21st.dev/api/components/efferd/bg-pattern/default', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('output.json', data);
    console.log('done');
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
