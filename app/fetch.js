const https = require('https');

https.get('https://21st.dev/community/components/svg-ui/cpu-architecture/default', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Look for nextjs data or code blocks
    const match = data.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);
    if (match) {
      const json = JSON.parse(match[1]);
      console.log(JSON.stringify(json, null, 2).substring(0, 1000));
    } else {
      console.log("No NEXT_DATA found");
      // maybe it's in a different script tag or just raw HTML
      console.log("Data length:", data.length);
      const codeMatch = data.match(/```tsx([\s\S]*?)```/);
      if (codeMatch) {
        console.log(codeMatch[1]);
      } else {
        const codeMatch2 = data.match(/"code":"(.*?)"/);
        if (codeMatch2) {
          console.log(codeMatch2[1].substring(0, 1000));
        }
      }
    }
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
