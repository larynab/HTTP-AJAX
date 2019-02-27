import React from 'react';
import axios from 'axios';

import Afriend from './Afriend';
import FriendCard from './FriendCard'

export default class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/friends')
        .then(res => {
            this.setState( () =>({friends: res.data}));
        })    
        .catch(err => console.log(err))
    }
    addFriend = e => {
        e.preventDefault();
        console.log(e.target);
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
            };
        this.setState({
            friends: [...this.state.friends, newFriend],
            name: '',
            age: '',
            email: ''
        });
    };

    handleChanges = e => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {

        return (
            <div>
                <h1>Friends</h1>
                <div>
                    {this.state.friends.map(friends => (
                    <Afriend key={friends.id} friends={friends} />
                    ))}
                </div>
                    <FriendCard
                        addFriend={this.addFriend}
                        name={this.state.name}
                        handleChanges={this.handleChanges}
                        email={this.state.email}
                        age={this.state.age}
                    />
            </div>
        );
    }
}

