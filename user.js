const knex = require('knex')(require('./knexfile'))

module.exports = {
  createUser ({ username, password, alert, wind, location, SwellMin, SwellMax }) {
    console.log(`Add user ${username} with password ${password}`)
    return knex('user').insert({
      username,
      password,
      alert,
      wind,
      location,
      SwellMin,
      SwellMax
    })
  }
}
