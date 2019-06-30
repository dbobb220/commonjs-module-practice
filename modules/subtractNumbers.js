const subtract = require("./subtract");

module.exports.subtractOne = (num) => {
    return subtract(num, 1);
};

module.exports.subtractFive = (num) => {
    return subtract(num, 5);
};

module.exports.subtractTen = (num) => {
    return subtract(num, 10);
}
