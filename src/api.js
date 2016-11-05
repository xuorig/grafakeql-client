const GRAFAKEQL_ENDPOINT = 'http://localhost:3000/apis'

function post(endpoint, body) {
  return fetch(endpoint, {
    method: 'post',
    mode: 'cors',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
}

function commitSchema(schemaDef) {
  return post(GRAFAKEQL_ENDPOINT, {
    schema_definition: schemaDef
  });
}

export {
  commitSchema
}