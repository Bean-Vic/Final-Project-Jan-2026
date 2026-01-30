import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { loggerMiddleware } from './middleware';

// store 的作用就是用来初始化还有定义我们的 redux store的
export const store = configureStore({
    reducer,
    devTools: {
        name: '人民的 ReduxStore'
    },
    // getDefaultMiddleware 返回默认的中间件，返回的结果类型为 array, 如果我们没有中间件，那返回的值就是 []
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware) // [] <- loggerMiddleware  ==> [loggerMiddleware]
});