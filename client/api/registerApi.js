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
      response.text().then(function(text) {
        var jsonPretty = JSON.stringify(JSON.parse(text),null,2);
        console.log(jsonPretty);
      });
      if (response.status === 201) {
        console.log("Yay du skapade en användare")
        browserHistory.push('/login');
        return response.json();
      }
    }).catch(errors => {
      return errors;
    });
  }
}

export default RegisterApi;
