import {ADD_ONE_TO_COUNTER} from  './components/action';

const initalState={
    count:0
}

function reducer(state=initalState,action){
    switch(action.type){
        case 'ADD_ONE_TO_COUNTER':
        return{
            ...state,
            count:state.count+1
        }
        default:return state
    }
}
export default reducer