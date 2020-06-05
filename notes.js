const fs = require('fs');

function getNotes(){
    return "your notes...";
}
const addNote = function(title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(notes){
        return notes.title===title 
    })

    if(duplicateNotes.length === 0){
    notes.push({
        title:title,
        body:body
    })
    console.log("new note added!")
   }
   else{
       console.log("note already exists")
   }

    saveNotes(notes)
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
   try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString(); 
    const data = JSON.parse(dataJSON);
   }
   catch(e)
   {
       return []
   }
}

const removeNote =  function(title){
    const newNotes = []
    const notes = loadNotes()
    const newNotes = rnotes.filter(function(notes){
        return notes.title!==title
    })

    saveNotes(newNotes)
}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
};