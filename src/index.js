import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/sass/index.scss';
import App from 'src/components/App';
import { Provider } from 'react-redux';
import store from 'src/store';
import { HelloWorldComponent, HelloWorldClassComponent } from 'src/example/simpleComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<App />*/}
            <HelloWorldComponent name="Ana" />
            <HelloWorldClassComponent name="Bean"/>
        </Provider>
    </React.StrictMode>,
);
