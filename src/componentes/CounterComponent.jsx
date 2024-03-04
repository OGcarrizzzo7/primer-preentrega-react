import {useState} from 'react'

export default function CounterComponent() {

const [contador, setContador]=useState(0);

const handleClick = () => {
    setContador(contador + 1);
}

    return (
    <>
    <h4>contador</h4>
        <p>{contador}</p>
        <button onClick={handleClick}>+</button>
        </>
    );
}
