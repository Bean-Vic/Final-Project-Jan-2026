import React, { useState, useEffect, useCallback } from 'react';


const Comp = (props) => {
    console.log('Comp组件被渲染', props);
    return <div>Comp组件</div>
}


export const RickAndMorty = () => {
    const [apiResult, setApiResult] = useState(null);
    const [characterId, setCharacterId] = useState(1);
    // https://rickandmortyapi.com/api/character
    // fetch('https://rickandmortyapi.com/api/character')
    // .then(response => response.json())
    //     .then((jsonResponse) => setApiResult(jsonResponse));
    const cachedFunction = useCallback(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => response.json())
            .then((jsonResponse) => setApiResult(jsonResponse));

        console.log('缓存的函数已经执行')
    }, [characterId]);

    const fetchFunction = () => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => response.json())
            .then((jsonResponse) => setApiResult(jsonResponse));

        console.log('fetch函数已经执行')
    }

    const exampleFunction = useCallback(() => {
        console.log('exampleFunction被调用')
    }, []);

    // cachedFunction();


    useEffect(() => {
        // fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        //     .then(response => response.json())
        //     .then((jsonResponse) => setApiResult(jsonResponse));
        // cachedFunction();
        fetchFunction();
    }, [characterId, cachedFunction]);

    // 1.添加一个 controlled input并且要允许用户自己添加 charID
    // 2. 当 characterId发生改变的时候，我们要重新 call api确保拿到最新数据
    // 3. 将已经更新的数据渲染到屏幕上


    console.log(apiResult);
    return (
        <>
            <h1>Rick and Morty</h1>
            <div>
                Please enter the character id:
                <input type="number"
                       value={characterId}
                       onChange={e=> setCharacterId(e.target.value)}
                />
            </div>
            <div>
                <img src={apiResult?.image} alt="icon" />
                <div>Name: {apiResult?.name}</div>
                <div>Gender: {apiResult?.gender}</div>
            </div>
            <Comp callback={exampleFunction}/>
        </>
    );
}