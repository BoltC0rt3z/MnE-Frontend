import jwtDecode from 'jwt-decode';
import { errorMessage, successMessage } from './toastMessage';

class AuthenticationHelper {
  static logoutUser = (history: any, msg?: string) => {
    localStorage.removeItem('jwt-token');
    history.push('/');
    if (msg) {errorMessage(msg); }
    if (!msg) {successMessage('Logout Successful'); }
    if (!msg) {localStorage.removeItem('url'); }
  }

  static decodeToken() {
    const token = localStorage.getItem('jwt-token');
    return token ? jwtDecode(token) : null;
  }

  static isExpired(expireTimeInSec: any) {
    if (expireTimeInSec) {
      const now = new Date();
      const nowInSec = Math.floor(now.getTime() * 0.001); // Convert date to sec
      return nowInSec > expireTimeInSec;
    }
    return false;
  }
}

export default AuthenticationHelper;
