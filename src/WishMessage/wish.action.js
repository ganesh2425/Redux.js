const GOODMORNING = "GoodMorning";
const GOODAFTERNOON = "GoodAfternoon";
const GOODNIGHT = "GoodNight";

let sayGMAction =()=>{
        return{
            type:GOODMORNING,
        }
}
let sayGAAction =()=>{

    return{
        type:GOODAFTERNOON,
    }
}
let sayGNAction =()=>{
   
    return{
        type:GOODNIGHT,
    } 
}
export { GOODMORNING,GOODAFTERNOON, GOODNIGHT, sayGMAction, sayGAAction, sayGNAction};