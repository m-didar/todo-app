import React, { Component } from "react";
import './item-add-form.css';

export default class ItemAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            label: ''
        };
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit} >
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done?"
                       value={this.state.label} />
                <button className="btn col-3 btn-outline-warning">
                    Add Item
                </button>
            </form>
        );
    }
}
