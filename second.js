function sumOfTwoLowestPositiveIntegers(array) {
    array = array.sort((x, y) => x - y);
    return array[0] + array[1];
}

console.log(sumOfTwoLowestPositiveIntegers([19, 5, 42, 2, 77]));