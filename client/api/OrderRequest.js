import 'whatwg-fetch';

class ApiOrderRequest {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`, 'Content-Type': 'application/json'}
  };

  static sendOrder(order) {
    const headers = this.requestHeaders();
    const request = new Request('http://api.kasigroup.se/orders', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({order})
    });


    return fetch(request).then(response => {
      response.text().then(function(text) {
        console.log(text);
      });
      console.log(response);
    }).catch(errors => {
      return errors;
    });
  }
}

export default ApiOrderRequest;
