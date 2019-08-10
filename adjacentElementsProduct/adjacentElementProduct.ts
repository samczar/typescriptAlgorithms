function adjacentElementsProduct(n: number[]): number {
	let largestProduct = n[0] * n[1]
	for (let i = 1; i < n.length - 1; i++) {
		let subProduct = n[i] * n[i + 1]
		largestProduct = largestProduct < subProduct ? subProduct : largestProduct
	}
	return largestProduct
}
const inputArray = [3, 6, -2, 4, -5, 7, 3]
console.log(adjacentElementsProduct(inputArray))
