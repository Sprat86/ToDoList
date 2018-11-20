import React, {Component} from 'react'
import './styles.css'

class ButtonChange extends Component {
    state = {
      buttonValue: 'Click me',
    };
    changeValueButton = () => {
        this.setState({
           buttonValue: 'Click happened',
            className: 'clicked'
        })
    };
    render(){
        return(
            <button
                className= 'changeButton'
                onClick={this.changeValueButton}
                ref='buttonChange'
            >
                {this.state.buttonValue}
            </button>
        )
    }
}

export default ButtonChange