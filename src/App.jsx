import { useState } from 'react';
import { ClassCounter } from './Components/ClassCounter/ClassCounter';
import { FunctionCounter } from './Components/FunctionCounter/FunctionCounter';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card">
                <p>i'm a build in vite counter</p>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
            <div className="card">
                <p>i'm a class counter</p>
                <ClassCounter />
            </div>
            <div className="card">
                <p>i'm a functional counter</p>
                <FunctionCounter />
            </div>
        </>
    );
}

export default App;
