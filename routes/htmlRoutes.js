// Dependencies 
// require path package to get correct file path for html
const path = require('path');

// Routing

module.exports = (app) => {
    app.get('*', (req, res) => {
        res.sendFile(path,join(__dirname, '../public/index.html'));
    });

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
}