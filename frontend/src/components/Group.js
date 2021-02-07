import React, {useEffect, useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink, useParams, useHistory} from 'react-router-dom';
import {getGroupFromApi, resetGroupsState, joinGroup, leaveGroup, createMessage, deleteMessage, joinGroupAndAddGame} from '../actions/groups' 
import groups from '../reducers/groups';
import users from '../reducers/users';
import "./css/Game.css"
import Default from '../static/Default.png';

const Group = () => {
    const history = useHistory();
    const user = useSelector(st => st.users.user)
    const FORM_INITIAL_STATE = {message: ""}
    const IGN_INITIAL_STATE = {in_game_name: ""}
    const [formData, setFormData] = useState(FORM_INITIAL_STATE);
    const [ignDisplay, toggleIgnDisplay] = useState(false);
    const [ignData, setIgnData] = useState(IGN_INITIAL_STATE);
    const dispatch = useDispatch();
    
    const initialize = useCallback(
        () => {
            dispatch(resetGroupsState())
        },
        [dispatch],
    )

    useEffect(() => {initialize(); }, [initialize])

    const {id} = useParams();
    const group = useSelector(st => st.groups[id]);

    const missing = !group;

    useEffect(function() {
        if(missing) {
            dispatch(getGroupFromApi(id));
        }
    }, [missing, id, dispatch]);


    if(missing) return <h1 className="mt-5">Loading...</h1>;
    if(user.groups){
        if(user.groups[id] && user.groups[id].is_banned) return (
            <div className="mt-5">
                <h2>You Have Been Banned From This Group.</h2>
                <h4>You can find another group to join.</h4>
                <NavLink to='/groups'>Back to groups search.</NavLink>
            </div>
            )
    }
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleIgnChange = (e) => {
        const {name, value} = e.target;
        setIgnData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(FORM_INITIAL_STATE)

        const data = {
            ...formData,
            user_id: user.id,
            username: user.username,
            group_id: group.id
        };
        dispatch(createMessage(data));
    };

    let messages;

    const handleDeleteMessage = (e) => {

        const deleteMessageData = {
            message_id: e.target.id,
            group_id: group.id
        };
        dispatch(deleteMessage(deleteMessageData))
    }
    

    if(group.messages.length){
        messages = group.messages.map(m => (
            <div className="card w-75 text-left" data-messageid={m.message_id} key={`message-${m.message_id}`}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{m.message_username}</h6>
                    <div className="message-body d-flex justify-content-between">
                        <span className="card-text">{m.message_body}</span>
                        {user.id === m.message_user_id ? <button 
                            id={m.message_id}
                            className="btn btn-sm btn-danger"
                            onClick={handleDeleteMessage}
                        >X</button> : null}
                    </div>
                    
                </div>
            </div>
        ))
    }else{
        messages = (
            <div className="card w-75 text-left" key={`message-default`}>
                <div className="card-body">
                    <p className="card-text">No messages...</p>
                </div>
            </div>
        )
    };

    let messageArea;

    if(user.groups && user.groups[id]){
        messageArea = (
            <>
            <div>
                <form className="form-inline pl-0 ml-0" onSubmit={handleSubmit}>
                    <div className="form-group mb-2 pl-0 col-12">
                        <div className="col-sm-10">
                            <input 
                            style={{width: "100%"}}
                            onChange={handleChange}
                            type="text" 
                            className="form-control" 
                            id="message" 
                            name="message"
                            aria-describedby="message" 
                            placeholder="Write a message..." 
                            value={formData.message}
                            required
                        />
                        </div>
                        <button className="btn btn-sm btn-primary">OK</button>
                    </div>
                    
                </form>
            </div>
            <div>
                <div className="messages w-100 d-flex flex-column align-items-center border border-dark">
                    {messages}
                </div>
            </div>
            </>
        )
    }else{
        messageArea = (
            <>
            <h5>You must be in the group to see or post messages.</h5>
            </>
        )
    }

    const addGroup = () => {
        dispatch(joinGroup(user.id, group.id))
        initialize();
    };

    const tryAddGroup = () => {
        try{
            addGroup();
        }catch(e){
            console.log(e)
        }
    };

    const addGroupAndGame = () => {
        let data = {
            ...ignData,
            user_id: user.id,
            game_id: group.game_id,
            _token: user._token,
            group_id: group.id,
            username: user.username
        }

        dispatch(joinGroupAndAddGame(data))
        history.push('/profile')
        
    };

    const doLeaveGroup = () => {
        dispatch(leaveGroup(user.id, group.id))
        history.push('/groups')
    };

    const tryLeaveGroup = () => {
        try{
            doLeaveGroup();
        }catch(e){
            console.log(e)
        }
    };

    let joinButton;
    let adminButton;

    if(user.owned_groups && user.owned_groups[group.id]){
        adminButton = (
            <div>
                <NavLink to={`/groups/${group.id}/admin`} className="btn btn-success btn-sm">Admin Page</NavLink>
            </div>
        )
    }else{
        adminButton = null;
    }

    let ignArea;

    if(ignDisplay){
        ignArea = <>
            <input name="in_game_name" className="form-control" onChange={handleIgnChange} placeholder="In Game Name" />
            <div className="btn btn-success btn-sm" onClick={addGroupAndGame}>Join!</div>
            <div className="btn btn-danger btn-sm" onClick={toggleIgnDisplay}>Cancel</div>

        </>
    }else{
        ignArea = <div>
        <div className="btn btn-success btn-sm" onClick={toggleIgnDisplay}>Join!</div>
    </div>
    }


    if(user.groups){
        if(!user.games_playing){
            joinButton = (
                <div>
                    {ignArea}
                </div>
                
            );
        }
        else if(!user.groups[group.id] && !user.games_playing[group.game_id]){
            joinButton = (
                <div>
                    {ignArea}
                </div>
                
            );
        }else if(user.groups[group.id]){
            joinButton = (
                <div>
                    <div className="btn btn-secondary btn-sm" disabled>Joined</div>
                    <div className="btn btn-danger btn-sm" onClick={tryLeaveGroup}>Leave</div>
                </div>
                
            );
        }else{
            joinButton = (
                <div>
                    <div className="btn btn-success btn-sm" onClick={tryAddGroup}>Join!</div>
                </div>
            );
        };
      
    }else{
        if(!users.games_playing || !users.games_playing[groups.game_id]){
                joinButton = (
                    <div>
                        {ignArea}
                    </div>
                )
        }else{
            joinButton = (
                <div>
                    <div className="btn btn-success btn-sm" onClick={tryAddGroup}>Join!</div>
                </div>
            )
        }
        
    }

    return(
        <div className="d-flex flex-column align-items-center pt-5 mt-5">
            <div className="card w-50">
                <div className="d-flex justify-content-around">
                {group.group_logo_url ? 
                    <img className="card-img-top" src={group.group_logo_url} alt={group.group_name}></img>
                    :
                    <img className="card-img-top" src={Default} alt={group.group_name}></img>
                }
                
                <div>
                    <h1>{group.group_name}</h1>
                    <h5>Game: <NavLink to={`/games/${group.game_slug}`}>{group.game_name}</NavLink></h5>
                </div>
                
                </div>
                <div className="justify-self-start">
                    {adminButton ? adminButton: joinButton}
                </div>
                <div className="card-body d-flex justify-content-around">
                
                    <div id="group-info">
                        <h4>Group Info</h4>
                        <p className="card-text">Discord:</p>
                        {user.groups[group.id] ? 
                            <p className="card-text">{group.group_discord_url || "No Discord"}</p>
                            : 
                            <p className="card-text">You must be in the group to see this.</p>
                        }
                        
                    </div>
                    <div id="group-members">
                        <h4>Group Members</h4>
                        <ul className="list-group list-group-flush text-left">
                            {group.members.map(e => (
                                <div key={e.user_id}>
                                    <span>{e.user_id === group.group_owner_id ? <span>Owner / </span> : null}
                                    {e.is_group_admin ? <span>Admin </span> : null}</span>
                                    <NavLink to={`/users/${e.id}`} >{e.username}</NavLink>
                                </div>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>

            <div className="messages-area w-50 mt-5" >
                <h3>Messages</h3>
                {messageArea}
                
            </div>
        </div>
    )
}

export default Group;