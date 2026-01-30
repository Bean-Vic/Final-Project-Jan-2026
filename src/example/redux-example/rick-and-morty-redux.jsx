import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_ALL_CHARACTERS } from "./actions";
import { getAllCharacters } from './reducer';

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
    const dispatch = useDispatch(); // 返回的是一个叫做 dispatch 的函数！
    const allCharacters = useSelector(getAllCharacters); // 内部的实现就是帮助我们将 state 传入我们写好的 selector 中

    // const [allCharacters, setAllCharacters] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character`)
            .then(response => response.json())
            .then((jsonResponse) => {


                // 如果 api 请求成功，我们会发送获取角色成功的 action
                // api请求成功，我们想把 api response 保存到 redux store中
                console.log('来自组件，进行了 action 的广播')
                dispatch({ type: FETCH_ALL_CHARACTERS, data: jsonResponse.results })
            });
    }, []);
    const allFemaleCharacters = useMemo(() => {
        return allCharacters.filter(character => character.gender === 'Female');
    }, [allCharacters]);

    console.log('所有的女性角色:', allFemaleCharacters);

    return (
        <>
            <h1>Rick and Morty</h1>
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
        </>
    );
}