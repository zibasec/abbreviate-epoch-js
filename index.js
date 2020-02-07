const zeroPrefix = n => n < 10 ? `0${n}` : n

module.exports = (epoch, opts = {}) => {
  const { utc = true } = opts
  const t = new Date(epoch)
  const g = utc ? 'getUTC' : 'get'
  return {
    YYYY: String(t.getFullYear()),
    MM: String(zeroPrefix(t[`${g}Month`]() + 1)),
    DD: String(zeroPrefix(t[`${g}Date`]())),
    hh: String(zeroPrefix(t[`${g}Hours`]())),
    mm: String(zeroPrefix(t[`${g}Minutes`]())),
    ss: String(zeroPrefix(t[`${g}Seconds`]())),
    ms: String(zeroPrefix(t[`${g}Milliseconds`]()))
  }
}
