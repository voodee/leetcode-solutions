/**
 * @param {string} s
 * @return {number}
 */

const dictionary = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
}

const romanToInt = function(s) {
    let result = 0;
    for (let i = 0; i <= s.length - 1; ++i) {
        const current = dictionary[s[i]];
        const next = dictionary[s[i + 1]];

        if (current < next) result -= current;
        else result += current;
    }
    return result;
};

module.exports = romanToInt;
