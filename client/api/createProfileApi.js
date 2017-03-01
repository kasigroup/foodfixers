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

      const errorFirst = document.getElementById('error-first_name');
      const errorLast = document.getElementById('error-last_name');

      console.log(response.status);

      if (response.status === 201) {
         console.log("do something")
         return response.json();
      }else {
        const errorResponse = response.json().then(function(error) {
          errorFirst.innerHTML = error.first_name ? error.first_name : "";
          errorLast.innerHTML = error.last_name ? error.last_name : "";
        });
      }      
    }).catch(errors => {
      return errors;
    });
  }
}

export default CreateProfileApi;
