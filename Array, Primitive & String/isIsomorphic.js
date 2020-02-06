/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sMap = [], tMap = []
    for (let i=0; i<s.length; i++) {
        if (!sMap[s.charAt(i)]) {
            sMap[s.charAt(i)] = t.charAt(i)
        } else if (sMap[s.charAt(i)] && sMap[s.charAt(i)] !== t.charAt(i)) {
            return false
        }
    }
    for (let i=0; i<t.length; i++) {
        if (!tMap[t.charAt(i)]) {
            tMap[t.charAt(i)] = s.charAt(i)
        } else if (tMap[t.charAt(i)] && tMap[t.charAt(i)] !== s.charAt(i)) {
            return false
        }
    }
    return true;
};