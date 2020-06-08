const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

/*
knex('users').insert({
    name:'Suasduasdadasdzaoooo',
    email: 'teste@teste.br',
    password:'teaasdasdsdaasdasdsst'
}).then( dados => console.log(dados))

*/
//knex('users').select('id').then(resultado => console.log(resultado))


//knex('users').first().then(resultado => console.log(resultado))

//knex('users').where({id:3}).first().then(resultado => console.log(resultado))