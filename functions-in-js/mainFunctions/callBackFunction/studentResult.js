let checkResult = (mark, callback) => {
    return callback(mark)
}

let showResult = mrk => mrk >= 50 ? 'pass' : 'fail'

let result = checkResult(40, showResult)

console.log(result)