import axios from 'axios';
import resolveBaseUrl from '.';

const baseUrl = resolveBaseUrl();

class RoleAPI {
  static fetchRoles(roleId?: any) {
    const id = roleId ? `?roleId=${roleId}` : '';
    return axios.get(`${baseUrl}/roles${id}`);
  }

  static assignUserRole(data: { roleId: number, email: string}) {
    const { roleId, email } = data;
    return axios.post(`${baseUrl}/roles/user?roleId=${roleId}`, { email });
  }

  static deleteUserRole(data: { roleId: number, email: string}) {
    const { roleId, email } = data;
    return axios.delete(`${baseUrl}/roles/user?roleId=${roleId}`, { data: { email } });
  }
}

export default RoleAPI;
