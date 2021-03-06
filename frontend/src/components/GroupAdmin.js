import React, {useEffect, useCallback, useState, useRef, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavLink, useParams, useHistory} from 'react-router-dom';
import {getGroupFromApiAdmin, resetGroupsState, deleteMessage, updateGroup, kickMember, banMember, unBanMember, deleteGroup} from '../actions/groups';
import Alert from "./Alert";
import './css/GroupAdmin.css'
import Helmet from 'react-helmet';
import Breadcrumb from "../template/components/breadcrumb/BreadcrumbOne";
import LayoutDefault from "../template/layouts/LayoutDefault";
import groupsbg from '../static/groupsbg.jpg';
import NotLoggedIn from './NotLoggedIn'

const MESSAGE_SHOW_PERIOD_IN_MSEC = '3000'

const GroupAdmin = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(st => st.users.user)

    const {id} = useParams();
    const group = useSelector(st => st.groups[id]);
    const [groupForm, setGroupForm] = useState({
        group_name: '',
        group_discord_url: '',
        group_logo_url: '',
        errors: [],
        saveConfirmed: false,
        hasErrors: false
    })
    
    // Resets the group data in the store to nothing
    const initialize = useCallback(
        () => {
            dispatch(resetGroupsState())
        },
        [dispatch],
    );

    useEffect(() => {initialize(); }, [initialize])

    const missing = !group;

    // Collects the groups data from the db
    useEffect(function() {
        if(missing) {
            let groupAdmin = dispatch(getGroupFromApiAdmin(id));
            Promise.all([groupAdmin]).then(v => {
                let g = v[0];
                setGroupForm({
                    group_name: g.group_name,
                    group_discord_url: g.group_discord_url,
                    group_logo_url: g.group_logo_url,
                    errors: [],
                    saveConfirmed: false,
                    hasErrors: false
                })
            }).catch(e => console.log(e))
        }
    }, [missing, id, dispatch]);

    const [deleteShown, toggleDeleteShown] = useState(false);

    // Displays a message stating that changes were made if the form submission is successful
    useEffect(
        function() {
        if (groupForm.saveConfirmed && !messageShownRef.current) {
            messageShownRef.current = true;
            setTimeout(function() {
            setGroupForm(f => ({ ...f, saveConfirmed: false }));
            messageShownRef.current = false;
            }, MESSAGE_SHOW_PERIOD_IN_MSEC);
        }
        },
        [groupForm]
    );

    // Displays error messages if the form submission fails
    useEffect(
        function() {
        if (groupForm.hasErrors && !messageShownRef.current) {
            messageShownRef.current = true;
            setTimeout(function() {
            setGroupForm(f => ({ ...f, hasErrors: false, errors: [] }));
            messageShownRef.current = false;
            }, MESSAGE_SHOW_PERIOD_IN_MSEC);
        }
        },
        [groupForm]
    );

    const messageShownRef = useRef(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setGroupForm(f => ({
          ...f,
          [name]: value,
          errors: []
        }));
      };
    
    const handleGroupEditSubmit = (e) => {
        e.preventDefault();
        let groupData = {
            id: group.id,
            group_name: groupForm.group_name,
            group_discord_url: groupForm.group_discord_url,
            group_logo_url: groupForm.group_logo_url
        };
        dispatch(updateGroup(groupData))
    };

    // Toggles the delete button display on and off
    const toggleDelete = () => {
        toggleDeleteShown(!deleteShown);
      };

    // Handles the deletion of the group
    const handleDelete = async (e) => {
        e.preventDefault();

        dispatch(deleteGroup(group.id))
        
        history.push('/profile')
      };

    // Handles the deletion of messages
    const handleDeleteMessage = (e) => {
        const deleteMessageData = {
            message_id: e.target.id,
            group_id: group.id
        };
        dispatch(deleteMessage(deleteMessageData))
    }

    if(missing) return <h1 className="mt-5">Loading...</h1>;

    let messages;

    // Collects the messages for this group to be displayed and available for deletion, or a default value if there are none
    if(group.messages.length){
        messages = group.messages.map(m => (
            <div className="card text-left" data-messageid={m.message_id} key={`message-${m.message_id}`}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{m.message_username}</h6>
                    <div className="message-body d-flex justify-content-between">
                        <span className="card-text">{m.message_body}</span>
                        <button 
                            id={m.message_id}
                            className="btn btn-sm btn-danger py-0 px-1"
                            onClick={handleDeleteMessage}
                        >Delete</button>
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

    let members;
    let bannedMembers;

    // Handles kicking a member, but not banning them, from the gruop
    const handleKickMember = (e) => {
        dispatch(kickMember(group.id, e.target.getAttribute('data-userid')))
    }

    // Removes the selected user from the group and bans them, preventing them from joining again
    const handleBanMember = (e) => {
        dispatch(banMember(group.id, Number(e.target.getAttribute('data-userid'))));
    };

    // Allows for unbanning someone from the group, allowing them to join again
    const handleUnBanMember = (e) => {
        dispatch(unBanMember(group.id, Number(e.target.getAttribute('data-userid'))))
    };

    // Will display that the user must be logged in to see this. Backup in case protected route fails
    if(!user){
        return <NotLoggedIn />
    };

    // Collects the users that have joined the group, filters out the banned ones, and displays the ones left
    if(group.members.length){
        members = group.members.filter(m => m.is_banned !== true);
        bannedMembers = group.members.filter(m => m.is_banned === true)
        members = members.map(m => (
            <div className="card text-left" data-userid={m.user_id} key={`member-${m.user_id}`}>
                <div className="card-body">
                    
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="card-subtitle mb-2 text-muted">{m.username}</h6>
                        </div>
                        <div>
                            {m.user_id === group.group_owner_id ? <span>Owner / </span> : null}
                            {m.is_group_admin ? <span>Admin</span> : <p>Member</p>}
                        </div>
                        <div>
                            {m.user_id === user.id ? 
                            <>
                                <button className="btn btn-primary px-2 py-1" disabled>You</button>
                            </> :
                                
                                <>
                                <button 
                                data-userid={m.user_id}
                                className="btn btn-sm btn-warning px-2 py-1"
                                onClick={handleKickMember}
                                >Kick</button>
                                <button 
                                    data-userid={m.user_id}
                                    className="btn btn-sm btn-danger px-2 py-1"
                                    onClick={handleBanMember}
                                >Ban</button>
                            </>
                            }
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        ));
    };

    // Collects the list of banned users and displays them to allow for unbanning
    if(group.bannedMembers && group.bannedMembers.length){
        bannedMembers = group.bannedMembers.map(m => (
            <div className="card text-left" data-userid={m.user_id} key={`member-${m.user_id}`}>
                <div className="card-body">
                    
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="card-subtitle mb-2 text-muted">{m.username}</h6>
                        </div>
                        <div>
                            <button 
                                data-userid={m.user_id}
                                className="btn btn-sm btn-danger px-1 py-1"
                                onClick={handleUnBanMember}
                            >Unban</button>
                        </div>
                    </div>
                </div>
            </div>
        ))}else{
            bannedMembers = <div>Empty...</div>
        }

    let previous = [{title: "groups"},{title: `${group.id}`}]

    return(
        <Fragment>
        <Helmet>
            <title>Group-Up Gamers || {group.group_name} Admin</title>
        </Helmet>
        <Breadcrumb
            title={`${group.group_name} Admin`}
            bg={groupsbg}
            prev={previous}
            stem={`/groups`}
        />
        <LayoutDefault className="template-color-1 template-font-1">
        <div id="admin-wrapper">
        <div className="m-3 my-5 pt-3">
            <h3><NavLink to={`/groups/${group.id}`}>{group.group_name}</NavLink> Admin Page</h3>
            <h6>Here you can edit your group, kick or ban users, and delete unwanted messages.</h6>
        </div>

        <div className="d-flex flex-row">
        <div className="col-md-6 d-flex flex-column align-items-center">
        
        <div className="card" id="edit-group-area">
            <div className="card-body">
            <form>
                <div className="form-group">
                <label>Group Name</label>
                <input
                    name="group_name"
                    className="form-control"
                    value={groupForm.group_name}
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                <label>Discord URL</label>
                <input
                    name="group_discord_url"
                    className="form-control"
                    value={groupForm.group_discord_url}
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                <label>Logo URL</label>
                <input
                    name="group_logo_url"
                    className="form-control"
                    value={groupForm.group_logo_url}
                    onChange={handleChange}
                />
                </div>

                {groupForm.errors.length ? (
                <Alert type="danger" messages={groupForm.errors} />
                ) : null}

                {groupForm.saveConfirmed ? (
                <Alert type="success" messages={["User updated successfully."]} />
                ) : null}

                <button
                className="btn btn-primary btn-block mt-4"
                onClick={handleGroupEditSubmit}
                >
                Save Changes
                </button>
            </form>
            </div>
        </div>

        <h4>Delete Group</h4>
        <h6 className="text-danger">**This Cannot Be Undone**</h6>
        <div className="card">
            <div className="card-body">
            <form>
                {deleteShown ? (
                <>
                <div className="form-group">
                    <label>                    
                    <p>
                        Are you sure you really, really want to delelete your group?
                    </p>
                    <p className="text-danger">
                        This really can't be undone. Ever.
                    </p>
                    </label>
                    
                </div>

                <button
                className="btn btn-primary btn-block mt-4"
                onClick={handleDelete}
                >
                Yes, Permanently Delete This Group
                </button>
                <button className="btn btn-danger btn-block mt-4" onClick={toggleDelete} >
                    Cancel
                </button>
                </>
                ) : (
                <button
                    className="btn btn-primary btn-block mt-4"
                    onClick={toggleDelete}
                >
                    Delete Group Permanently
                </button>
                )}            
            </form>
            </div>
            </div>
        </div>

        <div className="col-md-6 d-flex flex-column align-items-center">
            <div id="group-users">
                <div className="mb-5">
                    <h5>Group Members</h5>
                    {members}
                </div>
            </div>
            <div id="group-messages" className="mb-5">
                <h5>Messages</h5>
                {messages}
            </div>
            <div id="banned-users">
                <h5>Banned Users</h5>
                {bannedMembers}
            </div>
        </div>

        </div>

        </div>
        </LayoutDefault>
        </Fragment>
    )

};

export default GroupAdmin;