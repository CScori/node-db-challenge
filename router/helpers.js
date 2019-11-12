const db = require('../database/dbConfig.js')

const findResources = () => {
    return db('resources')
    // select('*')
    // from('resources')
}
const findProjects = () => {
    return db('projects')
    //select('*)
    //from('projects)
}
const insertProject = (project) => {
    return db('projects')
    .insert(project)
}

module.exports = {
    findResources,
    findProjects,
    insertProject,
    
    }