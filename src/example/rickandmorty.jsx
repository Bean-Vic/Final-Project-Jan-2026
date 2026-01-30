import React, { useState, useEffect, useCallback, useMemo } from 'react';


const Comp = (props) => {
    console.log('Comp组件被渲染', props);
    return <div>Comp组件</div>
}

const Character = ({ imgSrc, name, gender }) => {
    return (
        <div>
            <img src={imgSrc} alt="icon" />
            <div>Name: {name}</div>
            <div>Gender: {gender}</div>
        </div>
    );
}


export const RickAndMorty = () => {
    const [apiResult, setApiResult] = useState(null);
    const [characterId, setCharacterId] = useState(1);
    const [allCharacters, setAllCharacters] = useState([]);
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

    const fetchAllCharacters = useCallback(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then((jsonResponse) => setAllCharacters(jsonResponse.results));
    }, []);

    console.log('所有的 characters:', allCharacters)

    useEffect(() => fetchAllCharacters(), []);

    // const fetchFunction = () => {
    //     fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    //         .then(response => response.json())
    //         .then((jsonResponse) => setApiResult(jsonResponse));
    //
    //     console.log('fetch函数已经执行')
    // }

    // const exampleFunction = useCallback(() => {
    //     console.log('exampleFunction被调用')
    // }, []);

    // cachedFunction();


    useEffect(() => {
        // fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        //     .then(response => response.json())
        //     .then((jsonResponse) => setApiResult(jsonResponse));
        // cachedFunction();
        cachedFunction();
    }, [characterId, cachedFunction]);

    // 1.添加一个 controlled input并且要允许用户自己添加 charID
    // 2. 当 characterId发生改变的时候，我们要重新 call api确保拿到最新数据
    // 3. 将已经更新的数据渲染到屏幕上


    console.log(apiResult);

    // 01/28 渲染角色表，将前 20个角色渲染成表格
    const allFemaleCharacters = useMemo(() => {
        return allCharacters.filter(character => character.gender === 'Female');
    }, [allCharacters]);

    console.log('所有的女性角色:', allFemaleCharacters);

    return (
        <>
            <h1>Rick and Morty</h1>
            {/*<div>*/}
            {/*    Please enter the character id:*/}
            {/*    <input type="number"*/}
            {/*           value={characterId}*/}
            {/*           onChange={e=> setCharacterId(e.target.value)}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<Character imgSrc={apiResult?.image} name={apiResult?.name} gender={apiResult?.gender} />*/}
            <>
                {allFemaleCharacters.map((character, index) => (
                    <Character
                        key={index}
                        imgSrc={character.image}
                        name={character.name}
                        gender={character.gender}
                    />
                ))}
            </>
            {/*<Comp callback={exampleFunction}/>*/}
        </>
    );
}