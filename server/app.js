const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose'); 
require

const app = express();

mongoose.connect(`mongodb+srv://${process.env.MONGOOSEDB_USERNAME}:${process.env.MONGOOSEDB_PASSWORD}@cluster0.tsnz8.mongodb.net/thenetninja?retryWrites=true&w=majority`)
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('server listening to 4000')
})