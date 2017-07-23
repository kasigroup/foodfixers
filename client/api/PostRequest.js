import 'whatwg-fetch';
import { api } from '../globalFunctions/helpers';

class ApiPostRequest {
  static login(url,values) {
    const request = new Request(`${api}${url}`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: values})
    });
    return fetch(request).then(response => {
      if (response.status === 201) {
        return response.json();
      }
    }).catch(error => {
      return error;
    });
  }
}

export default ApiPostRequest;
