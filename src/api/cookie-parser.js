/* Source: https://github.com/jshttp/cookie.git */

var decode = decodeURIComponent
var pairSplitRegExp = /; */


/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

const tryDecode = (str, decode) => {
  try {
    return decode(str)
  } catch (e) {
    return str
  }
}

export const parse = (str, options) => {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string')
  }

  var obj = {}
  var opt = options || {}
  var pairs = str.split(pairSplitRegExp)
  var dec = opt.decode || decode

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i]
    var eq_idx = pair.indexOf('=')

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim()

    // quoted values
    if ('"' === val[0]) {
      val = val.slice(1, -1)
    }

    // only assign once
    if (undefined === obj[key]) {
      obj[key] = tryDecode(val, dec)
    }
  }

  return obj
}

