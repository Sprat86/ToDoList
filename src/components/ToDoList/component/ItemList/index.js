import React, {Component} from 'react'

// import ToDoList from '../../../../components/ToDoList'

class ItemList extends Component {
    render() {
        return (
            <li>
                {this.props.text}
                <button className='del'
                        onClick={this.props.handleRemove}
                >
                    Delete
                </button>
            </li>
        )
    }
}

export default ItemList