import React from 'react';

export const ConditionalComponent = (props) => {
    const items = [
        {
            name: 'Apple',
            id: 1,
        },
        {
            name: 'Banana',
            id: 2,
        },
    ];
    if (props.isAdmin) {
        return (
            <>
                Hello Admin


                <ul>
                    {items.map((item, index) => (
                        <li key={index} id={item.id}>{item.name}</li>
                    ))}
                </ul>
            </>
        )
    } else {
        return <h1>Hello User</h1>
    }
}