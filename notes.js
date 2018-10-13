const fs = require('fs')

const FILE_NAME = 'notes.json'

const fetchNotes = () => {
  return fs.existsSync(FILE_NAME) ? JSON.parse(fs.readFileSync(FILE_NAME)) : {}
}

const writeNotes = (notes) => {
  fs.writeFileSync(FILE_NAME, JSON.stringify(notes))
}

const addNote = (title, body, cb) => {
  var notes = fetchNotes()

  if (title in notes) {
    return cb(Error('note with specified title already exists.'))
  } else {
    notes[title] = body
    writeNotes(notes)
    return cb()
  }
}

const getAll = (cb) => {
  const notes = fetchNotes()
  return cb(notes)
}

const readNote = (title, cb) => {
  const notes = fetchNotes()
  if (title in notes) {
    return cb(notes[title], null)
  } else {
    return cb(null, Error('note with specified title does not exist.'))
  }
}

const removeNote = (title, cb) => {
  var notes = fetchNotes()
  if (title in notes) {
    delete notes[title]
    writeNotes(notes)
    return cb()
  } else {
    return cb(Error('no note with title specified'))
  }
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}
