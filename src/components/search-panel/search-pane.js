import React, { Component } from 'react';
import './search-panel.css';

const SearchPanel = ({ onSearchChange }) => {

    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search"
               onChange={(event) => onSearchChange(event.target.value)}/>
    );
};

export default SearchPanel;