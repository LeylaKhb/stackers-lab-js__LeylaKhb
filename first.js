function plusIndex(array) {
    return array.map((element, index) => (element + index + 1) % 10);
}

console.log(plusIndex([4, 6, 9, 1, 3]));