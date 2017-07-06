import 'whatwg-fetch';

class ApiRequest {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllItems(url) {
    const headers = this.requestHeaders();
    const request = new Request(`https://api.iskall.io/${url}`, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      if (response.status === 404) {
        return response.status
      }
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ApiRequest;
