const classNames = arr => {
    return arr
    .filter(item => {
        const isStr = typeof(item) === "string";

        const isObj = item !== null && typeof(item) === "object" && !Array.isArray(item);

        return isStr || isObj;
    })
    .map(item => {
        const isStr = typeof(item) === "string";

        if (isStr) {
            return item;
        }
        else {
            return Object.keys(item)
            .filter(key => item[key])
        }
    })
    .flat()
    .join(" ");
};

export default classNames;