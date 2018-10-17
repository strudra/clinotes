// third-party imports
const yargs = require('yargs')

// local imports
const notes = require('./notes.js')

// use yargs for command line
const titleArgument = { describe: 'title of a note', demand: true, alias: 't' }
const bodyArgument = {describe: 'body of a note', demand: true, alias: 'b'}
const argv = yargs
  .command('add', 'adds a new note', {
    title: titleArgument,
    body: bodyArgument
  })
  .command('list', 'prints all notes')
  .command('read', 'prints a note with title specified', {
    title: titleArgument
  })
  .command('remove', 'removes a note with title specified', {
    title: titleArgument
  })
  .command('update', 'updates a note with title and body specified', {
    title: titleArgument,
    body: bodyArgument
  })
  .help()
  .argv

const command = argv._[0]

// read from command line
if (command === 'add') {
  notes.addNote(argv.title, argv.body, (err) => {
    if (err) {
      console.error('error =>', err.message, err.stack)
    } else {
      console.log('note successfully created.')
      console.log('note info:')
      console.log('title =>', argv.title)
      console.log('body =>', argv.body)
    }
  })
} else if (command === 'list') {
  notes.getAll((res) => {
    console.log('notes successfully fetched.')
    console.dir(res, { depth: null, colors: true })
  })
} else if (command === 'read') {
  notes.readNote(argv.title, (res, err) => {
    if (err) {
      console.error('error =>', err.message, err.stack)
    } else {
      console.log('note successfully fetched.')
      console.dir(res, { depth: null, colors: true })
    }
  })
} else if (command === 'remove') {
  notes.removeNote(argv.title, (err) => {
    if (err) {
      console.error('error =>', err.message, err.stack)
    } else {
      console.log('note successfully deleted.')
    }
  })
} else if (command === 'update') {
  notes.updateNote(argv.title, argv.body, (err) => {
    if (err) {
      console.error('error =>', err.message, err.stack)
    } else {
      console.log('note successfully updated.')
      console.log('new note info:')
      console.log('title =>', argv.title)
      console.log('body =>', argv.body)
    }
  })
}
