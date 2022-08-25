const fs = require('fs')

fs.readdir('./', { withFileTypes: true }, (err, files) => {
	if (err) {
		console.error(err)
		return
	}

	console.log('files: ')
	files.forEach(file => {
		// the `isDirectory` method returns true if the entry is a directory
		const type = file.isDirectory() ? '📂' : '📄'
		console.log(type, file.name)
	})
})