import React from 'react';

class FriendCard extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }
    handleChanges = ev => {
        ev.persist();
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [ev.target.name]: ev.target.value
            }
        }));
    }
    render() {
    return (
        <form onSubmit={e => this.props.addItem(e, this.state.friend)}>
            <input
                type="text"
                value={this.state.friend.name}
                name="name"
                onChange={this.handleChanges}
                placeholder="name"
            />
            <input
                type="number"
                value={this.state.friend.age}
                onChange={this.handleChanges}
                name="age"
                placeholder="age"
            />
            <input
                type="text"
                value={this.state.friend.email}
                onChange={this.handleChanges}
                name="email"
                placeholder="email"
            />
          <button className="md-button form-button">Add Item</button>
        </form>
    );
    };
}

export default FriendCard;

// onSubmit={this.addFriend}
//             <button type="submit">Save</button>