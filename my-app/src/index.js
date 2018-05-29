import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import configurateStore from './store';

// const store = configurateStore();
const render = (Component) => {
  ReactDOM.render(
    // <Provider store={store}>
    <Component />,
    // </Provider>,
    document.getElementById('root'),
  );
};

render(App);
registerServiceWorker();
