class SessionApi {
  static login(credentials) {
    const request = new Request('http://api.kasigroup.se/v1/account_token', {
      method: 'POST',
      mode: 'no-cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: { "email": "foo@bar.com", "password": "foobar" }})
    });


    return fetch(request).then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SessionApi;
