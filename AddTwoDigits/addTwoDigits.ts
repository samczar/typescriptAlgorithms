function addTwoDigits(n: number): number {
	let convertNum = n.toString().split('')
	let total = 0
	convertNum.forEach(num => {
		total += parseInt(num)
		total
	})

	return total
}
console.log(addTwoDigits(321))
