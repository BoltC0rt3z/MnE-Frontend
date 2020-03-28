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

  static editUser(userData: any, userId: string) {
    return axios.patch(`${baseUrl}/users/${userId}`, userData);
  }

  static deleteUser(userId: string) {
    return axios.delete(`${baseUrl}/users/${userId}`);
  }
}

export default UserAPI;
