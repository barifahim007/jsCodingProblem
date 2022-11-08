// remove duplicate name from an arrays
const names = ['fahim', 'tia pakhi', 'kazi', 'asif', 'tia pakhi', 'fahim', 'kazi', 'rohan', 'pagla', 'sakhchunni', 'rohan', 'sakhchunni', 'zara', 'zara'];
function duplicateName(names) {
    const uniqueNames = [];
    for (let i = 0; i < names.length; i++) {
        const index = names[i];
        if (uniqueNames.includes(index) === false) {
            uniqueNames.push(index);
        }
    }
    return uniqueNames;
}
const newName = duplicateName(names);
console.log(newName)