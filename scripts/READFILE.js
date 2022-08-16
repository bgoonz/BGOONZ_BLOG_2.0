const fs = require('fs')
// Initialize the time at which the program started
const startTime = new Date()

fs.readFile('words.txt', (err, data) => {

	if (err) {
		console.error(err)
		return
	}

	// Split the words based on spaces and newlines and print the length
	const nWords = data.toString().split(/[\s\n]+/).length
	console.log('total words:', nWords)

	// print the total time taken and total program memory used
	console.log('total time:', (new Date()) - startTime)

	const memoryUsedMb = process.memoryUsage().heapUsed / 1024 / 1024
	console.log('the program used', memoryUsedMb, 'MB')
})