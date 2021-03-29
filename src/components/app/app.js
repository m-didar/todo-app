import React, { Component } from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";
import axios from "axios"
import './app.css';

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todoData: null,
            searchLabel: '',
            filterType: 'all'
        }
    };

    componentDidMount() {
        axios.get('http://localhost:5000/todos/')
            .then(res => {
                this.setState({
                    todoData: res.data.map(todo => this.createTodoItem(todo))
                })
            })
    }

    createTodoItem(todo) {
        const { name, important, done, _id } = todo
        return {
            label: name,
            important,
            done,
            id: _id
        }
    }

    deleteItem = (id) => {
        console.log(id)
        axios.delete("http://localhost:5000/todos/" + id)
            .then(res => console.log(res.data))

        this.setState({
            todoData: this.state.todoData.filter(el => el.id !== id)
        })
    };

    addItem = (text) => {

        const todoObj = {
            name: text,
            important: false,
            done: false
        }

        axios.post("http://localhost:5000/todos/add", todoObj)
            .then(res => {
                console.log(res.data)
                todoObj._id = res.data._id
            })
        const todoItem = this.createTodoItem(todoObj)
        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, todoItem]
            }
        })
    };

    toggleProperty(arr, id, propName) {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
    }

    onToggleDone = (id) => {
        const { todoData } = this.state
        const todoItem = todoData.find(el => el.id == id)
        const { done, important } = todoItem

        axios.post("http://localhost:5000/todos/update/" + id, {
            done: !done,
            important,
        })
            .then(res => console.log(res.data))

        const newArr = this.toggleProperty(todoData, id, 'done')
        this.setState({
            todoData: newArr
        })
    };

    onToggleImportant = (id) => {
        const {todoData} = this.state
        const todoItem = todoData.find(el => el.id == id)
        const done = todoItem.done
        const important = todoItem.important

        axios.post("http://localhost:5000/todos/update/" + id, {
            done,
            important: !important
        })
            .then(() => res => console.log(res.data))

        const newArr = this.toggleProperty(todoData, id, 'important')
        this.setState({
            todoData: newArr
        })
    };

    onSearchChange = (label) => {
        this.setState({
            searchLabel: label
        });
    };

    filterItems = (filterType) => {
        this.setState({filterType});
    }

    render() {
        const { todoData, searchLabel, filterType } = this.state;
        const filteredList = todoData ? todoData
            .filter((item) => {
                console.log(item)
                return item.label.toLowerCase().includes(searchLabel.toLowerCase())
            })
            .filter((item) => {
                if (filterType === 'all') return 1;
                else if (filterType === 'active') return !item.done;
                else return item.done;
            }) : null;
        const doneCount = todoData ? todoData.filter((el) => el.done).length : 0;
        const todoCount = todoData ? todoData.length - doneCount : 0;
        return(
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter onFilterItems={this.filterItems} filter={filterType} />
                </div>
                {todoData ?
                    <TodoList
                        todos={filteredList}
                        onDeleted={this.deleteItem}
                        onToggleImportant={this.onToggleImportant}
                        onToggleDone={this.onToggleDone}
                    />
                    : <div>Loading...</div>
                }
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    };
};
