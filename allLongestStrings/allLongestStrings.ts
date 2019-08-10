function allLongestString(n: string[]): any {
	let longestLength = 0
	let longestWord = []
	n.forEach(word => {
		longestLength = longestLength < word.length ? word.length : longestLength
	})
	n.forEach(word => {
		word.length === longestLength ? longestWord.push(word) : ''
	})
	return longestWord
}
let inputArrayString = ['ab', 'aa', 'ad', 'vcd', 'aba']
console.log(allLongestString(inputArrayString))
