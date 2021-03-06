const fs = require('fs');
let database = require('../db/db.json');
const {v4 : uuidv4} = require('uuid');

module.exports = (app) => {

    // API GET request
    app.get('/api/notes', (req, res) => {
        res.json(database);
    });

    // API POST request
    app.post('/api/notes', (req, res) => {
        let note = req.body
        // assign unique id using uuid npm package
        req.body.id = uuidv4();

        console.log(`New Note: ${JSON.stringify(note)}`)

        // push new written note to json array
        database.push(note)

        // Write new note to db.json
        fs.writeFileSync('./db/db.json', JSON.stringify(database))

        console.log("Successfully added new note to db.json")

        res.json(note)
    });

    app.delete('/api/notes/:id', (req, res) => {

        let noteId = req.params.id.toString();
        console.log(noteId)

        for(i = 0; i < database.length; i++) {
            if(database[i].id == noteId) {
                res.send(database[i]);

                database.splice(i,1);
                break;
            }
        }

        fs.writeFileSync('./db/db.json', JSON.stringify(database));
    });
}