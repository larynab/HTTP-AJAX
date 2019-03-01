import React from 'react';

function Afriend(props) {
    return (
        <div>
            <h2>{props.friends.name}</h2>
            <p>Age: {props.friends.age}</p>
            <p>Email: {props.friends.email}</p>
            <button onClick={e => props.deleteItem(e, props.friends.id)}>Remove Friend</button>
        </div>
    );
}

export default Afriend;