import 'whatwg-fetch';

class DishesApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllDishes() {
    const headers = this.requestHeaders();
    const request = new Request('http://api.kasigroup.se/dishes', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default DishesApi;
