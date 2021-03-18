requestURL = 'http://localhost:3000/post'

function query(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  }
  return fetch(url, {
    mode: 'no-cors',
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return response.json().then((err) => {
      const e = new Error('Что-то пошло не так')
      e.data = err
      throw e
    })
  })
}
const body = {
  name: 'Vitaly',
  age: 24,
}
query('POST', requestURL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

// console.log(fetch(requestURL))
