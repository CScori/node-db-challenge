
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('p_id')
        tbl.string('project_Name', 128)
            .notNullable()
        tbl.string('p_desc', 500)
        tbl.boolean('p_complete')
            .notNullable()
            .defaultTo(false)
    }) 
    .createTable('tasks', tbl => {
        tbl.increments('t_id')
        tbl.string('t_desc', 500)
            .notNullable()
        tbl.string('notes', 500)
        tbl.boolean('t_complete')
            .notNullable()
            .defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('p_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('resources', tbl => {
        tbl.increments('r_id')
        tbl.string('r_name', 128)
            .notNullable()
        tbl.string('r_desc', 500)
    })
    .createTable('pro_res', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('p_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('r_id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })

};

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('pro_res')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')

};
