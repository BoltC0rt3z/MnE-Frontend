import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '../../customStyles/toast.scss';
import store from '../../redux/store';
import Routes from '../../routes';
import './App.scss';

const Wrapper = Fragment;
const App: React.FC = () => (
  <Wrapper>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
  </Wrapper>
);

export default App;
