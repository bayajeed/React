export const counterReducer = (state, action) =>{
    console.log("State" , state)
    console.log("Action", action)
    
    switch(action.type){
        case "incriment":
            return state + action.payload;
        case "dicriment":
            return state - action.payload;
        case "mult":
            return state * action.payload;
        case "div":
            return state / action.payload;
        default:
            return state
    }
}