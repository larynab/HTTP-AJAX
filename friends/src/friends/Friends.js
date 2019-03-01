import React from 'react';
import axios from 'axios';

import Afriend from './Afriend';
import FriendCard from './FriendCard'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
    addItem = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
    // addFriend = e => {
    //     e.preventDefault();
    //     console.log(e.target);
    //     const newFriend = {
    //         name: this.state.name,
    //         age: this.state.age,
    //         email: this.state.email
    //         };
    //     this.setState({
    //         friends: [...this.state.friends, newFriend],
    //         name: '',
    //         age: '',
    //         email: ''
    //     });
    // };

    // handleChanges = e => {
    //     console.log(e.target.value);
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // };

    render() {

        return (
            <div>
        <nav>
          <div className="nav-links">
            <NavLink to="/friend-card">Friends</NavLink>
          </div>
        </nav>
                <div>
                    {this.state.friends.map(friends => (
                    <Afriend key={friends.id} friends={friends} />
                    ))}
                </div>
                <Route path="/friend-card" render={props => <FriendCard {...props} addItem={this.addItem} />} />
            </div>
        );
    }
}

