const fs = require('fs')
// Initialize the time at which the program started
const startTime = new Date()

// create a read stream from the `words.txt` file
const rStream = fs.createReadStream('words.txt')

// initialize total word count
let total = 0

// the `on data` method registers a handler for everytime we
// receive new data from the file stream
rStream.on('data', b => {
	// `b` here is the chunk of data received from the
	// file stream
	const bStr = b.toString()
	// We split the string by spaces and new lines and add it to the
	// total -- we subtract one because of the extra space/newline/broken word
	// at the end of the chunk
	// we shouldn't do this for the last chunk of data, which we handle later
	total += bStr.split(/[\s\n]+/).length - 1
})

rStream.on('end', () => {
	// Finally, the `on end` handler is called once the data stream completes

	// we add one to the total, because we shouldn't subtract 1 from the last
	// chunk of data in the `data` handler, for which we're compensating here
	console.log('total words:', total + 1)


	// Print the total time taken, as well as the total used program memory
	console.log('total time:', (new Date()) - startTime)

	const memoryUsedMb = process.memoryUsage().heapUsed / 1024 / 1024
	console.log('the program used', memoryUsedMb, 'MB')
})