import React, {Component} from 'react'
import './styles.css'
import ItemList from './component/ItemList'

class ToDoList extends Component {
    // Создание переменной с массивом, в который будет добавляться информация.
    state = {
        list: [],
        valueInput: ''
    };
    addItemToList = () => {
        if (this.state.valueInput) {
            this.setState({
                list: [...this.state.list, this.state.valueInput],
                valueInput: ''
            })
        }
        // console.log(this.state.list);
    };
    handelChangeInput = (e) => {
        // e.preventDefault();
        console.log(e.target.value);
        this.setState({
            valueInput: e.target.value
        })
    };
    handleRemove = (index) => {
        const list = this.state.list;
        this.setState({
            list: [...list.slice(0,index), ...list.slice(index+1)]
        });
    };
    render() {
        return (
            <div className='wrapper_1'>
                <span className="input">
                <input
                    value={this.state.valueInput}
                    onChange={this.handelChangeInput}
                    type='text'
                    placeholder="ToDoListV1"
                />
                </span>
                <button
                    className='add'
                    onClick={this.addItemToList}
                >
                    Add
                </button>
                <ol>
                    {this.state.list.map((item, index) => (
                            <ItemList
                                key={index}
                                text={item}
                                handleRemove={() => this.handleRemove(index)}
                            />
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default ToDoList