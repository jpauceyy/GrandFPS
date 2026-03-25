import * as https from 'https';
import * as fs from 'fs';

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
