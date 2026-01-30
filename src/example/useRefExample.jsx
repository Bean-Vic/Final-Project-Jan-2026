import React, { useRef } from 'react';

export const UseRefToAccessDOM = () => {
    const ref = useRef();

    const handleClick = () => {
        // ref长什么样？
        /*
         { current: undefined }
         */
        // 重置输入框的值
        ref.current.value = '';
    };
    return (
        <>
            <h1>use ref example</h1>
            <input ref={ref} />
            <button onClick={handleClick}>重置输入值</button>
        </>
    );
}