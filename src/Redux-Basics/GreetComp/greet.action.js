//create actions
const GOOD_MORNING = "GOOD_MORNING";
const GOOD_NIGHT = "GOOD_NIGHT";

//create action type

let sayGMAction =()=>{
    return {
        type: GOOD_MORNING,
    }
}
let sayGNAction =()=>{
    return {
        type: GOOD_NIGHT,
    }
}

//export named actions, action types

export {GOOD_MORNING,GOOD_NIGHT, sayGMAction,sayGNAction};