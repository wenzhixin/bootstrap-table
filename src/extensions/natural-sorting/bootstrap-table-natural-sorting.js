/**
 * @author: Brian Huisman
 * @webSite: http://www.greywyvern.com
 * @version: v1.0.0
 * JS functions to allow natural sorting on bootstrap-table columns
 * add data-sorter="alphanum" or data-sorter="numericOnly" to any th
 *
 * @update Dennis Hernández <http://djhvscf.github.io/Blog>
 * @update Duane May
 */

function alphanum (a, b) {
  function chunkify (t) {
    var tz = []
    var y = -1
    var n = 0

    for (let i = 0; i <= t.length; i++) {
      var char = t.charAt(i)
      var charCode = char.charCodeAt(0)
      var m = (charCode === 46 || (charCode >= 48 && charCode <= 57))
      if (m !== n) {
        tz[++y] = ''
        n = m
      }
      tz[y] += char
    }

    return tz
  }

  function stringfy (v) {
    if (typeof(v) === 'number') {
      v = '' + v
    }
    if (!v) {
      v = ''
    }
    return v
  }

  var aa = chunkify(stringfy(a))
  var bb = chunkify(stringfy(b))

  for (var x = 0; aa[x] && bb[x]; x++) {
    if (aa[x] !== bb[x]) {
      var c = Number(aa[x])
      var d = Number(bb[x])

      if (c === aa[x] && d === bb[x]) {
        return c - d
      }
      return (aa[x] > bb[x]) ? 1 : -1

    }
  }
  return aa.length - bb.length
}

function numericOnly (a, b) {
  function stripNonNumber (s) {
    s = s.replace(new RegExp(/[^0-9]/g), '')
    return parseInt(s, 10)
  }

  return stripNonNumber(a) - stripNonNumber(b)
}
