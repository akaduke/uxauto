var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
	// require('time-grunt')(grunt);

	grunt.initConfig({
		// html
		jade: {
			compile: {
				pretty: false,
				options: {
					data: {
						debug: false
					}
				},
				files: [
					{
						expand: true,
						cwd: 'dev/',
						src: ['**/*.jade', '!**/etribe_ux_*.jade'],
						dest: 'temp/process1/',
						ext: '.html'
					}
				]
			}
		},

		prettify: {
			options: {
				indent: 1,
				indent_char: '\t',
				wrap_line_length: 78,
				brace_style: 'expand',
				unformatted: ['sub', 'sup', 'b', 'i', 'u']
			},
			all: {
				expand: true,
				cwd: 'temp/process1/',
				src: ['**/*.html'],
				dest: 'www/',
				ext: '.html'
			},
		},

		// css
		less: {
			// options: {
			// 	plugins: [
			// 		new (require('less-plugin-autoprefix'))({browsers: ["> 0%"]})
			// 	]
			// },
			files: {
				expand: true,
				cwd: "dev/",
				src: ['**/*.less', '!**/etribe_ux_*.less'],
				dest: "temp/process1",
				ext: ".css"
			}

		},

		csscomb: {
			options:{
				config: 'csscomb.json'
			},
			dynamic_mappings: {
				expand: true,
				cwd: 'temp/process1/',
				src: ['**/*.css'],
				dest: 'temp/process2/',
				ext: '.css'
			}
		},

		cssmin: {
			my_target: {
				options: {
					keepBreaks: true,
					advanced:true,
					aggressiveMerging: true,
					keepSpecialComments: "*",
					compatibility: 'ie7'
				},
				files: [{
					expand: true,
					cwd: 'temp/process2/',
					src: ['**/*.css'],
					dest: 'www/',
					ext: '.css'
				}]
			}
		},

		// js

		// common
		clean: {
			build: {
				options: {
					force: true
				},
				src: ['www/**/*.{html,css,js,less,jade,jpg,png,gif,jpeg,eot,ttf,woff,woff2}', 'temp/']
			}
		},

		copy: {
			all: {
				files: [
					{expand: true, flatten: false, cwd: 'dev/', src: ['**/*', '!**/*.{less,jade}'], dest: 'www/', filter: 'isFile'}
				]
			},
			images: {
				files: [
					{expand: true, flatten: false, cwd: 'temp/process1/', src: ['**/*.{png,jpg,gif}'], dest: 'www/', filter: 'isFile'}
				]
			}
		},


		imagemin: {
			options: {
				optimizationLevel: 3,
				svgoPlugins: [{ removeViewBox: false }],
				use: [mozjpeg()]
			},
			dynamic: {
				files: [{
				expand: true,
				cwd: 'dev/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'temp/process1/'
				}]
			}
		},

		connect: {
			server: {
				options: {
					port: 8000,
					base: 'www'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
				spawn: false
			},
			jade: {
				files: ['dev/**/*.jade'],
				tasks: ['newer:jade', 'newer:prettify']
			},
			less: {
				files: ['dev/**/*.less'],
				tasks: ['newer:less', 'newer:csscomb', 'newer:cssmin']
			},
			copy: {
				files: ['dev/**/*'],
				tasks: ['newer:copy:all']
			}
		}
	});

	require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['clean', 'jade', 'prettify', 'less', 'csscomb', 'cssmin', 'imagemin', 'copy', 'connect', 'watch']);
}