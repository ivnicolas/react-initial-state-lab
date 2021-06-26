import React from 'react';

class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {secondsLeft: props.initialCount}
    }
    render(){
        let message; 
        if(this.state.secondsLeft !== 0){
            message = <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>
        } else{
            message = <h2>Boom!</h2>
        }
        return (
           <div>
               {message}
           </div>
        )
    }
} export default Bomb ;
