import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";

function App() {

    const [counter, setCounter] = useState<number>(0)
    const maxValue = 5
    const minValue = 0

    function IncCount() {
        setCounter(counter + 1)
    }

    function ResetCount() {
        setCounter(minValue)
    }

    return (
        <div className="App">
            <div>
                <Display counter={counter} maxValue={maxValue}/>
            </div>
            <div className={"Btn_items"}>
                <Button onClick={IncCount} title="inc"  disabled={counter === maxValue}></Button>
                <Button onClick={ResetCount} title="reset" disabled={counter === minValue}></Button>
            </div>
        </div>
    );
}

export default App;



