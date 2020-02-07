const test = require('tape')
const epochAbv = require('.')

const epoch = 1581053541649 // 2020-02-07T05:32:21.649Z
test('epoch is properly abbreviated', t => {
  const output = epochAbv(epoch)
  const expected = {
    YYYY: '2020',
    MM: '02',
    DD: '07',
    hh: '05',
    mm: '32',
    ss: '21',
    ms: '649'
  }

  t.deepEquals(output, expected)

  const noUtcOutput = epochAbv(epoch, { utc: false })
  const utcFalseExpected = {
    YYYY: '2020',
    MM: '02',
    DD: '07',
    hh: '00',
    mm: '32',
    ss: '21',
    ms: '649'
  }

  t.deepEquals(noUtcOutput, utcFalseExpected)

  t.end()
})
