import React, {Component} from 'react';

class ChangeState extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('clicked');
        // this.setState({ count: 1})
        this.setState((prevState) => {
            console.log(prevState);
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=> {this.handleClick()}}>Change!</button>
            </div>
        )
    }
}

export default ChangeState;