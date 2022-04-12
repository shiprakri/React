import React from "react";
import  ReactDOM from "react-dom";

class SecondRef extends React.Component
{
    constructor()
    {
        super();
        this.state = { count: ""};
    }
    updateCounteRef(e)
    {
        this.setState({ count: this.counterRef.value});
    }
    render()
    {
        return(
            
                <div>
                Counts <input type="text" ref={(call_back) => {this.counterRef = call_back}} onChange ={this.updateCounteRef.bind(this)}/>
                <br/>
                <em>
                    {this.state.count}
                </em>
                </div>
        );
    }
}
ReactDOM.render(< SecondRef />, document.getElementById('root'));
export default SecondRef;
