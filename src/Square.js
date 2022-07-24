import React from "react";

import "./App.css"

class Square extends React.Component{
    render(){
        return(
            
            <button className={`square square${this.props.number}`}
            onClick={() => this.props.onClick()}>
                    <p>{this.props.value}</p>
             </button>
        )
    }
}



export default Square