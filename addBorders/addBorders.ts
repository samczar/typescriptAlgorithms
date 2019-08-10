function addBorders(params: string[]): string[] {
	const wall = '*'.repeat(params[0].length + 2)
	params.push(wall)
	params.unshift(wall)
	for (let i = 1; i < params.length - 1; i++) {
		params[i] = '*'.concat(params[i], '*')
	}
	return params
}

console.log(addBorders(['abc', 'def']))
