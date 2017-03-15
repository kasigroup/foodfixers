import 'whatwg-fetch';

class ApiPostRequest {
  static login(url) {
    console.log("hej")
    const request = new Request(`http://api.kasigroup.se/account_token`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: {email: 'foo@bar.com', password: 'foobar'}})
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ApiPostRequest;
