# clinotes - 📔Command-Line Notes 

* Command-Line tool allowing you to create, read, and delete notes
* Project status: working/prototype

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub license](https://img.shields.io/github/license/strudra/clinotes.svg)](https://github.com/strudra/clinotes/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/strudra/clinotes.svg)](https://github.com/strudra/clinotes/stargazers)

# Installation

Instructions:
- Download the repository
- Get started with the following command to see what you can do:
```sh
node app.js --help
```

# Usage

```
Commands:
  app.js add     adds a new note
  app.js list    prints all notes
  app.js read    prints a note with title specified
  app.js remove  removes a note with title specified

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

### Add a new note with title 'example title' and body 'example body'

```sh
node app.js add -t 'example title' -b 'example body'
```

### Lists all notes

```sh
node app.js list
```

### Prints an existing note with title 'example title'

```sh
node app.js read -t 'example title '
```

### Removes a note with title 'example title'

```sh
node app.js remove -t 'example title '
```

# License

[MIT Licence](https://github.com/strudra/clinotes/blob/master/LICENSE)

# About Dragos

The [Dragos' website](https://strudra.github.io/portfolio/) best describes what Dragos likes to do. Check it out ;)
