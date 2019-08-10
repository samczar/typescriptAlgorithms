function absoluteValuesSumMinimizations(a) {
    return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}
console.log(absoluteValuesSumMinimizations([2, 4, 6, 7]));
console.log(absoluteValuesSumMinimizations([2, 4, 6, 7, 8]));
console.log(absoluteValuesSumMinimizations([2, 4, 6, 7, 8, 9]));
