import axios from 'axios';
import resolveBaseUrl from '.';

const baseUrl = resolveBaseUrl();

class UserAPI {
  static loginUser(userData: any) {
    return axios.post(`${baseUrl}/login`, userData);
  }

  static fetchUsers() {
    return axios.get(`${baseUrl}/users`);
  }
}

export default UserAPI;
