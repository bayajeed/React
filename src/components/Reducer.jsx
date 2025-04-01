import { useReducer } from "react";

const counterReducer = (state, action) =>{
    console.log("State" , state)
    console.log("Action", action)
    
    if(action === "incriment"){
        return state + 1
    }else if(action ==="dicriment"){
        return state - 1
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