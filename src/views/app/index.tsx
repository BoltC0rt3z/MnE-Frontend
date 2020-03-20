import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../redux/store';
import Routes from '../../routes';
import styles from './App.module.scss';

const Wrapper = Fragment;
const App: React.FC = () => (
  <Wrapper>
    <div className={styles.app_container}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  </Wrapper>
);

export default App;
