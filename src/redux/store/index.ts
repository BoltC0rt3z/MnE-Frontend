import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSagas from '../middleWares';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const tool =
  // tslint:disable-next-line: no-string-literal
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
const composeEnhancers = tool;
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSagas);
export default store;
