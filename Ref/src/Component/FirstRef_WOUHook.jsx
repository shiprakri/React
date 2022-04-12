import React from "react";
import ReactDOM from "react-dom";

class FirstRef extends React.Component
{
    constructor()
    {
        super();
        this.state = { count: 0};
    }
    updateBYUsingRefs(e)
    {
        this.setState({ count: this.refs.counterRef.value});
    }
    render()
    {
        return(
            <div>
                Counts <input type="text" ref="counterRef" onChange= {this.updateBYUsingRefs.bind(this)}/>
                <br/>
                <p>{this.state.count}</p>
            </div>
        );
    }
}
ReactDOM.render(<FirstRef/>, document.getElementById('root'));

export default FirstRef