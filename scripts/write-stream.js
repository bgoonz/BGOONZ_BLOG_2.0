const fs = require('fs')

class Fibonacci {
	// The Fibonacci class has the previous number and current
	// number as its instance attributes
	constructor() {
		this.prev = 0
		this.current = 1
	}

	// the next method returns the current value, and
	// increments the current value by adding the past value to it
	next() {
		const current = this.current
		this.prev = current
		this.current = current + this.prev
		return current
	}
}

// Iniitalize a writeStream to a a new file "fibonacci.txt"
const writeStream = fs.createWriteStream('fibonacci.txt')

// the on ready callback gets called once the file is available to write
writeStream.on('ready', () => {
	// initialize a new object of the Fibonacci class
	const f = new Fibonacci()

	// For each iteration, obtain the next number in the sequence 
	// and write to the file, adding a newline each time
	for (let i = 0; i < 1000; i++) {
		const n = f.next()
		writeStream.write(String(n) + '\n', err => {
			// if there is any error in writing, log it
			if (err) {
				console.error('error writing:', err)
			}
		})
	}

	// The `end` method closes the write stream, once we're done
	writeStream.end()
})