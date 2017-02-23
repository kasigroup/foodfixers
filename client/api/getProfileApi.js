import 'whatwg-fetch';

class GetProfileApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getProfile() {
    const headers = this.requestHeaders();
    const request = new Request('http://api.kasigroup.se/profile', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      console.log("getting profile")
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default GetProfileApi;
