import {LOAD_ALL_GAMES, LOAD_GAME} from '../actions/types';

const INITIAL_STATE = {};

const games = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case LOAD_GAME:
            return{
                ...state,
                [action.payload.slug]: {...action.payload}
            };
        case LOAD_ALL_GAMES:
            return{
                ...state,
                "games": [...action.payload]
            }
        default:
            return state;
    };
};

export default games;