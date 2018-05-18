import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './Reducers';
import 'tachyons';

const logger = createLogger();
//const store = createStore(searchRobots, applyMiddleware(logger))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(searchRobots, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));
registerServiceWorker();
