import React from 'react';


export const HelloWorldComponent = (props) => {
    console.log(props);
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
                <button onClick={this.handleClick}>按钮</button>
            </>

        );
    }
}

