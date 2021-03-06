
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function (t) {
    t.increments('id').primary()
    t.string('username').notNullable()
    t.string('password').notNullable()
    t.boolean('alert')
    t.string('minSwell')
    t.string('maxSwell')
    t.string('wind')
    t.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
