import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm/index';
import AuthenticationHelper from '../../helpers/authentication';
import { loginUser } from '../../redux/actionCreator/userActions';
import { UserStateInterface } from '../../redux/reducers/typed';

import './Login.scss';

interface LoginDataInterface {
  email: string;
  password: string;
}

interface Props {
  loginUserAction: (data: any) => void;
  user: UserStateInterface;
  history: any;
}

const Login: React.FC<Props> = props => {
  const { loginUserAction, user, history } = props;
  const { isLoading } = user;

  useEffect(() => {
    authenticated();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const handleLogin = (data: LoginDataInterface ) => {
    loginUserAction({ history, ...data});
  };

  const checkTokenExpiration = useCallback((exp: any, userInfo: any) => {
    if (exp && !AuthenticationHelper.isExpired(exp) && userInfo) {
      const url = localStorage.getItem('url');
      history.push(url || '/dashboard');
      localStorage.removeItem('url');
    } else {
      localStorage.removeItem('jwt-token');
    }
    return true;
  }, [history]);

  const token = localStorage.getItem('jwt-token');

  const authenticated = useCallback(() => {
    if (token) {
      const decodedToken: any = AuthenticationHelper.decodeToken();
      const { exp, userInfo } = decodedToken;
      return checkTokenExpiration(exp, userInfo);
    }
    return history.push('/');
  }, [token, history, checkTokenExpiration]);

  return (
    <div className="login-page">
      <div className="login-page__form">
        <LoginForm handleLogin={handleLogin} isLoading={isLoading} />
      </div>
    </div>
  );
};

export const mapStateToProps = ({ user }: any) => ({
  user,
});

const actionCreators = {
  loginUserAction: loginUser,
};

export default connect(mapStateToProps, actionCreators)(Login);
