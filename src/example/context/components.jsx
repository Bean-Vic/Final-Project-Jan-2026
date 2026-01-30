import React, { useContext } from 'react';
import { context } from './context';



export const ConsumerComponent = () => {
    // 用于消费 context
    // 可以在这里访问我们 context 的值
    const value = useContext(context)
    return (
        <div>这里是 ConsumerComponent, context的值是: {value}</div>
    )
}

export const ProviderComponent = () => {
    // 用于提供 context 的值
    // const [state, setter] == useState();
    return (
        <>
            <h1>Provider Component</h1>
            <context.Provider value="xiaohui">
                <h2>
                    第一层
                    <h3>
                        第二层
                        <h4>
                            第三层
                            <ConsumerComponent />
                        </h4>
                    </h3>
                </h2>
            </context.Provider>
            {/*<ConsumerComponent />*/}
        </>
    );
}

export const add = (a , b) => a+b;
// 1+1 = 2 it(1+1 should equal to 2)
// 2+3 = 5 it (2+3 should equal to 5
// 10+100 = 110
