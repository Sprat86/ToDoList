import React, {Component} from 'react';
import './App.css';
import MyHeader from './containers/MyHeader'
import Wrapper from './containers/Wrapper'
import ButtonChange from './components/ButtonChange'


class App extends Component {
    render() {
        return (
            <div className='App'>
                <MyHeader/>
                my react App!
                <ButtonChange/>
                <Wrapper/>
            </div>
        );
    }
}

export default App;
