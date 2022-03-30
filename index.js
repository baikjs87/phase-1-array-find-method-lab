// function superbowlWin(record) {
//     function games(element, index, record) {
//         for (let i = 0; i < record.length; i++) {
//             if (record[i].result === "W") {
//                 return record[i].year
//             }
//             else {
//                 return undefined
//             }
//         }
//     }
//     record.find(games)
// }


function superbowlWin(record) {
    function winningYear(gameData) {
        if (gameData.result === "W") {
            return true
        }
        else {
            return false
        }
    }
    const yearWon = record.find(winningYear)
    if (yearWon) {
        return yearWon.year
    }
}