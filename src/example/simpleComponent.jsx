import React from 'react';


export const HelloWorldComponent = (props) => {
    // console.log(props);
    return (
        <h1>Hello World {props.name}</h1>
    );
};

//类组件 => class component
export class HelloWorldClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'John Doe',
            inputValue: '',
        };
    }

    handleClick = () => {
        this.setState({ name: 'Bean' });
    }

    render() {
        // this.setState({
        //     name: 'Bean',
        // });
        return (
            <>
                <h1>Hello World from Class Component, State: {this.state.name}</h1>
                <button onClick={this.handleClick}>
                    <div>按钮 div</div>
                    <div>div 2</div>
                </button>

                <input
                    placeholder="样板文字"
                    onChange={(event) => this.setState({name: 'John Doe', inputValue: event.target.value })}
                    value={this.state.inputValue}
                    type="number"
                />
            </>

        );
    }
}

export function NestedButtons() {
    const handleOuterClick = () => {
        console.log('外层 div 被点击');
    };

    const handleInnerClick = (e) => {
        e.stopPropagation(); // 阻止事件冒泡到外层
        console.log('按钮被点击');
    };

    return (
        <div onClick={handleOuterClick}>
            <button onClick={handleInnerClick}>点我</button>
        </div>
    );
}

