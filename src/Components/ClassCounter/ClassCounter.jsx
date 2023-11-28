import React from 'react';
export class ClassCounter extends React.Component {
    state = {
        count: 0
    };
    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };
    render() {
        return <button onClick={this.handleClick}>count is {this.state.count}</button>;
    }
}
