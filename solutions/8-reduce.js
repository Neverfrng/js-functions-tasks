// BEGIN
const groupBy = (array, key) => {
    return array.reduce((accumulator, current) => {
        const groupKey = current[key];

        if (!accumulator[groupKey]) {
            accumulator[groupKey] = [];
        }

        accumulator[groupKey].push(current);

        return accumulator;
    }, {});
};

export default groupBy
// END