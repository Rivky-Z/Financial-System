require('dotenv').config()
const { v4 } = require('uuid')
const { MongoOperations } = require('../service/mongo/mongo-operations')
const { errorTypes } = require('../utiles/types')

const mongoOperations = new MongoOperations(process.env.MONGO_USERS_DB)

const existUsername = async (username) => {
    mongoOperations.Collection = process.env.MONGO_USERS_COLLECTION;
    try {
        const response = await mongoOperations.find({ filter: { username: username } })
        console.log(response);
        return response.length > 0
    }
    catch (error) {
        throw error;
    }
}

const createUser = async (user) => {
    //TODO:check user object
    console.log(user.username);
    if (await existUsername(user.username)) {
        const error = {
            massege: (`username '${user.username}' is not valid`),
            type: errorTypes.VALIDATION
        }
        throw error
    }
    const id = v4();
    user.id = id
    //TODO:save user in db
    try {
        mongoOperations.Collection = process.env.MONGO_USERS_COLLECTION;
        const response = await mongoOperations.insertItem(user)
        console.log({ response })
        return user;
    }
    catch (error) {
        throw error
    }
}
module.exports = {
    createUser, existUsername
}