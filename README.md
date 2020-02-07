# abbreviate-epoch-js

Takes epoch and gives you YYYY, MM, DD, etc type attributes useful for string formatting

## Install

`npm install zibasec/abbreviate-epoch-js`

## Usage

```js
const abvEpoch = require('@zibasec/abbreviate-epoch')

const epoch = 1581053541649

const output = epochAbv(epoch)
// value of 'output'
// {
//     YYYY: '2020',
//     MM: '02',
//     DD: '07',
//     hh: '05',
//     mm: '32',
//     ss: '21',
//     ms: '649'
//   }
```

By default it uses `getUTC*` methods, to dictate otherwise do this:

```js
const abvEpoch = require('@zibasec/abbreviate-epoch')

const epoch = 1581053541649

const output = epochAbv(epoch, { utc: false })
```