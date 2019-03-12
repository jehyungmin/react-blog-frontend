import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from '../../lib/api';

//action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';
//action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const writePost = createAction(WRITE_POST, api.writePost);
//initial state
const initialState = Map({
    title: '',
    markdown: '',
    tags: '',
    postId: 0
});

//reducer
export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const {name, value} = action.payload;
        return state.set(name, value);
    },
    ...pender({
        type: WRITE_POST,
        onSuccess: (state, action) => {
            // const {_id} = action.payload.data;
            // return state.set('postId', _id);
            console.log("===WEITE_POST_SUCESS===");
            //보내는 데이터가 책과 다르기 때문에 변경
            const{ insertId } = action.psyload.data.resultDate;
            return state.set('postId' , insertId);
        }
    })
}, initialState)