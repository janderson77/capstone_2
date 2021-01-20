const db = require("../db");
const sqlForPartialUpdate = require("../helpers/partialUpdate");
const checkIfJoinedOrBanned = require('../helpers/checkIfJoinedOrBanned');

class Group {
  static async findAll(data) {
      let baseQuery = `SELECT id, group_name, group_slug, group_game_id, group_owner_id, group_discord_url, group_logo_url FROM groups`;
      
      let whereExpressions = [];
      let queryValues = [];

      if (data.search) {
          queryValues.push(`%${data.search}%`);
          whereExpressions.push(`group_slug ILIKE $${queryValues.length}`);
      };
  
      if (whereExpressions.length > 0) {
          baseQuery += " WHERE ";
      };

      let finalQuery = baseQuery + whereExpressions.join(" AND ") + " ORDER BY group_name";
      const groupsRes = await db.query(finalQuery, queryValues);
      return groupsRes.rows;
  };

  static async findOneByName(slug) {
      const groupRes = await db.query(
          `SELECT id, group_name, group_game_id, group_owner_id, group_discord_url, group_logo_url
              FROM groups
              WHERE group_slug ILIKE $1`,
          [slug]);
  
      const group = groupRes.rows[0];
  
      if (!group) {
        const error = new Error(`Sorry, we cannot find this group.`);
        error.status = 404;   // 404 NOT FOUND
        throw error;
      }
  
      return group;
  };

  static async findOneById(id) {
      const groupRes = await db.query(
          `SELECT id, group_name, group_game_id, group_owner_id, group_discord_url, group_logo_url
              FROM groups
              WHERE id = $1`,
          [id]);
  
      const group = groupRes.rows[0];
  
      if (!group) {
        const error = new Error(`There exists no group '${handle}'`);
        error.status = 404;   // 404 NOT FOUND
        throw error;
      };
  
      return group;
  };

  static async joinGroup(user, group){

    const joinedOrBanned = await checkIfJoinedOrBanned(user.user_id, group.id);

    if(joinedOrBanned.joined){
      if(joinedOrBanned.is_banned){
        let joinError = new Error(`You cannot join this group. You have been banned.`);
        joinError.status = 400
        throw joinError
      }
      let joinError = new Error(`You are already in this group`);
      joinError.status = 400
      throw joinError
    }

    const joinRes = await db.query(`
      INSERT INTO group_members
      (group_id, user_id)
      VALUES
      ($1, $2)
      RETURNING group_id, user_id
    `, [group.id, user.user_id])

    if(joinRes.rows === 0){
      let joinError = new Error(`ERROR! Something went wrong!`);
      joinError.status = 500;
      throw error;
    }

    return(joinRes.rows[0]);
  };

  static async banUser(user, group) {
    const joinedOrBanned = await checkIfJoinedOrBanned(user.user_id, group.id);

    if(!joinedOrBanned.joined){
      let error = new Error("This user is not in this group.")
      error.status = 400;
      throw error;
    }

    if(joinedOrBanned.is_banned){
      let error = new Error("This user is already banned.")
      error.status = 400;
      throw error;
    }

    const banRes = await db.query(`
      UPDATE group_members
      SET is_banned = true
      WHERE user_id = $1
      AND group_id = $2
      RETURNING user_id
    `, [user.user_id, group.id]);

    if(banRes.rows.length === 0){
      let error = new Error("ERROR! Something went wrong. Please try again.")
      error.status = 500;
      throw error;
    };

    return banRes.status(200).json(banRes)
  };

  static async unbanUser(user, group) {
    const joinedOrBanned = await checkIfJoinedOrBanned(user.user_id, group.id);

    if(!joinedOrBanned.joined){
      let error = new Error("This user is not in this group.")
      error.status = 400;
      throw error;
    }

    if(!joinedOrBanned.is_banned){
      let error = new Error("This user is not banned.")
      error.status = 400;
      throw error;
    }

    const unbanRes = await db.query(`
      UPDATE group_members
      SET is_banned = false
      WHERE user_id = $1
      AND group_id = $2
      RETURNING user_id
    `, [user.user_id, group.id]);

    if(unbanRes.rows.length === 0){
      let error = new Error("ERROR! Something went wrong. Please try again.")
      error.status = 500;
      throw error;
    };

    return unbanRes.status(200).json(unbanRes)
  };

  static async leaveGroup(user, group){
    const checkIfJoined = await checkIfJoinedOrBanned(user.user_id, group.id);

    if(!checkIfJoined.joined || checkIfJoined.is_banned){
      let error = new Error("You are not in this group.")
      error.status = 400;
      throw error;
    }

    const leaveRes = await db.query(`
      DELETE FROM group_members
      WHERE user_id = $1
      AND group_id = $2
      RETURNING group_id, user_id
    `, [user.user_id, group.id])

    if(leaveRes.rows === 0){
      let error = new Error(`ERROR! Something went wrong!`);
      error.status = 500;
      throw error;
    }

    return(leaveRes.rows[0]);
  };

  static async create(data) {
      const duplicateCheck = await db.query(
          `SELECT group_slug 
              FROM groups 
              WHERE group_slug = $1`,
          [data.group_slug]);
  
      if (duplicateCheck.rows[0]) {
        let duplicateError = new Error(
            `There already exists a group with name '${data.group_name}`);
        duplicateError.status = 409; // 409 Conflict
        throw duplicateError
      }

      console.log(data)
  
      const result = await db.query(
          `INSERT INTO groups 
                (group_name, group_slug, group_game_id, group_owner_id, group_discord_url, group_logo_url)
              VALUES ($1, $2, $3, $4, $5, $6) 
              RETURNING id, group_name, group_game_id, group_owner_id, group_discord_url, group_logo_url`,
          [
            data.group_name,
            data.group_slug,
            data.group_game_id,
            data.group_owner_id,
            data.group_discord_url,
            data.group_logo_url
          ]);
  
      return result.rows[0];
    };

  static async update(id, data) {
      let {query, values} = sqlForPartialUpdate(
          "groups",
          data,
          "id",
          id
      );
  
      const result = await db.query(query, values);
      const group = result.rows[0];
  
      if (!group) {
        let notFound = new Error(`There exists no group with id '${id}`);
        notFound.status = 404;
        throw notFound;
      }
  
      return group;
    };

  static async remove(id) {
      const result = await db.query(
          `DELETE FROM groups 
            WHERE id = $1 
            RETURNING id`,
          [id]);
  
      if (result.rows.length === 0) {
        let notFound = new Error(`There exists no group with id '${id}`);
        notFound.status = 404;
        throw notFound;
      };
  };
    
};

module.exports = Group;