//UUIDV4 Used to generate unique id for each note
const router = require('express').Router();
const fs = require('fs');
const {v4: uuidv4 } = require('uuid');


//GET request to get all notes
router.get('/notes', (req, res) => {
    //Read the db.json file
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error reading notes, Server Error' });
        }
        //Parse the data from the file
        const notes = JSON.parse(data);
        //Return the notes as json
        res.json(notes);
    });
});

//Post request to add a new note
router.post('/notes', (req, res) => {
    //Read the db.json file
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error reading notes, Server Error' });
        }
        //Parse the data from the file
        const notes = JSON.parse(data);
        //Create a new note object
        const newNotes = {
            ... req.body,
            id: uuidv4(),
        };
        //Add the new note to the notes array
        notes.push(newNotes);
        //Write the updated notes array back to the file
        fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error writing notes, Server Error' });
            }
            //Return the new note as json
            return res.json(notes);
        });
    });
});

//Delete request to delete a note
router.delete('/notes/:id', (req, res) => {
    //Read the db.json file
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error reading notes, Server Error' });
        }
        //Parse the data from the file
        const notes = JSON.parse(data);
        //Filter out the note to delete
        const newNotesFiltered = notes.filter(note => note.id != req.params.id);
        //Write the updated notes array back to the file
        fs.writeFile('./db/db.json', JSON.stringify(newNotesFiltered), err => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error writing notes, Server Error' });
            }
            //Return a message that the note was deleted
            res.json({ message: 'Note deleted' });
        });
    });
});

//Export the router
module.exports = router;