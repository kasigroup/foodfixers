import 'whatwg-fetch';

class ApiRegisterRequest {
  static register(url,values) {
    console.log("hejsan")
    const request = new Request(`https://api.iskall.io/${url}`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({account: values})
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ApiRegisterRequest;
