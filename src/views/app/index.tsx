import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Routes from '../../routes';
import '../../styles/toast.scss';
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
