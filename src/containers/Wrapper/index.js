import React, {Component} from 'react'
import './styles.css'
import ToDoList from '../../components/ToDoList'
import ToDoListV2 from '../../components/ToDoList_v2'
import ToDoListV3 from '../../components/ToDoList_v3'


class Wrapper extends Component {
    render () {
        return (
            <div className='wrapper'>
                <ToDoList/>
                <ToDoListV2/>
                <ToDoListV3/>
        </div>
        )
    }
}

export default Wrapper