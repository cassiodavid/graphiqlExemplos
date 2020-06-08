
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',table=>{
      table.increments('id').primary()
      table.string('name',80).notNullable()
      table.string('email',80).notNullable()
      table.string('password',80).notNullable()

  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('users') 
};


/*Esses Migration serve pra resolver determinados BUGS que
poder acontecer no decorrer do Sistema, um BACK do Banco de dados
lembrar do termpo Rollback
mais ou menos isso! hahah <3*/