require('dotenv').config();
const app = require('./app')
const { PORT, MONGODB_URL } = process.env
const { openConnection,  getClient } = require('./service/mongo/mongo-connection')


const serverUrl = MONGODB_URL;

const client = getClient()

openConnection(serverUrl).then(_ => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
})