const fs = require('fs')

fs.rmdir('./newdir', err => {
	if (err) {
		console.error(err)
		return
	}

	console.log('directory deleted')
})