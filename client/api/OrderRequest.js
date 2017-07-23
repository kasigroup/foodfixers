import 'whatwg-fetch';
import { api } from '../globalFunctions/helpers';

class ApiOrderRequest {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`, 'Content-Type': 'application/json'}
  };

  static sendOrder(order, token) {
    const headers = this.requestHeaders();
    const request = new Request(`${api}orders`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({order, stripe_token: token.id})
    });


    return fetch(request).then(response => {
      if (response.status === 200 || 201) {
        response.text().then(function(text) {
          console.log(text);
        });
        return response.json();
      }else {
        console.log("Bad request")
        console.log(response.status);
      }

    }).catch(errors => {
      return errors;
    });
  }
}

export default ApiOrderRequest;
