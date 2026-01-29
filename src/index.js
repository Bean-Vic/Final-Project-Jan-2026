import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/sass/index.scss';
import App from 'src/components/App';
import { Provider } from 'react-redux';
import store from 'src/store';
// import { HelloWorldComponent, HelloWorldClassComponent, NestedButtons } from 'src/example/simpleComponent';
// import { HelloWorldFunctional } from 'src/example/functionalComponents';
// import { BaseComponent, EnhancedComponent } from 'src/example/highOrderComponent'
// import { ConditionalComponent } from 'src/example/conditionalComponent'
import { RickAndMorty } from 'src/example/rickandmorty';
import { UseRefToAccessDOM } from 'src/example/useRefExample';
import { ProviderComponent } from 'src/example/context/components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <Provider store={store}>
            {/*<App />*/}
            {/*<HelloWorldComponent name="Ana" />*/}
            {/*<HelloWorldClassComponent name="Bean"/>*/}
            {/*<NestedButtons />*/}
            {/*<HelloWorldFunctional name={1} />*/}
            {/*<EnhancedComponent name="cch" id={0} />*/}
            {/*<ConditionalComponent isAdmin={true} />*/}
            {/*<RickAndMorty />*/}
            {/*<UseRefToAccessDOM />*/}
            <ProviderComponent />
        </Provider>
    // </React.StrictMode>,
);
