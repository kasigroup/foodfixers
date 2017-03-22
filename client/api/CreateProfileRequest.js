import 'whatwg-fetch';

class ApiCreateProfileRequest {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`, 'Content-Type': 'application/json'}
  };

  static create(url,values) {
    console.log(values)
    const headers = this.requestHeaders();
    const request = new Request(`http://api.kasigroup.se/${url}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({profile: values})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(errors => {
      return errors;
    });
  }
}

export default ApiCreateProfileRequest;
