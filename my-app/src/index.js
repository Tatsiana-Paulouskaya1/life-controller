import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configurateStore from './store';
import { Provider } from 'react-redux';

const store = configurateStore();
const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
    document.getElementById('root')
    );
};

render(App);
registerServiceWorker();
