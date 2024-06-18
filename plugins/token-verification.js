// plugins/token-verification.js

import Cookies from 'js-cookie'
import request from 'superagent';

export default ({ app }, inject) => {

  inject('runTokenVerification', async () => {
    let token = Cookies.get('tokenJwt')
    if (token === undefined || token === '' || token === null) {
      console.log('Start token verification'); // !!!
      await app.router.push('/');
      console.log('Этот скрипт выполняется на всех страницах!: ' + token); // !!!
    } else {
      const url = 'http://localhost:8080/authentication/authorization';

      const headers = {
        'requestRoute': 'users',
        'requestMethod': 'GET'
      };

      const queryParams = {
        token: token
      };

      try {
        const response = await request.post(url)
          .set(headers)
          .query(queryParams)
          .send({});
      } catch (error) {
        await app.router.push('/');
        if (!error.response) {
          console.error('Ошибка при выполнении запроса:', error);
        }
      }
    }
  });
}
