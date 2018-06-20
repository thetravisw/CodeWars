high = (x) => (x.split(" ").map((word) => word.split('').map(letter => letter.charCodeAt(0) - 96).concat([0]).reduce((sum, val) => sum + val)).map((score, index) => score = [x.split(" ")[index], score]).sort((a, b) => b[1] - a[1]))[0][0]


//  the random .concat in the middle is because some moron didn't read the problem description before submitting tests.  The kata explicitly says the input is a string of words (as in, an empty string is an invalid input).  Yet empty-string was in the test cases three different times which causes the .reduce on an empty array to fail.



function high (x) {
    let words = x.split(" ")
    let values = words.map((word) => word.split('').map(letter => letter.charCodeAt(0) - 96).concat([0]).reduce((sum, val) => sum + val))
    let highscore = words.map((word) => word.split('').map(letter => letter.charCodeAt(0) - 96).concat([0]).reduce((sum, val) => sum + val)).sort((a, b) => b - a)[0]
    let i = 0
    while (values[i] < highscore) {
        i++
    }
    return words[i]
}