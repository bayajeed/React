import { useState } from 'react';

function IncDec () {
        const [count, setCount] = useState(100);
        const [name, setName] = useState('Bayajeed');

        console.log("App is Invoked!")


        //let counter = 0;
        const incrementHandler = () => {
            console.log('Incremented');
            //counter++;
            // count++;
            setCount(() => count + 1);
            console.log(count);
            console.log("Incremented");
        }
        const decrement = (value) => {
            console.log('Decremented');
            // counter--;
            setCount(() => count - value);
            console.log(count);
        }
        const changeName = (value) => {
            console.log('Name Changed');
            setName(value);
        }
    return(
        <>
            <h1>Increment and Decrement</h1>
            <button onClick={incrementHandler}>Increment +</button> 
            {/* Event listener er moddhe kno Argument pass kora lage tokhon "wrapper function" use kore pathai */}
            <button onClick={() => decrement(4)}>Decrement -</button>
            <button onClick={() => changeName('Shohag')}>Change Name</button>
            <h4>Count: {count}</h4>
            <p>Mohammad {name}</p>

        </>
    )
}

export default IncDec;