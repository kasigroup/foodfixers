import 'whatwg-fetch';
import { api } from '../globalFunctions/helpers';

class ApiRegisterRequest {
  static register(url,values) {
    console.log("hejsan")
    const request = new Request(`${api}${url}`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({account: values})
    });
    return fetch(request).then((response) => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  }
}

export default ApiRegisterRequest;
