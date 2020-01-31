/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let seen = new Set(), stack = []
    seen.add(0)
    stack.push(0)
    while (stack.length) {
        let cur = stack.pop()
        rooms[cur].forEach(key => {
            if (!seen.has(key)) {
                seen.add(key)
                stack.push(key)
            }
        })
    }
    return seen.size === rooms.length
};