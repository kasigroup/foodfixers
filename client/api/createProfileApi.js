import 'whatwg-fetch';
import { browserHistory } from 'react-router';

class CreateProfileApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`, 'Content-Type': 'application/json'}
  };

  static createProfile(profile) {
    const headers = this.requestHeaders();
    const request = new Request('http://api.kasigroup.se/profile', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({profile})
    });


    return fetch(request).then(response => {
      response.text().then(function(text) {
        var jsonPretty = JSON.stringify(JSON.parse(text),null,2);
        console.log(jsonPretty);
      });
      return response.json();
    }).catch(errors => {
      return errors;
    });
  }
}

export default CreateProfileApi;
