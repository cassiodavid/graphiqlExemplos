/* Fução para o GraphQL para obter os dados do Banco ou APi*/ 

//Criar as Quary de pesquisa no banco
/*
const db = require('../config/database')


module.exports = {
    Query:{
        async getUser( _ ,{ id }){
            return await db('users').where( {id} ).first()
        },
        async getUsers(){
            return await db('users')
        }
    },

    Mutation:{
        async createUser( _,{input}){
            const result = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })

            const id = result[0]
            return await db('users').where({id})


        }
    }
}
*/

const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, { id }) {
            return await db('users').where({ id }).first()
        },
        async getUsers() {
            return await db('users')
        }
    },
    Mutation: {
        async createUser (_, { input }) {
            const result = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })

            const id = result[0]
            return await db('users').where({ id }).first()
        }
    }
}


/*As pesquisas no BANCO e modificaçoes do BANCO */