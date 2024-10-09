const { getClient } = require("./mongo-connection")


class MongoOperations {
    constructor(dbName) {
        this.databaseName = dbName;
    }

    set Collection(value) {
        this.myCollection = getClient().db(this.databaseName).collection(value); // Set the collection object
    }

    get Collection() {
      return this.myCollection.collection
        }

    async insertItem(document) {
        try{
            const result = await this.myCollection.insertOne(document);
            return result;
        }
        catch(error){
            throw new Error('can not insert item')
        }
       
    }

    async insertMany(documents) {
        try{
            const result = await this.myCollection.insertMany(documents);
            return result;
        }
        catch(error){
            throw new Error('can not insert item')
        }
       
    }

    async getAll(filter = {}) {
        try{
            const result = await this.myCollection.find(filter);
            return result;
        }
       catch(error){
        throw new Error('can not get all items')

       }
    }

    async getOne(filter) {
        try{
            const result = await this.myCollection.findOne(filter);
            return result;
        }
       catch(error){
        throw new Error('can not get one item')
       }
    }

    async update(filter,update) {     
        try{
            const result = await this.myCollection.updateOne(filter,update)
            return result;
        } 
       catch(error){
        throw new Error('can not update item')

       }
    }
}


module.exports = { MongoOperations }

