import React from 'react';

export function FunctionCounter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count is {count}</button>
        </div>
    );
}
