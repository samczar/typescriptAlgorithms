function add(param1: number, params2: number): number {
	return param1 + params2
}

function add2(...param1: number[]): number {
	let total = 0
	param1.forEach(param => {
		total += param
	})
	return total
}
function addrest(...param1: number[]): number {
	const result = param1.reduce((previous, current) => {
		return previous + current
	})
	return result
}

console.log(add(2, 3))
console.log(addrest(2, 3, 4, 6, 7))
