const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')

const app = express()


app.use('/api', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000, () => console.log('Executando...'))


/*
EXEMPLOS NO GraphIQL

mutation {
  createUser(input:{
    name: "camelo"
    email:"camelo@sila.com"
    password:"123123123" 
    
  }){
    id
    name
  }
  
  
}


*/