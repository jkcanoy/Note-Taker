const database = ('./db/db');
const {v4 : uuidv4} = require('uuid');

modeule.exports = (app) => {

    // API GET request
    app.get('./api/notes', (req, res) => {
        res.json(database);
    });

    // API POST request
    app.post('./api/notes', (req, res) => {

        let note = req.body
        // assign unique id using uuid npm package
        note.id = uuidv4();

        console.log(`New Note: ${JSON.stringify(note)}`)

        // push new written note to json array
        database.push(req.body);

        // Write new note to db.json
        fs.writeFileSync('./db/db.json', JSON.stringify(database))

        console.log("Successfully added new note to db.json")

        res.json(note)
    })
}