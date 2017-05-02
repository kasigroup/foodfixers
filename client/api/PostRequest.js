import 'whatwg-fetch';

class ApiPostRequest {
  static login(url,values) {
    console.log("hej")
    const request = new Request(`https://api.kasigroup.se/${url}`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: values})
    });
    return fetch(request).then(response => {
      if (response.status === 201) {
        return response.json();
      }
    }).catch(error => {
      return error;
    });
  }
}

export default ApiPostRequest;
