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
        // assign unique id using uuid npm package
        req.body.id = uuidv4();

        console.log(`New Note: ${JSON.stringify(req.body)}`)

        // push new written note to json array
        database.push(req.body)

        // Write new note to db.json
        fs.writeFileSync('./db/db.json', JSON.stringify(req.body))

        console.log("Successfully added new note to db.json")

        res.json(req.body)
    });

    // app.delete('/api/notes/:id', (req, res) => {

    //     let noteId = req.params.id.toString();
    //     console.log(noteId)

    //     for(i = 0; i < database.length; i++) {
    //         if(database[i].id == id) {
    //             res.send(database[i]);

    //             database.splice(i,1);
    //             break;
    //         }
    //     }
    // })
}