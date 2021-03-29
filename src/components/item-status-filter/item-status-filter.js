import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    render() {
        const { onFilterItems, filter } = this.props;
        const buttons = this.buttons.map(({ name, label }) => {
            let classNames = "btn ";
            if (name === filter) classNames += "btn-info";
            else classNames += "btn-outline-secondary";
            return(
                <button type="button"
                        className={classNames}
                        key={name}
                        onClick={() => onFilterItems(name)}>
                    {label}
                </button>
            );
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    };
};