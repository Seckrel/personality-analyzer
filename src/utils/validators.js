const maxCheck = (files, MAX_SIZE) => {
    const total = files.reduce((curr, item) => item.size + curr, 0);
    if (total > MAX_SIZE) {
        return true;
    }
    return false;
}

const filterRedundancy = (files) => {
    return [...new Map(files.map(item =>
        [item.name, item])).values()];
}

export { maxCheck, filterRedundancy };