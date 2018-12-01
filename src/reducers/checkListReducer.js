import * as ACTION from '../actions/action-types';

const initialState = {
    item1:false,
    item2:false,
    item3:false,
    item4:false,
    item5:false
};

const checkListReducer = (state = initialState, action) => {

    switch(action.type){
        case ACTION.CLICK1:
        return state = {
            ...state,
            item1: !state.item1
        }
        case ACTION.CLICK2:
        return state = {
            ...state,
            item2: !state.item2
        }  
        case ACTION.CLICK3:
        return state = {
            ...state,
            item3: !state.item3
        }
        case ACTION.CLICK4:
        return state = {
            ...state,
            item4: !state.item4
        }
        case ACTION.CLICK5:
        return state = {
            ...state,
            item5: !state.item5
        }
        default:
        return state
    }
}

export default checkListReducer;