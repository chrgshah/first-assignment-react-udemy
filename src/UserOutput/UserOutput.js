import React from 'react';

const userOutput = (props) => {
        const style = {
            color: 'blue',
            fontSize: '20px'
        }
        return (
            <div>
                <p style={style}>Hi my name is {props.name}</p>
            </div>
        );
}

export default userOutput;