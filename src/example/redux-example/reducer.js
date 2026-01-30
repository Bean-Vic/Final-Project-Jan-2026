import { FETCH_ALL_CHARACTERS } from './actions';

// 初始化的状态
const initialState = {
    apiResult: null,
    allCharacters: [],
};


// reducer应该是纯函数
// 这两个参数相当于使用 redux 的样板（固定）代码
export const reducer = ( state = initialState, action ) => {
    console.log('来自 reducer，redux store接受到的 action：', action);
    // 通过 action 的种类，reducer 来决定进行什么样的操作
    switch (action.type) {
        case FETCH_ALL_CHARACTERS:
            const data = action.data;
            return {
                ...state,
                allCharacters: data,
            }

        default:
            return state;
    }
}

// selector: 也是一个帮助函数，用于从 redux store 中选择我们需要的数据
export const getAllCharacters = (state) => state.allCharacters;