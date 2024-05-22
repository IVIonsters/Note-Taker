//UUIDV4 Used to generate unique id for each note
const { uuid } = require('uuidv4');
const fs = require('fs');
const router = require('express').Router();

//GET request to get all notes
router.get('/notes', (req, res) => {
    //Read the db.json file
    fs.readFile('./develop/db/db.json', (error, data) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error reading notes, Server Error' });
        }
        //Parse the data from the file
        const notes = JSON.parse(data);
        //Return the notes as json
        res.json(notes);
    });
    //Return the notes as json
    res.json(notes);
});

//Post request to add a new note
router.post('/notes', (req, res) => {
    //Read the db.json file
    fs.readFile('./develop/db/db.json', (error, data) => {
        if (error) {
            console.error(error);
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
        fs.writeFile('./develop/db/db.json', JSON.stringify(notes), error => {
            if (error) {
                console.error(error);
                return res.status(500).json({ message: 'Error writing notes, Server Error' });
            }
            //Return the new note as json
            res.json(newNote);
        });
    });
});

//Delete request to delete a note


//Export the router
module.exports = router;