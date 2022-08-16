const fs = require('fs')

// The async `opendir` method creates a stream from the directory
// passed as its first argument. The stream is present in the callback
fs.opendir('./', (err, dir) => {

	if (err) {
		// log and return if theres any error
		console.error(err)
		return
	}

	// A scoped function is defined that reads the next
	// file in the directory and calls itself recursively
	const readNext = (dir) => {
		// The `read` method gives us information on the
		// next file in the directory. If there are no
		// more files left, the value of `file` is null
		dir.read((err, file) => {
			if (err) {
				// log and return error
				console.error(err)
				return
			}

			// If file is null, we are done. 
			if (file === null) {
				return
			}

			// If the file exists, log the name, along with
			// the icon for its type
			const type = file.isDirectory() ? '📂' : '📄'
			console.log(type, file.name)
			// Recursively call `readNext` for the next directory entry
			readNext(dir)
		})
	}

	// Call the `readNext` function with the first directory entry
	readNext(dir)
})