import {LOAD_ALL_GROUPS, LOAD_GROUP, RESET_GROUPS, SET_GROUP_GAME, CREATE_MESSAGE, DELETE_MESSAGE} from '../actions/types';

const INITIAL_STATE = {};

const groups = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case RESET_GROUPS:
            return{...INITIAL_STATE};
        case LOAD_GROUP:
            return{
                ...state,
                [action.payload.id]: {...action.payload}
            };
        case LOAD_ALL_GROUPS:
            return{
                ...state,
                "groups": [...action.payload]
            };
        case SET_GROUP_GAME:
            return{
                ...state,
                "group_game": action.payload
            };
        case CREATE_MESSAGE:
            return{
                ...state,
                [action.payload.message_group_id]:{
                    ...state[action.payload.message_group_id],
                        "messages": [
                            {
                                message_id: action.payload.message_id,
                                message_user_id: action.payload.message_user_id,
                                message_username: action.payload.username,
                                message_body: action.payload.message_body
                        },
                        ...state[action.payload.message_group_id].messages,
                        ]
                }
            };
        case DELETE_MESSAGE:
            let filteredMessages = state[action.payload.group_id].messages.filter(m => m.message_id !== Number(action.payload.message_id))
            return{
                ...state,
                [action.payload.group_id]:{
                    ...state[action.payload.group_id],
                    "messages": filteredMessages
                }
            }
        default:
            return state;
    };
};

export default groups