// Takes an array and converts it to an object with the elements in the array with their respective id's as the key and the data as an object as the value.
const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {})

module.exports = toObject;