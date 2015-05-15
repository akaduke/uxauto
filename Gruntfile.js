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
			},
			guide: {
				pretty: false,
				options: {
					data: {
						debug: false
					}
				},
				files: [
					{
						expand: true,
						cwd: 'boilerplate/',
						src: ['**/*.jade', '!**/etribe_ux_*.jade'],
						dest: 'temp_boilerplate/process1/',
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
			guide: {
				expand: true,
				cwd: 'temp_boilerplate/process1/',
				src: ['**/*.html'],
				dest: 'www_boilerplate/',
				ext: '.html'
			}
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
			},
			guide: {
				expand: true,
				cwd: "boilerplate/",
				src: ['**/*.less', '!**/etribe_ux_*.less'],
				dest: "temp_boilerplate/process1/",
				ext: ".css"
			}

		},

		markdown: {
			all: {
				files: [{
					expand: true,
					cwd: "boilerplate/",
					src: ['**/*.md', '!**/etribe_ux_*.md'],
					dest: 'www_boilerplate/',
					ext: '.html'
				}]
				,
				options: {
					template: 'markdown_layout.jst',
					preCompile: function(src, context) {},
					postCompile: function(src, context) {},
					templateContext: {},
					contextBinder: false,
					contextBinderMark: '@@@',
					autoTemplate: true,
					autoTemplateFormat: 'jst',
					markdownOptions: {
						gfm: true,
						highlight: 'manual',
						codeLines: {
							before: '<span>',
							after: '</span>'
						}
					}
				}
			}
		},

		// md2html: {
		// 	multiple_files: {
		// 		options: {
		// 			layout: 'etribe_ux_markdown_layout.jade',
		// 			basePath: '/',
		// 			markedOptions: {
		// 				gfm: false,
		// 				langPrefix: 'code-'
		// 			}
		// 		},
		// 		files: [{
		// 			expand: true,
		// 			cwd: "boilerplate/",
		// 			src: ['**/*.md', '!**/etribe_ux_*.md'],
		// 			dest: 'www_boilerplate/',
		// 			ext: '.html'
		// 		}]
		// 	}
		// },

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
			},
			guide: {
				expand: true,
				cwd: 'temp_boilerplate/process1/',
				src: ['**/*.css'],
				dest: 'temp_boilerplate/process2/',
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
			},
			guide: {
				options: {
					keepBreaks: true,
					advanced:true,
					aggressiveMerging: true,
					keepSpecialComments: "*",
					compatibility: 'ie7'
				},
				files: [{
					expand: true,
					cwd: 'temp_boilerplate/process2/',
					src: ['**/*.css'],
					dest: 'www_boilerplate/',
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
				src: ['www/**/*.{html,css,js,less,jade,md,jpg,png,gif,jpeg,eot,ttf,woff,woff2}', 'temp/']
			}
			, guide: {
				options: {
					force: true
				},
				src: ['www_boilerplate/**/*.{html,css,js,less,jade,md,jpg,png,gif,jpeg,eot,ttf,woff,woff2}', 'temp_boilerplate/']
			}
		},

		copy: {
			all: {
				files: [
					{expand: true, flatten: false, cwd: 'dev/', src: ['**/*', '!**/*.{less,jade,md}'], dest: 'www/', filter: 'isFile'}
				]
			},
			images: {
				files: [
					{expand: true, flatten: false, cwd: 'temp/process1/', src: ['**/*.{png,jpg,gif}'], dest: 'www/', filter: 'isFile'}
				]
			},
			guide: {
				files: [
					{expand: true, flatten: false, cwd: 'boilerplate/', src: ['**/*', '!**/*.{less,jade,md}'], dest: 'www_boilerplate/', filter: 'isFile'}
				]
			},
			guide_images: {
				files: [
					{expand: true, flatten: false, cwd: 'temp_boilerplate/process1/', src: ['**/*.{png,jpg,gif}'], dest: 'www_boilerplate/', filter: 'isFile'}
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
			},
			guide: {
				files: [{
				expand: true,
				cwd: 'boilerplate/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'temp_boilerplate/process1/'
				}]
			}
		},

		connect: {
			server: {
				options: {
					port: 10001,
					base: 'www'
				}
			}
			, guide: {
				options: {
					port: 10000,
					base: 'www_boilerplate'
				}
			}
		},
		watch: {
			options: {
				livereload: {port: 10100},
				spawn: false
			},
			// guide livereload가 댐
			jade: {
				files: ['dev/**/*.jade', 'boilerplate/**/*.jade'],
				tasks: ['newer:jade:compile', 'newer:jade:guide', 'newer:prettify:all', 'newer:prettify:guide']
			},
			less: {
				files: ['dev/**/*.less', 'boilerplate/**/*.less'],
				tasks: ['newer:less:file', 'newer:less:guide', 'newer:csscomb:dynamic_mappings', 'newer:csscomb:guide', 'newer:cssmin:my_target', 'newer:cssmin:guide']
			},
			markdown: {
				files: ['boilerplate/**/*.md'],
				tasks: ['newer:markdown']
			},
			copy: {
				files: ['dev/**/*', 'boilerplate/**/*'],
				tasks: ['newer:copy:all', 'newer:copy:guide']
			}
			// copy: {
			// 	files: ['boilerplate/**/*'],
			// 	tasks: ['newer:copy:guide']
			// }
			// guide는 livereload가 안댐
			// jade: {
			// 	files: ['dev/**/*.jade'],
			// 	tasks: ['newer:jade:compile', 'newer:prettify']
			// },
			// less: {
			// 	files: ['dev/**/*.less'],
			// 	tasks: ['newer:less:files', 'newer:csscomb', 'newer:cssmin']
			// },
			// copy: {
			// 	files: ['dev/**/*'],
			// 	tasks: ['newer:copy:all']
			// }
		}
	});

	require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['clean', 'jade', 'prettify', 'less', 'csscomb', 'markdown', 'cssmin', 'imagemin', 'copy', 'connect', 'watch']);
}