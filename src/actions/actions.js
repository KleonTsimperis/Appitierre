import * as ACTION from './action-types';
import { link } from './action-creators';

export const handleClickEvent = value => {
    return (dispatch, getState) => {
        dispatch({type: value});

            // link1
            getState().checkListReducer.item1 ? dispatch(link(true,ACTION.LINK1)) : dispatch(link(false,ACTION.LINK1))

            // link2
            if ( getState().checkListReducer.item3 && getState().checkListReducer.item5 ){
                dispatch(link(true, ACTION.LINK2))
            } else {
                dispatch(link(false, ACTION.LINK2))
            }

            // link3
            if ( getState().checkListReducer.item1 &&
                 getState().checkListReducer.item2 &&
                 getState().checkListReducer.item3 &&
                 getState().checkListReducer.item4 &&
                 getState().checkListReducer.item5 ){
                    dispatch(link(true, ACTION.LINK3))
                 } else {
                    dispatch(link(false, ACTION.LINK3))
                 }
            
            // link4
            if ( !getState().checkListReducer.item1 &&
                 !getState().checkListReducer.item2 &&
                 !getState().checkListReducer.item3 &&
                 !getState().checkListReducer.item4 &&
                 !getState().checkListReducer.item5 ){
                 dispatch(link(true,ACTION.LINK4))
                 } else {
                 dispatch(link(false,ACTION.LINK4))
                 }

            // link5
            if ( getState().checkListReducer.item1 && getState().checkListReducer.item3 && getState().checkListReducer.item5){
                dispatch(link(true, ACTION.LINK5))
            } else {
                dispatch(link(false, ACTION.LINK5))
            }


            // link6
            if ( getState().checkListReducer.item2 && getState().checkListReducer.item4){
                dispatch(link(true, ACTION.LINK6))
            } else {
                dispatch(link(false, ACTION.LINK6))
            }
            
            // link7
            if ( getState().checkListReducer.item1 ||
                 getState().checkListReducer.item2 ||
                 getState().checkListReducer.item3 ||
                 getState().checkListReducer.item4 ||
                 getState().checkListReducer.item5 ){
                    dispatch(link(true, ACTION.LINK7))
                 } else {
                    dispatch(link(false, ACTION.LINK7))
                 }          
    }
}
