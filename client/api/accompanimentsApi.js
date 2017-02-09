class AccompanimentsApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllAccompaniments() {
    const headers = this.requestHeaders();
    const request = new Request('http://api.kasigroup.se/v1/accompaniments', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

export default AccompanimentsApi;
