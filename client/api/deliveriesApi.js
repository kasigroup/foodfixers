import 'whatwg-fetch';

class GetLocationApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getDeliveries(url) {
    const headers = this.requestHeaders();
    const request = new Request(`http://api.kasigroup.se/deliveries/${url}`, {
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

export default GetLocationApi;
