import React from "react"
import './styles.css'

const TodoItem = ({text, done, handleRemove}) => (
    <li>
        {text}
        <button className="del" onClick={handleRemove}>Delete</button>
    </li>
);

class ToDoListV3 extends React.Component {
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
    };
    handelChangeInput = (e) => {
        this.setState({
            valueInput: e.target.value
        })
    };

    handleRemove = index => this.setState({
        list: this.state.list.filter((item, i) => i !== index)
    });

    render() {
        return (
            <div className='wrapper_3'>
                <input onChange={this.handelChangeInput} value={this.state.valueInput} placeholder="ToDoListV3"/>
                <button className='add' onClick={this.addItemToList}>Add</button>
                <ol>
                    {this.state.list.map((item, index) => (
                        <TodoItem
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

export default ToDoListV3