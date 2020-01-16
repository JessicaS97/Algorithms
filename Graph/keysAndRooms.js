/**
 * There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 
    Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.
    Initially, all the rooms start locked (except for room 0). 
    You can walk back and forth between rooms freely.

    Return true if and only if you can enter every room.
 * 
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let seen = new Set(), stack = []
    seen.add(0)
    stack.push(0)
    while (stack.length) {
        let i = stack.pop()
        rooms[i].forEach(r => {
            if (!seen.has(r)) {
                stack.push(r)
                seen.add(r)
            }
        })
    }
    return seen.size === rooms.length
};