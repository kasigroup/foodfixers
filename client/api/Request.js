import 'whatwg-fetch';

class ApiRequest {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllItems(url) {
    const headers = this.requestHeaders();
    const request = new Request(`http://api.kasigroup.se/${url}`, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ApiRequest;
