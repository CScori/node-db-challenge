const express = require('express')

const Model = require('./helpers.js')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Router Up!')
})

router.get('/projects', (req, res) => {
Model.findProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => res.status(500).json({error: `${err}`}))
})

router.get('/resources', (req, res) => {
    Model.findResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => res.status(500).json({ error : `${err}`}))
} )

router.post('/projects', (req, res) => {
    const project = req.body
    Model.insertProject(project)
    .then(idArray => {
        res.status(201).json(idArray)
    })
    .catch(err => {
        console.log('err', err)
        res.status(500).json({ error : `${err}`})})
})
module.exports = router