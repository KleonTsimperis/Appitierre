import * as ACTION from '../actions/action-types';

const initialState = {
    link1:false,
    link2:false,
    link3:false,
    link4:true,
    link5:false,
    link6:false,
    link7:false
};

const linksReducer = (state = initialState, action) => {
    if (action.type === ACTION.LINK1){
        return state = {
            ...state,
            link1: action.payload
        }
    }

    if (action.type === ACTION.LINK2){
        return state = {
            ...state,
            link2: action.payload
        }
    }

    if (action.type === ACTION.LINK3){
        return state = {
            ...state,
            link3: action.payload
        }
    }

    if (action.type === ACTION.LINK4){
        return state = {
            ...state,
            link4: action.payload
        }
    }

    if (action.type === ACTION.LINK5){
        return state = {
            ...state,
            link5: action.payload
        }
    }

    if (action.type === ACTION.LINK6){
        return state = {
            ...state,
            link6: action.payload
        }
    }

    if (action.type === ACTION.LINK7){
        return state = {
            ...state,
            link7: action.payload
        }
    }

    return state;
}

export default linksReducer;
