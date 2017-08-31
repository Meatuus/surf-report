
exports.up = function(knex, Promise) {
  return knex.schema.table('user', function(t) {
    t.dropColumn('minSwell');
    t.dropColumn('maxSwell');
    t.integer('SwellMin');
    t.integer('SwellMax');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user', function(t) {
      t.dropColumn('SwellMin');
      t.dropColumn('SwellMax');
      t.string('minSwell');
      t.string('maxSwell');
  });
};
