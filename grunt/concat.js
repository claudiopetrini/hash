module.exports = {

	options: {
		stripBanners: {
			block: true
		},
	},

	lib: {
		src: [
			'./bower_components/forge/js/util.js',
			'./bower_components/forge/js/md5.js',
			'./bower_components/forge/js/sha1.js',
			'./bower_components/forge/js/sha256.js',
			'./bower_components/forge/js/sha512.js',
			'./dist/js/sha3.js',
			'./dist/js/ripemd160.js',
			'./js/main.js'

		],
		dest: './dist/js/libs.min.js'
	}

};