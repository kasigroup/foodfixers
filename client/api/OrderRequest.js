import 'whatwg-fetch';

class ApiOrderRequest {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`, 'Content-Type': 'application/json'}
  };

  static sendOrder(order, token) {
    const headers = this.requestHeaders();
    const request = new Request('https://api.kasigroup.se/orders', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({order, stripe_token: token.id})
    });


    return fetch(request).then(response => {
        response.text().then(function(text) {
          console.log(text);
        });
    }).catch(errors => {
      return errors;
    });
  }
}

export default ApiOrderRequest;
