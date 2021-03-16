import {GOODMORNING, GOODAFTERNOON, GOODNIGHT} from "./wish.action";
let initialState={
    message:"hello",
}
let wishReducer =(state=initialState,action)=>{
    switch(action.type){
        case GOODMORNING:{
            return{
            message:"Good morning ganesh",
            }
        }
        case GOODAFTERNOON:{
            return{
            message:"Good afternoon ganesh",
            }
        }
        case GOODNIGHT:{
            return{
            message:"Good night ganesh",
            }
        }
        default:
            return state;
    }

} 
export { wishReducer};