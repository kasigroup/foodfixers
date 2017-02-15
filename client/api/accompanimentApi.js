import 'whatwg-fetch';

class AccompanimentApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllAccompaniments() {
    const headers = this.requestHeaders();
    const request = new Request('http://api.kasigroup.se/accompaniments', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      console.log("request works")
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default AccompanimentApi;
