function dorkify(obj) {
    const newObj = {};
    for (const key in obj) {
        newObj['$' + key] = obj[key];
    }
    return newObj; 
};

module.exports = dorkify;