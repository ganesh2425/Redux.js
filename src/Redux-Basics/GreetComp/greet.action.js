//create actions

const GOOD_MORNING = "GOOD_MORNING";
const GOOD_AFTERNOON = "GOOD_AFTERNOON";
const GOOD_NIGHT = "GOOD_NIGHT";

//create action types

let sayGMorningAction =()=>{
    return{
        message: GOOD_MORNING,
    }
}
let sayGAfternoonAction =()=>{
    return{
        message: GOOD_AFTERNOON,
    }
}
let sayGNightAction =()=>{
    return{
        message: GOOD_NIGHT,  
    }
}

export {GOOD_MORNING, 
        GOOD_AFTERNOON, 
        GOOD_NIGHT, 
        sayGMorningAction, 
        sayGAfternoonAction,
        sayGNightAction,}