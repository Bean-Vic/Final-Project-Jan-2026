// provider 的作用就是作为一个 parent component，将 redux store 传递给所有需要的子组件
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'
import { RickAndMorty} from './rick-and-morty-redux';

export const Entrance = () => {
    return (
        <Provider store={store}>
            // 这里和 context 很像，在这个 provider 下面的所有的组件都可以获取到 store
            <div>我们的组件写在这里</div>
            <RickAndMorty/>
        </Provider>
    );
}