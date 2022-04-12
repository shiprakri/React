import { useState } from 'react';

function RefAndState()
{
    const [count, setCount] = useState(0);
    const handlerFunction = () => {
        const updatedCount = count + 1;
        console.log('Clicked ${updatedCount} times');
        setCount(updatedCount);
    };
    return <button onClick={handlerFunction}>Click here...</button>;
}

export default RefAndState;