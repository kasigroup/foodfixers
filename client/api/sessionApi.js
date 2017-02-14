import 'whatwg-fetch'; 

class SessionApi {
  static login(credentials) {
    const request = new Request('http://api.kasigroup.se/account_token', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request).then(response => {
      console.log(response.status + " status");
      if (response.status === 201) {
        return response.json();
      }
    }).catch(error => {
      return error;
    });
  }
}

export default SessionApi;
