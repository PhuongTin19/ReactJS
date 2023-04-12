import React from "react";

class MyComponent extends React.Component {

    /**
    *  JSX -> return block
    *  <React.Fragment>(old version) -> This card is like an invisible div to solve the React block principle.
    *  <></> (React 16.2.0 - released 11/2017) -> shorter and more convenient
    *   
    *  State is a feature in React that helps store and manage variable values over time and manage state in application of you
    */

    state = {
        channel: 'IT Alone',
        number: 1,
        name: 'aguero'
    }
    //
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    //

    handleClickButton = () => {
        console.log('hit the button');
        alert('click me')
    }
    //
    render() {
        let name = 'tin';

        return (
            // <React.Fragment> //version < 16.2.0  
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello my component, My name is {name}<br></br>
                </div>
                <div className="second">
                    i use state, my channel is {this.state.channel}.{this.state['name']}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
            // </React.Fragment>
        )
    }

}
/*Dùng default để export 1 component, dùng { } export nhiều component*/
export default MyComponent;