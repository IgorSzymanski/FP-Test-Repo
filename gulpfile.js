const { series, src, dest } = require('gulp')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const fs = require('fs')
const gm = require('gulp-gm')
const globby = require('globby')

const inputPath = 'storage/'
const outputPath = 'public/'

const paths = ['library/pokemon/artworks/regular/', 'library/pokemon/artworks/regular/RB/']
const sizes = [{ width: 100, height: 100 }, { width: 250, height: 250 }, { width: 32, height: 32 }]

function build(cb) {
	paths.forEach((path) => {
		sizes.forEach(({ width, height }) => {
			const inputDir = `${inputPath}${path}`
			const input = `${inputDir}*.png`
			const output = `${outputPath}${path}${width}px/`

			src(input, { nodir: true })
				.pipe(newer(output))
				.pipe(
					gm((file) => {
						return file
							.resize(width, height)
							.background('none')
							.gravity('Center')
							.extent(width, height) //.modulate(100, 90)
					})
				)
				.pipe(imagemin())
				.pipe(dest(output))

			const inputFiles = globby(input, { nodir: true })
			const outputFiles = globby(output, { nodir: true })

			Promise.all([inputFiles, outputFiles])
				.then(([iFiles, oFiles]) => {
					/**
					 * @type {string[]}
					 */
					const filesToDelete = []

					oFiles.map((path) => {
						const cmpPath = path.replace(output, inputDir)
						if (iFiles.indexOf(cmpPath) === -1) {
							filesToDelete.push(path)
						}
					})

					console.info(`Numer of files to delete: ${filesToDelete.length.toString()}.`)

					filesToDelete.forEach((file) => console.info(file))

					return filesToDelete
				})
				.then((files) => {
					files
						.filter((file) => fs.existsSync(file))
						.forEach((file) => fs.unlinkSync(file))
				})
		})
	})

	cb()
}

exports.build = build
exports.default = series(build)
