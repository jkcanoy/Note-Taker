const database = ('./db/db');
const {v4 : uuidv4} = require('uuid');

modeule.exports = (app) => {
    // get request
    app.get('./api/notes', (req, res) => {
        res.json(database);
    })
}