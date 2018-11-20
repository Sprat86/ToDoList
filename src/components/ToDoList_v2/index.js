import React, {Component} from 'react'
import './styles.css'


class ToDoListV2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            valueInput: ''
        };
        this.handelChangeInput = this.handelChangeInput.bind(this);
        this.addItemToList = this.addItemToList.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    };
    addItemToList() {
        let {valueInput, list} = this.state;
        this.setState({
            list: [...list, valueInput],
            valueInput: ''
        })
    };
    handelChangeInput(e) {
        this.setState({
            valueInput: e.target.value
        })
    };
    handleRemove(index) {
        let {list} = this.state;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    };
    render() {
        let {valueInput, list} = this.state;
        return <div className='wrapper_2'>
            <input
                value={valueInput}
                onChange={this.handelChangeInput}
                type='text'
                placeholder="ToDoListV2"/>
            <button className='add' onClick={this.addItemToList}>Add</button>
            <ol>
                {
                    list.map((item, index) => {
                        return <li
                            key={index}
                        >{item}
                            <button
                                className="del"
                                onClick={this.handleRemove.bind(undefined, index)}
                            >Delete
                            </button>
                        </li>
                    })
                }
            </ol>
        </div>
    }
}

export default ToDoListV2