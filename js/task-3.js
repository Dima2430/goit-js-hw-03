function filterArray(numbers, value) {
    const filteredNumbers = [];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > value) {
            filteredNumbers.push(numbers[index]);
        }
        
    }
    return filteredNumbers;
}
