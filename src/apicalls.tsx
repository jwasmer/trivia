const getData = (): Promise<any> => {
  return fetch('https://countries.trevorblades.com/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query continents {
          continents {
              code 
            	name
            countries { 
              code
              name
              emoji
              capital
              currency
              states {
                name
              }
              languages {
                name
                native
              }
            } 
          }
        }
      `
    })
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      } else {
        return response.json()
      }
    })
}

export default getData 