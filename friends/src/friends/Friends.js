import React, { Component } from 'react';
import axios from 'axios';

export default class Friends extends React.Component {
    constructor()
    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
}