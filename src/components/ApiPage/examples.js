const curlExample = `curl -H "Content-Type: application/json" \\
-X POST -d '{"query":"query { myField }"}' \\
http://localhost:3000/apis/d1e9edcd-0a73-40b6-bc80-19903a2ded11/query
`;

const jsExample = `fetch('http://localhost:3000/apis/d1e9edcd-0a73-40b6-bc80-19903a2ded11/query', {
  method: 'post',
  mode: 'cors',
  body: JSON.stringify({
    query: 'query { myField }'
  }),
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
});
`;

export {
  curlExample,
  jsExample
};

