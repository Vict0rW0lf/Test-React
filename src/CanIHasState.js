import { React, useState } from 'react';

function CanIHasState() {
    const [numbaOne, setNumbaOne] = useState(0);
    const [numbaTwo, setNumbaTwo] = useState(0);

    return (
    <div>
        <h1> I HAS STATE SEE NUMBA: {numbaOne}</h1>
        <h1> YOU ARE FANCAYYY NUMBA: {numbaTwo}</h1>

        <button onClick={() => setNumbaOne(numbaOne + 1)}>Click me yo!</button>
        <button onClick={() => setNumbaTwo(numbaTwo + 1)}>Click me too!</button>
    </div>
    )
}

export default CanIHasState; 