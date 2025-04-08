import { useReducer } from "react";
import { counterReducer } from "./reducers/CounterReducer";

const initialValue = 11;
function Reducer(){
    const [counter, dispatch] = useReducer(counterReducer, initialValue)
    return (
        <>
            <div>
                <p>The Number is: {counter}</p>
                <button onClick={()=>{dispatch({type: "incriment", payload: 1})}}>Incriment by 1</button>
                <button onClick={()=>{dispatch({type: "incriment", payload: 5})}}>Incriment by 5</button>
                <button onClick={()=>{dispatch({type: "dicriment", payload: 1})}}>Dicriment by 1</button>
                <button onClick={()=>{dispatch({type: "dicriment", payload: 5})}}>Dicriment by 5</button>
                <button onClick={()=>{dispatch({type: "mult", payload: 2})}}>Mult by 2</button>
                <button onClick={()=>{dispatch({type: "div", payload: 2})}}>Div by 2</button>
            </div>
        </>
    )
}
export default Reducer;