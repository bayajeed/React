import { useReducer } from "react";

const counterReducer = (state, action) =>{
    console.log("State" , state)
    console.log("Action", action)
    
    switch(action){
        case "incriment":
            return state + 2
        case "dicriment":
            return state - 3
        default:
            return state
    }
}
const initialValue = 11;
function Reducer(){
    const [counter, dispatch] = useReducer(counterReducer, initialValue)
    return (
        <>
            <div>
                <p>The Number is: {counter}</p>
                <button onClick={()=>{dispatch("incriment")}}>Incriment by 1</button>
                <button onClick={()=>{dispatch("dicriment")}}>Dicriment by 1</button>
            </div>
        </>
    )
}
export default Reducer;