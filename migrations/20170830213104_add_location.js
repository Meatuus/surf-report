
exports.up = function(knex, Promise) {
    return knex.schema.table('user', function(t) {
        t.string('location');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('user', function(t) {
        t.dropColumn('location');
    });
};
