import React, {useState} from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'
import './index.css'

function Todo() {
    const [todos, setTodos] = useState([])

    function addTodo(val) {
        setTodos([...todos, {
            id: Date.now(),
            completed: false,
            val
        }])
    }

    function changeCompleted(id, completed) {
        todos.forEach(item => {
            if(item.id === id) {
                item.completed = completed
            }
        })

        setTodos([...todos])
    }

    function changeAllCompleted(completed) {
        todos.forEach(item => {
            item.completed = completed
        })

        setTodos([...todos])
    }

    function remove(id) {
        setTodos(todos.filter(item => item.id !== id))
    }

    function changeVal(id, val) {
        todos.forEach(item => {
            if(item.id === id) {
                item.val = val
            }
        })

        setTodos([...todos])
    }

    function removeCompleted() {
        setTodos(todos.filter(item => !item.completed))
    }

    return (
        <div id="todoapp">
            <Header addTodo={addTodo} />
            <Main
                todos = {todos}
                changeCompleted = {changeCompleted}
                remove = {remove}
                changeVal = {changeVal}
                changeAllCompleted = {changeAllCompleted}
            />
            <Footer
                todos = {todos}
                removeCompleted = {removeCompleted}
            />
        </div>
    )
}

export default Todo