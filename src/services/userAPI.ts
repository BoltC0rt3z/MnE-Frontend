import axios from 'axios';
import resolveBaseUrl from '.';

const baseUrl = resolveBaseUrl();

class UserAPI {
  static loginUser(userData: any) {
    return axios.post(`${baseUrl}/login`, userData);
  }
}

export default UserAPI;
