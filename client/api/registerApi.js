import 'whatwg-fetch';
import { browserHistory } from 'react-router';

class RegisterApi {
  static register(account) {
    const request = new Request('http://api.kasigroup.se/account', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({account})
    });


    return fetch(request).then(response => {

      const errorEmail = document.getElementById('error-email');
      const errorPassword = document.getElementById('error-password');
      const errorPasswordConf = document.getElementById('error-password_confirmation');

      const errorResponse = response.json().then(function(error) {
        errorEmail.innerHTML = error.email ? error.email : "";
        errorPassword.innerHTML = error.password ? error.password : "";
        errorPasswordConf.innerHTML = error.password_confirmation ? error.password_confirmation : "";
      });

      if (response.status === 201) {
        browserHistory.push('/login');
        return response.json();
      }
    }).catch(errors => {
      return errors;
    });
  }
}

export default RegisterApi;
