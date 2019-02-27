import React from 'react';

const FriendCard = props => {
    return (
        <form onSubmit={props.addFriend}>
            <input
                type="text"
                value={props.name}
                name="name"
                onChange={props.handleChanges}
                placeholder="name"
            />
            <input
                type="number"
                value={props.age}
                onChange={props.handleChanges}
                name="age"
                placeholder="age"
            />
            <input
                type="text"
                value={props.email}
                onChange={props.handleChanges}
                name="email"
                placeholder="email"
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default FriendCard;