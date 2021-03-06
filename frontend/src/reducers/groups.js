import {LOAD_ALL_GROUPS, LOAD_GROUP, RESET_GROUPS, SET_GROUP_GAME, CREATE_MESSAGE, DELETE_MESSAGE, UPDATE_GROUP, KICK_MEMBER, BAN_MEMBER, UNBAN_MEMBER} from '../actions/types';

const INITIAL_STATE = {};

const groups = (state = INITIAL_STATE, action) => {
    let members
    let bannedMembers
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
            };
        case UPDATE_GROUP:
            return{
                ...state, 
                [action.payload.group.id]: {...state[action.payload.group.id], ...action.payload.group}
            };
        case KICK_MEMBER:
            members = [...state[action.payload.group_id].members].filter(m => (Number(m.user_id) !== Number(action.payload.user_id)))
            return {
                ...state,
                [action.payload.group_id]: {
                    ...state[action.payload.group_id], 
                    "members": members
                }
            };
        case BAN_MEMBER:
            members = [...state[action.payload.group_id].members].filter(m => m.user_id !== action.payload.user_id) || [];

            bannedMembers = [...state[action.payload.group_id].bannedMembers, action.payload] || [];
            return {
                ...state,
                [action.payload.group_id] :{
                    ...state[action.payload.group_id],
                    "members": members,
                    "bannedMembers": bannedMembers
                }
            };
        case UNBAN_MEMBER:
            bannedMembers = [...state[action.payload.group_id].bannedMembers].filter(m => m.user_id !== action.payload.user_id) || [];

            members = [...state[action.payload.group_id].members, action.payload] || [];
            return {
                ...state,
                [action.payload.group_id] :{
                    ...state[action.payload.group_id],
                    "members": members,
                    "bannedMembers": bannedMembers
                }
            };
        default:
            return state;
    };
};

export default groups